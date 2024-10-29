import type { Meta, StoryObj } from '@storybook/react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from './sidebar';

const AppSidebar = () => (
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
);

const Component = () => (
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
    </main>
  </SidebarProvider>
);

const Story: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Components/UI/Sidebar',
};

export default Story;

export const Primary: StoryObj<typeof Sidebar> = {
  args: {},
  render: Component,
};
