# Component library

[![Netlify Status](https://api.netlify.com/api/v1/badges/61471929-230b-44ef-bfa3-672d2aa4de64/deploy-status)](https://app.netlify.com/sites/mordech-react-components/deploys)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white&style=flat)](https://mordech-react-components.netlify.app/)

The component library I'm going to use in my projects.

If you have any questions, please contact me 😇

workspace name `@mordech/react-components`

## Run Storybook

```bash
yarn storybook
```

## Build Storybook

```bash
yarn lerna run build-storybook --scope=@mordech/react-components
```

## Visual regression testing

I use [Loki](https://loki.js.org/) for visual regression tests.
Before creating a pull request, please run visual tests on the project.

```bash
yarn lerna run visual --scope=@mordech/react-components
```

and follow the steps required to pass.

If changes have been made to existing components, please approve them.

After approving the changes, run the following:

```bash
yarn lerna run visual:approve --scope=@mordech/react-components
```
