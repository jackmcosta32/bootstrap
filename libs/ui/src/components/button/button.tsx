import * as React from 'react';
import { Loader } from '../loader';
import { cn } from '../../utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'select-none relative text-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outline:
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      secondary:
        'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-accent text-muted-foreground hover:text-foreground',
      link: 'text-muted-foreground underline-offset-4 hover:underline hover:text-foreground',
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
        <span
          data-loading={isLoading}
          className="flex justify-center items-center data-[loading=true]:invisible whitespace-nowrap"
        >
          {children}
        </span>

        <Loader size="sm" loading={isLoading} />
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
