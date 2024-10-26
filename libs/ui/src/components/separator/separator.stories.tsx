import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const Story: Meta<typeof Separator> = {
  component: Separator,
  title: 'Components/UI/Separator',
};

export default Story;

export const Primary: StoryObj<typeof Separator> = {
  args: {},
};
