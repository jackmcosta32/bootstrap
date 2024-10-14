import { cn } from '../../utils/cn';
import { tv, type VariantProps } from 'tailwind-variants';

const navVariants = tv({
  base: 'relative flex flex-row px-4 min-h-16 bg-background border-b border-border items-center',
});

export interface NavProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navVariants> {}

export const Nav = ({ className, children }: NavProps) => {
  return <header className={cn(navVariants({ className }))}>{children}</header>;
};
