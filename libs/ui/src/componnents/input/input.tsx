import * as React from 'react';

import { cn } from '../../utils/cn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ disabled, className, type, children, ...props }, ref) => (
    <div
      data-disabled={disabled}
      className={cn(
        'flex flex-nowrap content-center overflow-hidden flex-row w-full border border-input bg-transparent text-sm shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring data-[disabled="true"]:opacity-50 data-[disabled="true"]:cursor-not-allowed',
        className
      )}
    >
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className="h-10 w-full bg-transparent px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none"
        {...props}
      />

      {children}
    </div>
  )
);
Input.displayName = 'Input';

export { Input };
