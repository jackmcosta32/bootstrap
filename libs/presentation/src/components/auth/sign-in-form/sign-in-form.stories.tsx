import type { Meta, StoryObj } from '@storybook/react';
import { SignInForm } from './sign-in-form';

const Story: Meta<typeof SignInForm> = {
  component: SignInForm,
  title: 'Components/Presentation/SignInForm',
};

export default Story;

export const Primary: StoryObj<typeof SignInForm> = {
  args: {},
};
