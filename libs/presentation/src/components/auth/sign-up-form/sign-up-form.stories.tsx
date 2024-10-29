import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from './sign-up-form';

const Story: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  title: 'Components/Presentation/SignUpForm',
};

export default Story;

export const Primary: StoryObj<typeof SignUpForm> = {
  args: {},
};
