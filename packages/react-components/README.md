# Component library

[![Netlify Status](https://api.netlify.com/api/v1/badges/61471929-230b-44ef-bfa3-672d2aa4de64/deploy-status)](https://app.netlify.com/sites/mordech-react-components/deploys)

The component library I'm going to use in my projects.

If you have any questions, please contact me 😇

workspace name `@mordech/react-components`

## Run Storybook

```bash
pnpm storybook
```

## Build Storybook

```bash
pnpm nx build-storybook
```

## Visual regression testing

I use [Loki](https://loki.js.org/) for visual regression tests.
Before creating a pull request, please run visual tests on the project.

```bash
pnpm nx visual
```

and follow the steps required to pass.

If changes have been made to existing components, please approve them.

After approving the changes, run the following:

```bash
pnpm loki approve
```
