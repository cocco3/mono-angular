# Storybook guide

Before continuing, familiarize yourself with the official [writing stories](https://storybook.js.org/docs/writing-stories) documentation.

## Input options

For an input that can be a list of options, derive the type from an array

- (see [qai-button](./projects/qai-ui/src/base/qai-button/qai-button.ts#L18-L19))

Then use the exported array to set up the [control](https://storybook.js.org/docs/essentials/controls) in Storybook

- use `radio` when there are a few options
- use `select` when there are a lot of options
- (see [qai-button.stories](./projects/qai-ui/src/base/qai-button/qai-button.stories.ts#L28))

```ts
import { ComponentKinds, ComponentIcons } from './my-component';

const meta = {
  argTypes: {
    kind: { options: ComponentKinds, control: { type: 'radio' } },
    kind: { options: ComponentIcons, control: { type: 'select' } },
  },
};
```

## Components with content projection

If a component uses content projection with `ng-content`:

- Create a new type that adds a `content` property
- Write a custom render method that adds the `content`
- Import any child components through `moduleMetadata`
- Use [argsToTemplate](./projects/qai-ui/src/utils/sb-utils.ts#L15) to properly apply inputs to the component

```ts
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { argsToTemplate } from '../../utils/sb-utils';
import { QaiButtonComponent } from './qai-button';
import { QaiIconComponent } from '../qai-icon';

type QaiButtonStory = QaiButtonComponent & {
  content: string;
};

const meta: Meta<QaiButtonStory> = {
  component: QaiButtonComponent,
  decorators: [moduleMetadata({ imports: [QaiIconComponent] })],
  render: ({ content, start, ...args }) => ({
    props: args,
    template: `
      <button qai-button ${argsToTemplate(args)}">
        ${start ? `<qai-icon kind="${start}" positionStart />` : ''}
        ${content}
      </button>
    `,
  }),
};
```

## Event handlers

Use the [actions addon](https://storybook.js.org/docs/essentials/actions) to display data received by event handlers.

## Helper components

Prefix any Storybook helper components with `sb-` so it is clear it is not meant to be exported or used outside of Storybook

- (see [qai-dialog](./projects/qai-ui/src/base/qai-dialog/qai-dialog.stories.ts#L37), [qai-floating](./projects/qai-ui/src/base/qai-floating/qai-floating.stories.ts#L117))

## Embedding Figma

Embed a component's Figma file directly in the addons panel using the [designs addon](https://github.com/storybookjs/addon-designs).

```ts
const meta = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/path-to-component',
    },
  },
};
```

## Upgrading

Follow these steps to [upgrade Storybook](https://storybook.js.org/docs/configure/upgrading).

```shell
npx storybook@latest upgrade --config-dir="projects/qai-ui/.storybook"
```
