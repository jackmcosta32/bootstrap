import * as React from 'react';
import NextLink from 'next/link';
import { cn } from '../../utils/cn';
import { tv, type VariantProps } from 'tailwind-variants';
import type { LinkProps as NextLinkProps } from 'next/link';

const linkVariants = tv({
  base: 'relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      button: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outline:
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      secondary:
        'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-accent text-muted-foreground hover:text-foreground',
      default:
        'text-muted-foreground underline-offset-4 hover:underline hover:text-foreground',
      flat: '',
    },
    size: {
      default: 'min-h-9 px-4 py-2',
      sm: 'min-h-8 rounded-md px-3 text-xs',
      lg: 'min-h-10 rounded-md px-8',
      icon: 'min-h-9 min-w-9',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface LinkProps
  extends Partial<NextLinkProps>,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, children, variant, size, ...props }, ref) => (
    <NextLink
      ref={ref}
      href={href ?? '#'}
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </NextLink>
  )
);

Link.displayName = 'Link';

export { Link, linkVariants };
