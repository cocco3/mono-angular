import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import { UiMenuComponent, UiMenuSectionComponent } from './menu.component';
import {
  UiMenuItemAnchorComponent,
  UiMenuItemButtonComponent,
} from '../menuitem/menuitem.component';
import { UiIconComponent } from '../icon/icon.component';

const meta: Meta<UiMenuComponent> = {
  component: UiMenuComponent,
  subcomponents: {
    UiIconComponent,
    UiMenuItemAnchorComponent,
    UiMenuItemButtonComponent,
    UiMenuSectionComponent,
  },
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        UiIconComponent,
        UiMenuItemAnchorComponent,
        UiMenuItemButtonComponent,
        UiMenuSectionComponent,
      ],
    }),
  ],

  render: ({ ...args }) => ({
    props: args,
    template: `
      <ui-menu ${storybookArgsToTemplate(args)}>
        <ui-menusection>
          <button ui-menuitem label="Profile">
            <ui-icon kind="user" uiSlot="start" />
            Profile
          </button>
          <button ui-menuitem disabled>
            <ui-icon kind="settings" uiSlot="start" />
            Settings
          </button>
          <a ui-menuitem href="/" target="_blank">
            <ui-icon kind="help-circle" uiSlot="start" />
            Help
            <ui-icon kind="link-external" uiSlot="end" />
          </a>
        </ui-menusection>
        <ui-menusection>
          <button ui-menuitem>
            <ui-icon kind="log-out" uiSlot="start" />
            Log out
          </button>
        </ui-menusection>
      </ui-menu>
    `,
  }),
};

export default meta;

type Story = StoryObj<UiMenuComponent>;

export const Default: Story = {};
