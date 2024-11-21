import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@template/ui/components/tooltip';
import { CircleHelp } from 'lucide-react';
import { Button } from '@template/ui/components/button';
import { DraggableItem } from '@template/ui/components/drag-n-drop';
import type { TExperienceComponent } from '@template/domain/models/experience.model';

export interface ExperienceEditorComponentMenuItemProps {
  component: TExperienceComponent;
}

export const ExperienceEditorComponentMenuItem = ({
  component,
}: ExperienceEditorComponentMenuItemProps) => {
  const { label, description } = component;

  return (
    <DraggableItem draggableOptions={{ data: component }}>
      <Button
        variant="outline"
        className="relative h-12 bg-back shadow-none flex w-full justify-center items-center text-xs bg-sidebar"
      >
        {label}

        {description && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="absolute top-1 right-1">
                <CircleHelp className="text-gray-500" size={12} />
              </TooltipTrigger>

              <TooltipContent>
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </Button>
    </DraggableItem>
  );
};
