import type { Meta, StoryObj } from '@storybook/react';
import { AuthLayout } from './auth-layout';

const Story: Meta<typeof AuthLayout> = {
  component: AuthLayout,
  title: 'Layouts/Presentation/AuthLayout',
};

export default Story;

export const Primary: StoryObj<typeof AuthLayout> = {
  args: {},
};
