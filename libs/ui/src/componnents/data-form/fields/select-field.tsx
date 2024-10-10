'use client';

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
  FormDescription,
} from '../../form';

import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from '../../select';

type TOptionValuePrimitive = string | number | boolean | undefined;

export type TOption = {
  label: React.ReactNode;
  value: TOptionValuePrimitive;
};

export interface SelectFieldProps
  extends React.ComponentProps<typeof Select>,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'defaultValue' | 'dir'> {
  name: string;
  options?: TOption[];
  placeholder?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
}

const renderOptions = (options?: TOption[]) => {
  if (!Array.isArray(options) || !options.length) return null;

  const renderedOptions = options.map(({ label, value }) => (
    <SelectItem key={String(value)} value={value as never}>
      {label}
    </SelectItem>
  ));

  return renderedOptions;
};

export const SelectField = ({
  name,
  label,
  options,
  className,
  placeholder,
  description,
  ...rest
}: SelectFieldProps) => {
  const formField = useFormField();

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Select
              {...rest}
              {...field}
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent>{renderOptions(options)}</SelectContent>
            </Select>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
