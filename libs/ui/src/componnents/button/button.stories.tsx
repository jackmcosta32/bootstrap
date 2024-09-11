import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Components/UI/Button',
};

export default Story;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    disabled: false,
  },
};
