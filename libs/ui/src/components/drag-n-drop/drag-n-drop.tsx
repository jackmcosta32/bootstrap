import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
  type UseDraggableArguments,
  type UseDroppableArguments,
} from '@dnd-kit/core';

import { useId } from 'react';
import { cn } from '../../utils/cn';
import { CSS } from '@dnd-kit/utilities';

export interface DraggableItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  draggableOptions?: Partial<UseDraggableArguments>;
}

export const DragNDropContext = DndContext;

export const DraggableItemOverlay = DragOverlay;

export const DraggableItem = ({
  children,
  className,
  draggableOptions,
}: DraggableItemProps) => {
  const itemId = useId();

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: itemId,
      ...draggableOptions,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      className={className}
      data-is-dragging={isDragging}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};

export interface DroppableAreaProps
  extends React.HTMLAttributes<HTMLDivElement> {
  droppableOptions?: Partial<UseDroppableArguments>;
}

export const DroppableArea = ({
  children,
  droppableOptions,
  className,
}: DroppableAreaProps) => {
  const areaId = useId();

  const { isOver, setNodeRef } = useDroppable({
    id: areaId,
    ...droppableOptions,
  });

  return (
    <div
      ref={setNodeRef}
      data-is-over={isOver}
      className={cn(
        'transition-colors border-2 border-dashed border-border rounded-md hover:border-cyan-500 hover:bg-cyan-100/20 data-[is-over="true"]:border-cyan-500 data-[is-over="true"]:bg-cyan-100/20 focus:border-indigo-500',
        className
      )}
    >
      {children}
    </div>
  );
};
