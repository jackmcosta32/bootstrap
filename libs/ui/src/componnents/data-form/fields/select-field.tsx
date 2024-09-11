import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '../../form';

import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from '../../select';

import { forwardRef } from 'react';

type TOptionValuePrimitive = string | number | boolean | undefined;

export type TOption = {
  label: React.ReactNode;
  value: TOptionValuePrimitive;
};

export interface SelectFieldProps
  extends Omit<
    React.ComponentProps<typeof Select>,
    'onValueChange' | 'defaultValue'
  > {
  options?: TOption[];
  placeholder?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  onChange?: Pick<React.ComponentProps<typeof Select>, 'onValueChange'>;
}

const renderOptions = (options: TOption[]) => {
  if (!Array.isArray(options) || !options.length) return null;

  const renderedOptions = options.map(({ label, value }) => (
    <SelectItem key={value} value={value}>
      {label}
    </SelectItem>
  ));

  return renderedOptions;
};

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    { label, options, onChange, className, placeholder, description, ...rest },
    ref
  ) => (
    <FormItem className={className}>
      {label && <FormLabel>{label}</FormLabel>}

      <FormControl>
        <Select {...rest} onValueChange={onChange}>
          <SelectTrigger ref={ref}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>

          <SelectContent>{renderOptions(options)}</SelectContent>
        </Select>
      </FormControl>

      {description && <FormDescription>{description}</FormDescription>}

      <FormMessage />
    </FormItem>
  )
);

SelectField.displayName = 'SelectField';

export { SelectField };
