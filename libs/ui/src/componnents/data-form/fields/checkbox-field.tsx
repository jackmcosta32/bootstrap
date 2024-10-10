'use client';

import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
  FormDescription,
  FormField,
} from '../../form';

import { cn } from '../../../utils/cn';
import { Checkbox } from '../../checkbox';

export interface CheckboxFieldProps
  extends Omit<React.ComponentPropsWithRef<typeof Checkbox>, 'value'> {
  name: string;
  leftLabel?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  value?: boolean | 'indeterminate';
}

export const CheckboxField = ({
  name,
  label,
  value,
  className,
  leftLabel,
  description,
  ...rest
}: CheckboxFieldProps) => {
  const formField = useFormField();

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => (
        <FormItem>
          <div className={cn('flex flex-row items-center gap-2', className)}>
            <FormControl>
              <Checkbox
                {...rest}
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
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
      )}
    />
  );
};
