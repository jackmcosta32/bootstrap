'use client';

import type {
  FieldValues,
  UseFormReturn,
  SubmitHandler,
} from 'react-hook-form';

import { Form } from '../form';
import { cn } from '../../utils/cn';

export interface DataFormProps<TFieldValues extends FieldValues>
  extends Omit<HTMLFormElement, 'onSubmit'> {
  form: UseFormReturn<TFieldValues, unknown, undefined>;
  onSubmit?: SubmitHandler<TFieldValues>;
}

export function DataForm<TFieldValues extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: DataFormProps<TFieldValues>) {
  const handleOnValid: SubmitHandler<TFieldValues> = (data, event) => {
    event?.preventDefault();

    if (typeof onSubmit !== 'function') return;

    return onSubmit(data, event);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnValid)}
        className={cn('flex flex-col gap-4', className)}
      >
        {children}
      </form>
    </Form>
  );
}
