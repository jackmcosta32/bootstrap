import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@template/ui/components/popover';

import { EllipsisVerticalIcon } from 'lucide-react';
import { Button } from '@template/ui/components/button';
import { Separator } from '@template/ui/components/separator';
import { DraggableItem } from '@template/ui/components/drag-n-drop';
import type { TExperienceComponent } from '@template/domain/models/experience.model';

export interface ExperienceEditorComponentWrapperProps {
  component: TExperienceComponent;
}

export const ExperienceEditorComponentWrapper = ({
  children,
  component,
}: React.PropsWithChildren<ExperienceEditorComponentWrapperProps>) => {
  const { label } = component;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <DraggableItem>
          <div className="transition-colors hover:border-2 data-[state=open]:border-2 relative border-blue-600 w-fit h-fit">
            {children}
          </div>
        </DraggableItem>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="start"
        sideOffset={0}
        className="rounded-none typography-small p-1 flex flex-row gap-2 bg-blue-600 text-white items-center w-fit"
      >
        <span className="p-2">{label}</span>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="flat" size="icon">
          <EllipsisVerticalIcon size={12} />
        </Button>
      </PopoverContent>
    </Popover>
  );
};
