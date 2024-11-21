// TODO: Add support to padding, margin and etc.

import { cn } from '@template/ui/utils/cn';
import { tv, type VariantProps } from 'tailwind-variants';

const sectionVariants = tv({
  base: 'flex',
  variants: {
    verticalAlignment: {
      start: 'justify-start',
      middle: 'justify-center',
      end: 'justify-end',
    },
    horizontalAlignment: {
      start: 'items-start',
      middle: 'items-center',
      end: 'items-end',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
  },
  defaultVariants: {
    direction: 'column',
    verticalAlignment: 'middle',
    horizontalAlignment: 'middle',
  },
});

export interface ExperienceEditorSectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {}

export const ExperienceEditorSection = ({
  style,
  className,
  direction,
  verticalAlignment,
  horizontalAlignment,
  children = 'Section',
}: ExperienceEditorSectionProps) => {
  return (
    <div
      style={style}
      className={cn(
        sectionVariants({
          className,
          direction,
          verticalAlignment,
          horizontalAlignment,
        })
      )}
    >
      {children}
    </div>
  );
};
