'use client';

import type {
  FieldValues,
  UseFormReturn,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';

import { Form } from '../form';
import { cn } from '../../utils/cn';

export interface DataFormProps<TFieldValues extends FieldValues>
  extends Omit<HTMLFormElement, 'onSubmit'> {
  form: UseFormReturn<TFieldValues>;
  onValid?: SubmitHandler<TFieldValues>;
  onInvalid?: SubmitErrorHandler<TFieldValues>;
}

export function DataForm<TFieldValues extends FieldValues>({
  form,
  onValid,
  children,
  onInvalid,
  className,
}: DataFormProps<TFieldValues>) {
  const handleOnValid: SubmitHandler<TFieldValues> = (data, event) => {
    event?.preventDefault();

    if (typeof onValid !== 'function') return;

    return onValid(data, event);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnValid, onInvalid)}
        className={cn('flex flex-col gap-4', className)}
      >
        {children}
      </form>
    </Form>
  );
}
