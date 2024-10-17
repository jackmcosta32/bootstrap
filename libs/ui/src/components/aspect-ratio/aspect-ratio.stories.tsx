import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './aspect-ratio';

const Story: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  title: 'Components/UI/AspectRatio',
};

export default Story;

export const Primary: StoryObj<typeof AspectRatio> = {
  args: {},
};
