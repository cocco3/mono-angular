import type { Meta, StoryObj } from '@storybook/angular';
import {
  UiAvatarComponent,
  UiAvatarFallbacks,
  UiAvatarSizes,
} from './avatar.component';

const meta: Meta<UiAvatarComponent> = {
  component: UiAvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    fallback: { options: UiAvatarFallbacks, control: { type: 'radio' } },
    fullName: { control: { type: 'text' } },
    photoUrl: { control: { type: 'text' } },
    size: { options: UiAvatarSizes, control: { type: 'radio' } },
  },
  args: {
    fallback: 'initials',
    fullName: 'Jane Smith',
    size: 'medium',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YbdR1kLiOU262EEicORFYh/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v7.0)?node-id=19-1012&t=hX32Z89jda6drEM9-0',
    },
  },
};

export default meta;
type Story = StoryObj<UiAvatarComponent>;

export const Initials: Story = {};

export const Photo: Story = {
  args: { photoUrl: 'avatar.jpg' },
};

export const BrokenPhoto: Story = {
  args: { photoUrl: 'does-not-exist.png' },
};

export const Placeholder: Story = {
  args: { fallback: 'icon' },
};
