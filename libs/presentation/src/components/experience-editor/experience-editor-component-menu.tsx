import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@template/ui/components/accordion';

import { ExperienceEditorComponentMenuItem } from './experience-editor-component-menu-item';
import type { TExperienceComponentCategory } from '@template/domain/models/experience.model';

export interface ExperienceEditorComponentsMenuProps
  extends React.HTMLAttributes<HTMLElement> {
  categories: TExperienceComponentCategory[];
}

export const ExperienceEditorComponentsMenu = ({
  className,
  categories,
}: ExperienceEditorComponentsMenuProps) => {
  if (!Array.isArray(categories)) return null;

  return (
    <Accordion type="multiple" className={className}>
      {categories.map(({ value, label, subCategories, components }) => (
        <AccordionItem value={label} key={value}>
          <AccordionTrigger className="text-sm font-bold">
            {label}
          </AccordionTrigger>

          <AccordionContent className="grid grid-cols-2 gap-4">
            {subCategories && (
              <ExperienceEditorComponentsMenu
                className="ml-2 col-span-2 border-none"
                categories={subCategories}
              />
            )}

            {components?.map((component) => (
              <ExperienceEditorComponentMenuItem
                key={component.type}
                component={component}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
