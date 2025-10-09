import { type Meta, type StoryObj } from '@storybook/angular';
import { UiYouTubeVideoComponent } from './youtube-video.component';

const meta: Meta<UiYouTubeVideoComponent> = {
  component: UiYouTubeVideoComponent,
  tags: ['autodocs'],
  args: {
    videoId: '_ITiwPMUzho',
    videoTitle: 'LoFi Programming Beats',
  },
};

export default meta;

type Story = StoryObj<UiYouTubeVideoComponent>;

export const Default: Story = {};
