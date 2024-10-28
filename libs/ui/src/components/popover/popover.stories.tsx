import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const Component = () => (
  <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>Place content for the popover here.</PopoverContent>
  </Popover>
);

const Story: Meta<typeof Popover> = {
  component: Popover,
  title: 'Components/UI/Popover',
};

export default Story;

export const Primary: StoryObj<typeof Popover> = {
  args: {},
  render: Component,
};
