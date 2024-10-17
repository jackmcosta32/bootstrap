import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from './tooltip';

import type { Meta, StoryObj } from '@storybook/react';

const Component = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const Story: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/UI/Tooltip',
};

export default Story;

export const Primary: StoryObj<typeof Tooltip> = {
  args: {},
  render: Component,
};
