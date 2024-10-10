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

import { Input } from '../../input';

export interface TextFieldProps extends React.ComponentProps<typeof Input> {
  name: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const TextField = ({
  name,
  label,
  className,
  description,
  ...rest
}: TextFieldProps) => {
  const formField = useFormField();

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input {...rest} {...field} />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
