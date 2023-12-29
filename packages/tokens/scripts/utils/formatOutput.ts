import prettier, {
  type BuiltInParserName,
  type LiteralUnion,
  type Parser,
} from 'prettier';

interface FormatOptions {
  input: string;
  parser: LiteralUnion<BuiltInParserName> | Parser;
}
export async function formatOutput({
  input,
  parser,
}: FormatOptions): Promise<string> {
  const prettierConfig = (await prettier.resolveConfig(process.cwd())) || {};
  return await prettier.format(input, { parser: parser, ...prettierConfig });
}
