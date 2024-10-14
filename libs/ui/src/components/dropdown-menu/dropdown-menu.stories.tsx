import type { Meta, StoryObj } from '@storybook/react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from './dropdown-menu';

const Component = (props: React.ComponentProps<typeof DropdownMenu>) => (
  <DropdownMenu {...props}>
    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const Story: Meta<typeof DropdownMenu> = {
  component: Component,
  title: 'Components/UI/DropdownMenu',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
