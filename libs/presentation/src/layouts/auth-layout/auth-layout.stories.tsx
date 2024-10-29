import type { Meta, StoryObj } from '@storybook/react';
import { AuthLayout } from './auth-layout';

const Story: Meta<typeof AuthLayout> = {
  component: AuthLayout,
  title: 'Components/Presentation/Layouts/AuthLayout',
};

export default Story;

export const Primary: StoryObj<typeof AuthLayout> = {
  args: {},
};
