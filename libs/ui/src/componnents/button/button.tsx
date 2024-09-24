import * as React from 'react';
import { Loader } from '../loader';
import { cn } from '../../utils/cn';
import { Typography } from '../typography';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'relative inline-flex items-center justify-center whitespace-nowrap select-none text-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
  variants: {
    variant: {
      primary:
        'bg-primary text-primary-foreground hover:bg-brand-green-200 active:bg-brand-green-300',
      secondary:
        'border-2 border-primary bg-background hover:border-brand-green-100 hover:text-brand-green-200 active:border-brand-green-200 active:text-brand-green-300',
      tertiary: 'hover:text-brand-green-200 active:text-brand-green-300',
      link: 'hover:text-brand-green-200 underline-offset-4 hover:underline active:text-brand-green-300 visited:text-brand-green-300',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/80 active:bg-destructive',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      variant,
      size,
      isLoading = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        {...props}
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        <Typography
          variant="cta2"
          data-loading={isLoading}
          className="data-[loading=true]:invisible whitespace-nowrap"
        >
          {children}
        </Typography>

        <Loader size="sm" loading={isLoading} />
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
