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
import { Button } from '../../button';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export interface PasswordFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const PasswordField = ({
  name,
  label,
  value,
  className,
  description,
  ...rest
}: PasswordFieldProps) => {
  const formField = useFormField();
  const [showPassword, setShowPassword] = useState(false);

  const fieldType = showPassword ? 'text' : 'password';
  const fieldIcon = showPassword ? <Eye /> : <EyeOff />;

  const toggleFieldType = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input type={fieldType} {...rest} {...field}>
              <Button
                size="icon"
                variant="ghost"
                className="h-auto"
                onClick={toggleFieldType}
              >
                {fieldIcon}
              </Button>
            </Input>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
