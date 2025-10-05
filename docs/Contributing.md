# Contributing

## Setup

1. Use the required version of node defined in [.nvmrc](./.nvmrc)
   - This can be easily achieved with [node version manager](https://github.com/nvm-sh/nvm), [fast node manager](https://github.com/Schniz/fnm), or something similar.
   - Follow the [Node.js release schedule](https://nodejs.org/en/about/previous-releases)
2. Install dependencies `npm install`
3. Initialize git hooks with `npm run init:git-hooks`
4. Run storybook dev server with `npm run sb:dev`

## Code linting and formatting

- This project uses the following packages:
  - [EditorConfig](https://editorconfig.org/) - for maintaining consistent coding styles across various editors and IDEs
  - [eslint](https://eslint.org/) - for linting and catching problems in JS and TS
    - Setup using [angular-eslint](https://github.com/angular-eslint/angular-eslint)
  - [Prettier](https://prettier.io/) - for an opinionated formatter to work across many languages
- These tools will automatically run on staged files via a pre-commit git hook
  - Initialize git hooks with `npm run init:git-hooks`
  - When you commit, it will auto fix any problems it can, then continue with the commit. If it cannot auto fix a problem, you will have to manually fix it before being able to successfully commit
- Integrate these packages with your editor, and be sure to enable "format on save"
  - EditorConfig - https://editorconfig.org/#download
  - eslint - https://eslint.org/docs/latest/use/integrations
  - Prettier - https://prettier.io/docs/en/editors

### VS Code

For VS Code, be sure to have these settings:

- "editor.formatOnSave": true
- "editor.defaultFormatter": "esbenp.prettier-vscode"
- "eslint.useFlatConfig": true

## Tokens

CSS variables are defined in

- [colorPrimitives.ts](./projects/qai-ui/src/styles/colorPrimitives.ts)
- [theme.ts](./projects/qai-ui/src/styles/theme.ts)
- [typography.ts](./projects/qai-ui/src/styles/typography.ts)

They are transformed to

- [theme.css](./projects/qai-ui/src/css/theme.css)
- [typography.css](./projects/qai-ui/src/css/typography.css)

After editing any of these source files, run `npm run assets:build` to generate updated variables files.

NOTE: Primitive colors are not exported, and instead should only be referenced in a theme. You then uses theme variables in components. This allows the base colors to change, but not have to change a downstream component, only needing to update the theme.

Read more about colors on the [Primitives](https://quantified-communications.github.io/sim-storybook/?path=/docs/foundations-colors--docs) and [Theme](https://quantified-communications.github.io/sim-storybook/?path=/docs/foundations-theme--docs) doc pages.

## Icons

Download new icons from [Untitled UI](https://www.untitledui.com/free-icons/general)
and add them to the [svgs](./projects/qai-ui/src/icons/svgs) directory.

NOTE: Icons should be a single path and not have any fill-rule property to allow the color and size to be changed through code. This can be achieved by editing the icon in a vector graphic editor.

The following steps outline how to do this using [Inkscape](https://inkscape.org/release/):

### Get the icon

1. Find the icon at [Untitled UI free icons](https://www.untitledui.com/free-icons/general)
1. Click the icon to copy it as an SVG
1. In [svgs folder](./projects/qai-ui/src/icons/svgs), create a new file with the icon name
1. Paste in the copied SVG and save it

### Edit the icon

1. Open the new SVG in Inkscape
1. Edit → Select All
1. Path → Stroke to path
1. Path → Break apart
1. Edit → Select All
1. Path → Exclusion
1. Path → Combine
1. File → Save As → Choose "Optimized SVG"
1. Once saved, run `npm run assets:build` to optimize and build a new icon store file

## Creating new components

- Use the [Angular CLI](https://angular.dev/cli/generate/component) for generating new components:
  ```shell
  > npm run ng generate component base/qai-new-component -- --project=qai-ui --skip-tests
  ```
- Move the component to the appropriate folder
- All components and directives need to have [standalone](https://angular.dev/api/core/Component#standalone) set to true
- Export the component in [public-api.ts](./projects/qai-ui/src/public-api.ts)

### Selector

- **attribute** - use an attribute selector when you want access to the underlying primitive element
  - this avoids unnecessary wrapper elements
  - you can then add any valid attribute for that element without having to redefine it as an input
  - (see [qai-button](./projects/qai-ui/src/base/qai-button/qai-button.ts#L49), [qai-input](./projects/qai-ui/src/forms/qai-input/qai-input.ts#L19))
- **element** - use an element selector for all other use cases

### Styling

- Read the ([CSS guide](./CSS.md))

### Storybook

- Read the ([Storybook guide](./STORYBOOK.md))

## Variants

### Styling

- Use CSS custom properties for managing component variant styles ([guide](./CSS.md#local-variables))

### Content projection and slots

- If you need your component to support any HTML/Angular components inside, use content projection
  - (see [qai-alert](./projects/qai-ui/src/base/qai-alert/qai-alert.ts#L36))
- If you want to restrict your component to just be text, use some sort of `label` string input
  - (see [qai-menuitem](./projects/qai-ui/src/base/qai-menuitem/qai-menuitem.ts#L6))
- Use [qaiSlot](./projects/qai-ui/src/layout/qaiSlot/qaiSlot.directive.ts) when you want to put a conditional wrapper around projected content
  - (see [qai-label](./projects/qai-ui/src/base/qai-label/qai-label.ts#L32-L34))

## Accessibility

1. Interactive elements should almost never be a `div`
   - use `<a>` if redirecting to somewhere (eg route change)
   - use `<button>` if something happens on the page

1. alt on images is not always needed ([css-tricks](https://css-tricks.com/alt-text-not-always-needed/))

## Local development

To have the host app use in progress work instead of published code

1. In this repo, run build with the `--watch` flag. Any time you change a file, the library will rebuild.

   ```shell
   > npm run ui:build -- --watch
   ```

1. In the host app, point to the dist folder of the library. You may need to update the repo path.

   ```shell
   # Be sure to use the correct path of the sim-storybook repo
   > npm install file://../sim-storybook/dist/qai-ui/ --install-links --force

   # clear cache if you encounter problems
   > npm run ng cache clean
   ```

## Submitting PRs

- Please name branches with a short description. This helps reviewers quickly pull down the branch to test without having to know a ticket number.
- Fill out as much information as possible in the pull request template.
- From a branch, run `npm run sb:deploy` to publish your work to github pages, and share the link in the PR description.
- Try for a [semantic commit message](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) for the title, helpful for easily finding specific changes via the commit history log.
- Always squash merge PRs - allows for a clean commit history.
- Always delete merged branches - keeps the repo organized.

## Deploy Storybook

```shell
# Build and deploy the static site to GitHub pages
> npm run sb:deploy
```

- Storybook is hosted on [GitHub pages](https://pages.github.com/) via the [gh-pages branch](https://github.com/Quantified-Communications/sim-storybook/tree/gh-pages)
- You can deploy Storybook from any branch to a unique URL. This can be helpful to showcase in progress work.
  - All branch names will be normalized and unique characters transformed so they are valid for a URL
  - eg. a branch named "feature/my-component" will transform to "feature-my-component"
- After the deploy is finished, you'll see the URL in your console
- It may take several minutes for GitHub pages to fully deploy
  - Check the deployment status at [github.com/Quantified-Communications/sim-storybook/actions](https://github.com/Quantified-Communications/sim-storybook/actions)
- The `dev` branch acts as the stable release, and if you go to the GitHub pages root [quantified-communications.github.io/sim-storybook](https://quantified-communications.github.io/sim-storybook) you will always be redirected to the `dev` subdirectory

## Publish Package

1. Follow these steps to publish the @qai/ui library:

   ```shell
   # Build and publish the library to the "dist" branch
   > npm run ui:publish
   ```

## Dependencies

- [Upgrading Angular](https://angular.dev/update-guide) and [Angular release schedule](https://angular.dev/reference/releases#release-schedule)
