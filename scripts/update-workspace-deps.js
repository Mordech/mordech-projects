// Node.js script to update workspace package.json files with missing dependencies based on imports, scripts, and config files.
const fs = require('fs');
const path = require('path');

// Helper to read JSON file
function readJSON(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

// Helper to write JSON file with pretty formatting
function writeJSON(filePath, obj) {
  const json = JSON.stringify(obj, null, 2) + '\n';
  fs.writeFileSync(filePath, json, 'utf8');
}

// Recursively find all directories containing a package.json under the given root
function findWorkspaces(rootDir) {
  const workspaces = [];
  // Only consider immediate subdirectories of packages/* and apps/*
  const packageDirs = fs.readdirSync(path.join(rootDir, 'packages'), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(rootDir, 'packages', d.name));
  const appDirs = fs.readdirSync(path.join(rootDir, 'apps'), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(rootDir, 'apps', d.name));
  const candidateDirs = [...packageDirs, ...appDirs];
  for (const dir of candidateDirs) {
    if (fs.existsSync(path.join(dir, 'package.json'))) {
      workspaces.push(dir);
    }
  }
  return workspaces;
}

// Scan source files for import/require statements
function scanImports(workspaceDir) {
  const imports = new Set();
  function walkFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walkFiles(path.join(dir, entry.name));
      } else if (
        entry.isFile() &&
        /\.(ts|tsx|js|jsx)$/.test(entry.name)
      ) {
        const content = fs.readFileSync(path.join(dir, entry.name), 'utf8');
        // import ... from 'module'
        let match;
        const importRegex = /import\s+[^'"\n]*['"]([^'"\n]+)['"]/g;
        while ((match = importRegex.exec(content)) !== null) {
          const mod = match[1];
          if (!mod.startsWith('.') && !mod.startsWith('/')) {
            imports.add(mod);
          }
        }
        // require('module')
        const reqRegex = /require\(['"]([^'"\n]+)['"]\)/g;
        while ((match = reqRegex.exec(content)) !== null) {
          const mod = match[1];
          if (!mod.startsWith('.') && !mod.startsWith('/')) {
            imports.add(mod);
          }
        }
      }
    }
  }
  walkFiles(workspaceDir);
  return imports;
}

// Extract package names from script commands
function extractScriptPackages(pkgJson) {
  const devPkgs = new Set();
  if (!pkgJson.scripts) return devPkgs;
  for (const cmd of Object.values(pkgJson.scripts)) {
    // Split by spaces, take first token that looks like a package name
    const parts = cmd.split(/\s+/);
    if (parts.length === 0) continue;
    const first = parts[0];
    // Skip flags and commands starting with '-' or './'
    if (
      !first.startsWith('-') &&
      !first.startsWith('./') &&
      !first.startsWith('npm ') &&
      !first.startsWith('yarn ')
    ) {
      // Remove possible leading 'npx' or similar
      const pkg = first.replace(/^npx\s+/, '');
      devPkgs.add(pkg);
    }
  }
  return devPkgs;
}

// Extract plugin/extend packages from config JSON files (.eslintrc.json, .stylelintrc)
function extractConfigPackages(filePath) {
  const pkgs = new Set();
  if (!fs.existsSync(filePath)) return pkgs;
  try {
    const cfg = readJSON(filePath);
    // plugins array
    if (Array.isArray(cfg.plugins)) {
      for (const p of cfg.plugins) {
        if (typeof p === 'string' && !p.startsWith('.') && !p.startsWith('/')) {
          pkgs.add(p);
        }
      }
    }
    // extends array or string
    const extendsVal = cfg.extends;
    if (Array.isArray(extendsVal)) {
      for (const e of extendsVal) {
        if (typeof e === 'string' && !e.startsWith('.') && !e.startsWith('/')) {
          pkgs.add(e);
        }
      }
    } else if (typeof extendsVal === 'string') {
      if (!extendsVal.startsWith('.') && !extendsVal.startsWith('/')) {
        pkgs.add(extendsVal);
      }
    }
  } catch (_) {}
  return pkgs;
}

// Main
function main() {
  const rootDir = process.cwd();
  const rootPkgPath = path.join(rootDir, 'package.json');
  if (!fs.existsSync(rootPkgPath)) {
    console.error('Root package.json not found.');
    process.exit(1);
  }
  const rootPkg = readJSON(rootPkgPath);
  const rootDeps = { ...rootPkg.dependencies, ...rootPkg.devDependencies };
  const workspaces = findWorkspaces(rootDir);

  for (const ws of workspaces) {
    const pkgPath = path.join(ws, 'package.json');
    if (!fs.existsSync(pkgPath)) continue;
    const pkgJson = readJSON(pkgPath);
    const existingDeps = { ...pkgJson.dependencies };
    const existingDevDeps = { ...pkgJson.devDependencies };

    // Collect runtime dependencies from imports
    const importPkgs = scanImports(ws);

    // Collect dev dependencies from scripts and config files
    const scriptPkgs = extractScriptPackages(pkgJson);
    const eslintrcPath = path.join(ws, '.eslintrc.json');
    const stylelintrcPath = path.join(ws, '.stylelintrc');
    const configPkgs = new Set([
      ...extractConfigPackages(eslintrcPath),
      ...extractConfigPackages(stylelintrcPath)
    ]);
    const devPkgs = new Set([...scriptPkgs, ...configPkgs]);

    // Merge into package.json
    let updated = false;

    for (const mod of importPkgs) {
      if (!existingDeps[mod] && !existingDevDeps[mod]) {
        const ver = rootDeps[mod];
        if (ver) {
          pkgJson.dependencies = pkgJson.dependencies || {};
          pkgJson.dependencies[mod] = ver;
          updated = true;
          console.log(`Added dependency ${mod}@${ver} to ${pkgPath}`);
        }
      }
    }

    for (const mod of devPkgs) {
      if (!existingDeps[mod] && !existingDevDeps[mod]) {
        const ver = rootDeps[mod];
        if (ver) {
          pkgJson.devDependencies = pkgJson.devDependencies || {};
          pkgJson.devDependencies[mod] = ver;
          updated = true;
          console.log(`Added devDependency ${mod}@${ver} to ${pkgPath}`);
        }
      }
    }

    if (updated) {
      writeJSON(pkgPath, pkgJson);
    } else {
      console.log(`No changes needed for ${pkgPath}`);
    }
  }
}

main();