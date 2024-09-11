import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '../../form';

import { forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { Checkbox } from '../../checkbox';

export interface CheckboxFieldProps
  extends Omit<React.ComponentProps<typeof Checkbox>, 'onCheckedChange'> {
  leftLabel?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  onChange?: Pick<React.ComponentProps<typeof Checkbox>, 'onCheckedChange'>;
}

const CheckboxField = forwardRef<
  React.RefAttributes<HTMLButtonElement>,
  CheckboxFieldProps
>(
  (
    { label, leftLabel, description, className, onChange, value, ...rest },
    ref
  ) => (
    <FormItem>
      <div className={cn('flex flex-row items-center gap-2', className)}>
        <FormControl>
          <Checkbox
            {...rest}
            ref={ref}
            checked={value}
            onCheckedChange={onChange}
          />
        </FormControl>

        <div
          className="flex flex-col gap-2 justify-center data-[left-label=true]:order-first"
          data-left-label={leftLabel}
        >
          {label && <FormLabel>{label}</FormLabel>}

          {description && <FormDescription>{description}</FormDescription>}
        </div>
      </div>

      <FormMessage />
    </FormItem>
  )
);

CheckboxField.displayName = 'CheckboxField';

export { CheckboxField };
