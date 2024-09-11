import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';

const Component = () => (
  <div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

const Story: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/UI/Skeleton',
};

export default Story;

export const Primary: StoryObj<typeof Skeleton> = {
  args: {},
  render: Component,
};
