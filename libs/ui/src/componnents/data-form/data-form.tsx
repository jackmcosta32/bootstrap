import {
  useForm,
  type Path,
  type FieldValues,
  type UseFormProps,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

import { cn } from '../../utils/cn';
import { createElement, useMemo } from 'react';

import { FormField, Form as FormWrapper } from '../form';
import { TextField } from './fields/text-field';
import { SelectField } from './fields/select-field';
import { CheckboxField } from './fields/checkbox-field';

export type TFieldType = 'text' | 'select' | 'checkbox';

export type TField<
  TProps,
  TType extends TFieldType,
  TFieldValues extends FieldValues
> = {
  type: TType;
  name: Path<TFieldValues>;
  props?: TProps & {
    label?: string;
    description?: string;
    className?: string;
  };
};

export type TFieldElements<TFieldValues extends FieldValues> = Array<
  | TField<React.ComponentProps<typeof TextField>, 'text', TFieldValues>
  | TField<React.ComponentProps<typeof SelectField>, 'select', TFieldValues>
  | TField<React.ComponentProps<typeof CheckboxField>, 'checkbox', TFieldValues>
>;

const fieldElementMap = {
  text: TextField,
  select: SelectField,
  checkbox: CheckboxField,
} satisfies Partial<Record<TFieldType, React.FC>>;

type TFieldElementMapKey = keyof typeof fieldElementMap;

export interface DataFormProps<TFieldValues extends FieldValues>
  extends Omit<HTMLFormElement, 'onSubmit'>,
    UseFormProps<TFieldValues> {
  fields?: TFieldElements<TFieldValues>;
  onSubmit?: (data: TFieldValues) => void | Promise<void>;
  renderControls?: (form: UseFormReturn<TFieldValues>) => React.ReactNode;
}

export function DataForm<TFieldValues extends FieldValues>({
  values,
  context,
  onSubmit,
  resolver,
  className,
  delayError,
  criteriaMode,
  resetOptions,
  defaultValues,
  reValidateMode,
  renderControls,
  shouldFocusError,
  shouldUnregister,
  shouldUseNativeValidation,
  fields = [],
  mode = 'onChange',
}: DataFormProps<TFieldValues>) {
  const form = useForm({
    mode,
    values,
    context,
    resolver,
    delayError,
    resetOptions,
    criteriaMode,
    defaultValues,
    reValidateMode,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
  });

  const handleOnValid: SubmitHandler<TFieldValues> = async (data, event) => {
    event?.preventDefault();

    if (typeof onSubmit !== 'function') return;

    await onSubmit(data);
  };

  const renderedFieldElements = useMemo(() => {
    if (!Array.isArray(fields)) return null;

    const renderFieldElement = (
      field?: TField<unknown, TFieldType, TFieldValues>
    ) => {
      if (!field || typeof field !== 'object') return null;

      const { type, name, props } = field;

      if (!type || !(type in fieldElementMap)) return null;

      const fieldProps = props ?? {};
      const fieldElement = fieldElementMap[type as TFieldElementMapKey];

      return (
        <FormField
          key={name}
          name={name}
          control={form.control}
          render={({ field }) =>
            createElement(fieldElement, Object.assign(fieldProps, field))
          }
        />
      );
    };

    return fields.map(renderFieldElement);
  }, [fields, form.control]);

  const renderedControls = useMemo(() => {
    if (typeof renderControls !== 'function') return null;

    return renderControls(form);
  }, [renderControls, form.formState]);

  return (
    <FormWrapper {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnValid)}
        className={cn('flex flex-col gap-4', className)}
      >
        {renderedFieldElements}
        {renderedControls}
      </form>
    </FormWrapper>
  );
}
