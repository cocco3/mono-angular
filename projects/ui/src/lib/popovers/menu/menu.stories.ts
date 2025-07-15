import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import {
  type UiPopoverPlacement,
  UiPopoverPlacements,
  storybookArgsToTemplate,
} from '@cocco3/utils';
import { UiMenuComponent, UiMenuSectionComponent } from './menu.component';
import {
  UiMenuItemAnchorComponent,
  UiMenuItemButtonComponent,
} from '../menuitem/menuitem.component';
import { UiIconComponent } from '../../base/icon/icon.component';
import { UiSlotDirective } from '../../layout/slot.directive';
import { UiPopoverDirective } from '../popover.directive';

type MenuStory = UiMenuComponent & {
  offset: number;
  placement: UiPopoverPlacement;
};

/**
 * Use with uiPopover directive.
 */
const meta: Meta<MenuStory> = {
  title: 'popovers/menu/menu',
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
        UiSlotDirective,
        UiPopoverDirective,
      ],
    }),
  ],
  argTypes: {
    offset: {
      control: { type: 'number' },
      table: { category: 'uiPopover', type: { detail: undefined } },
    },
    placement: {
      options: Object.keys(UiPopoverPlacements),
      control: { type: 'select' },
      table: { category: 'uiPopover', type: { detail: undefined } },
    },
  },
  args: {
    offset: 4,
    placement: 'after-center',
  },

  render: ({ offset, placement, ...args }) => ({
    props: args,
    template: `
      <ui-menu ${storybookArgsToTemplate(args)}>
        <ui-menusection>
          <button ui-menuitem>
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

type Story = StoryObj<MenuStory>;

export const Default: Story = {};

export const ToggleOnClick: Story = {
  render: ({ offset, placement, ...args }) => ({
    props: args,
    template: `
      <button
        #menuClickAnchor
        (click)="myMenu1.toggle()"
      >
        click
      </button>
      <ui-menu
        ${storybookArgsToTemplate(args)}
        uiPopover="menu"
        #myMenu1="uiPopover"
        [anchor]="menuClickAnchor"
        offset="${offset}"
        [placement]="'${placement}'"
      >
        <ui-menusection>
          <button ui-menuitem>
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
