import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const Story: Meta<typeof Input> = {
  component: Input,
  title: 'Components/UI/Input',
};

export default Story;

export const Primary: StoryObj<typeof Input> = {
  args: {
    type: 'email',
    placeholder: 'e-mail',
  },
};
