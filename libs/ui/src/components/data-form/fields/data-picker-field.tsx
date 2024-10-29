'use client';

import { format } from 'date-fns';
import { Button } from '../../button';
import { cn } from '../../../utils/cn';
import { Calendar } from '../../calendar';
import { CalendarIcon } from 'lucide-react';
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
import { Popover, PopoverContent, PopoverTrigger } from '../../popover';

export interface DatePickerFieldProps
  extends React.ComponentProps<typeof Input> {
  name: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const DatePickerField = ({
  name,
  label,
  placeholder,
  className,
  description,
  ...rest
}: DatePickerFieldProps) => {
  const formField = useFormField();

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', className)}>
          {label && <FormLabel>{label}</FormLabel>}

          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'pl-3 h-9 text-left font-normal border-input focus-within:ring-1 focus-within:ring-ring',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-5 w-text-muted-foreground" />
                </Button>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
              />
            </PopoverContent>
          </Popover>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
