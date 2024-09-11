import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '../../form';

import { forwardRef } from 'react';
import { Input } from '../../input';

export interface TextFieldProps extends React.ComponentProps<typeof Input> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, value = '', className, description, ...rest }, ref) => (
    <FormItem className={className}>
      {label && <FormLabel>{label}</FormLabel>}

      <FormControl>
        <Input {...rest} ref={ref} value={value} />
      </FormControl>

      {description && <FormDescription>{description}</FormDescription>}

      <FormMessage />
    </FormItem>
  )
);

TextField.displayName = 'TextField';

export { TextField };
