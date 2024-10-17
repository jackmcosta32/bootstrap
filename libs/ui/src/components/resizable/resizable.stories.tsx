import type { Meta, StoryObj } from '@storybook/react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './resizable';

const Component = () => (
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel>One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
);

const Story: Meta<typeof ResizablePanel> = {
  component: ResizablePanel,
  title: 'Components/UI/Resizable',
};

export default Story;

export const Primary: StoryObj<typeof ResizablePanel> = {
  args: {},
  render: Component,
};
