import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './nav';

const Story: Meta<typeof Nav> = {
  component: Nav,
  title: 'Components/UI/Nav',
};

export default Story;

export const Primary: StoryObj<typeof Nav> = {
  args: {
    children: 'Nav',
    disabled: false,
  },
};
