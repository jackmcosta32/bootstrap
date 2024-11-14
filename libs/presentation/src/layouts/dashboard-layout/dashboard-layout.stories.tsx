import type { Meta, StoryObj } from '@storybook/react';
import { DashboardLayout } from './dashboard-layout';

const Story: Meta<typeof DashboardLayout> = {
  component: DashboardLayout,
  title: 'Layouts/Presentation/DashboardLayout',
};

export default Story;

export const Primary: StoryObj<typeof DashboardLayout> = {
  args: {},
};
