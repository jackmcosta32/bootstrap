import { Button } from '../button';
import type { Meta, StoryObj } from '@storybook/react';
import { DroppableArea, DraggableItem, DragNDropContext } from './drag-n-drop';

const Component = (props: React.ComponentProps<typeof DragNDropContext>) => {
  return (
    <DragNDropContext>
      <div className="flex flex-col gap-4">
        <DraggableItem>
          <Button>Drag me</Button>
        </DraggableItem>

        <DroppableArea className="min-h-80 w-full flex justify-center items-center">
          Drop here
        </DroppableArea>
      </div>
    </DragNDropContext>
  );
};

const Story: Meta<typeof Component> = {
  component: Component,
  title: 'Components/UI/DragNDrop',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
