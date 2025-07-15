import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiAppHeaderComponent } from './app-header.component';
import { UiSlotDirective } from '../../layout/slot.directive';
import { UiAppHeaderAnchorComponent } from '../app-header-button/app-header-button.component';
import { UiIconComponent } from '../../base/icon/icon.component';

type AppHeaderStory = UiAppHeaderComponent & {
  user: unknown;
};

const meta: Meta<AppHeaderStory> = {
  component: UiAppHeaderComponent,
  subcomponents: { UiAppHeaderAnchorComponent, UiIconComponent },
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [UiSlotDirective, UiAppHeaderAnchorComponent, UiIconComponent],
    }),
  ],
  argTypes: {
    user: {
      control: { disable: true },
      table: { category: 'Slots', type: { detail: undefined } },
      description: "Add `[uiSlot='user']` on element for user avatar/name",
    },
  },
  args: {
    title: 'App Name',
  },

  render: (args) => ({
    props: args,
    template: `
      <ui-app-header ${storybookArgsToTemplate(args)}>
        <a ui-app-header-button href="/" target="_blank" uiSlot="logo">
          <ui-icon kind="countdown" size="20px" uiSlot="start" />
          CountdownApp
        </a>
        <a ui-app-header-button href="/" target="_blank" uiSlot="user">
          <ui-icon kind="user" size="20px" uiSlot="start" />
          Jane Smith
        </a>
      </ui-app-header>
    `,
  }),
};

export default meta;
type Story = StoryObj<AppHeaderStory>;

export const Default: Story = {};
