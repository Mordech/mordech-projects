# Component library

[![Netlify Status](https://api.netlify.com/api/v1/badges/61471929-230b-44ef-bfa3-672d2aa4de64/deploy-status)](https://app.netlify.com/sites/mordech-shared-components/deploys)

The component library I'm going to use in my projects.

If you have any questions please contact me 😇

workspace name `@mordech/components`

## Run
```bash
yarn storybook
```
## Build

```bash
yarn nx build
```
## Visual regression testing
I use [Loki](https://loki.js.org/) for visual regression tests.
Before creating a pull request please run visual tests on the project.
```bash
yarn nx visual
```
and follow the steps required to pass