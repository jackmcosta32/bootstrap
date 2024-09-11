import * as React from 'react';
import NextLink from 'next/link';
import { cn } from '../../utils/cn';
import type { LinkProps as NextLinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { Typography } from '../typography';

const linkVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap select-none text-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        button:
          'bg-primary text-primary-foreground hover:bg-brand-green-200 active:bg-brand-green-300',
        secondary:
          'border-2 border-primary bg-background hover:border-brand-green-100 hover:text-brand-green-200 active:border-brand-green-200 active:text-brand-green-300',
        tertiary: 'hover:text-brand-green-200 active:text-brand-green-300',
        link: 'hover:text-brand-green-200 underline-offset-4 hover:underline active:text-brand-green-300 visited:text-brand-green-300',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/80 active:bg-destructive',
        default: 'text-primary justify-start',
      },
      size: {
        unset: '',
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

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
      <Typography variant="cta2">{children}</Typography>
    </NextLink>
  )
);

Link.displayName = 'Link';

export { Link, linkVariants };
