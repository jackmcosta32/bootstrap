import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from './select';

const Component = (props: React.ComponentProps<typeof Select>) => (
  <Select {...props}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
);

const Story: Meta<typeof Select> = {
  component: Component,
  title: 'Components/UI/Select',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
