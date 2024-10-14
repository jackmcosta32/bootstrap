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
  MultipleSelectValue,
} from '../../select';

import { useMemo, useState } from 'react';

type TOptionValuePrimitive = string | number | boolean | undefined;

export type TOption = {
  label: React.ReactNode;
  value: TOptionValuePrimitive;
};

export type SelectFieldProps = React.ComponentProps<typeof Select> &
  Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    'defaultValue' | 'dir' | 'value'
  > & {
    name: string;
    options?: TOption[];
    placeholder?: string;
    label?: React.ReactNode;
    description?: React.ReactNode;
  } & (
    | {
        multiple: true;
        value?: TOptionValuePrimitive[];
      }
    | {
        multiple?: false;
        value?: TOptionValuePrimitive;
      }
  );

const renderLabel = (params: {
  multiple?: boolean;
  placeholder?: React.ReactNode;
  optionsMap?: Record<string, TOption>;
  selectedValuesSet?: Set<TOptionValuePrimitive>;
}) => {
  const { multiple, placeholder, optionsMap, selectedValuesSet } = params ?? {};

  if (!multiple) return <SelectValue placeholder={placeholder} />;

  if (!selectedValuesSet?.size || !optionsMap) return placeholder;

  const selectedValues = Array.from(selectedValuesSet);

  const activeLabels = selectedValues.reduce((acc, selectedValue) => {
    const parsedSelectValue = String(selectedValue);
    const selectedOption = optionsMap[parsedSelectValue];

    if (selectedOption) {
      acc.push(
        <MultipleSelectValue
          key={parsedSelectValue}
          label={selectedOption.label}
        />
      );
    }

    return acc;
  }, [] as React.ReactNode[]);

  return activeLabels;
};

const renderOptions = (params: {
  multiple?: boolean;
  options?: TOption[];
  selectedValuesSet?: Set<TOptionValuePrimitive>;
}) => {
  const { selectedValuesSet, options, multiple } = params ?? {};

  if (!Array.isArray(options) || !options.length) return null;

  const renderedOptions = options.map(({ label, value }) => {
    const isActive = selectedValuesSet?.has(value);

    return (
      <SelectItem
        isActive={isActive}
        key={String(value)}
        multiple={multiple}
        value={value as never}
      >
        {label}
      </SelectItem>
    );
  });

  return renderedOptions;
};

export const SelectField = ({
  name,
  label,
  options,
  multiple,
  className,
  placeholder,
  description,
  ...rest
}: SelectFieldProps) => {
  const formField = useFormField();
  const [selectedValuesSet, setSelectedValuesSet] =
    useState<Set<TOptionValuePrimitive>>();

  const handleOnValueChange = (
    value: string,
    onChange: (...event: unknown[]) => void
  ) => {
    if (typeof onChange !== 'function') return;

    const nextSelectedValuesSet = selectedValuesSet ?? new Set();

    if (nextSelectedValuesSet.has(value)) {
      nextSelectedValuesSet.delete(value);
    } else {
      nextSelectedValuesSet.add(value);
    }

    setSelectedValuesSet(nextSelectedValuesSet);

    return onChange(multiple ? Array.from(nextSelectedValuesSet) : value);
  };

  const memoizedOptionsMap = useMemo(() => {
    if (!Array.isArray(options) || !options.length) return;

    const optionsMap = options.reduce((acc, option) => {
      const parsedValue = String(option.value);

      acc[parsedValue] = option;

      return acc;
    }, {} as Record<string, TOption>);

    return optionsMap;
  }, [options]);

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => {
        return (
          <FormItem className={className}>
            {label && <FormLabel>{label}</FormLabel>}

            <Select
              {...rest}
              {...((multiple ? { value: null } : {}) as any)}
              defaultValue={field.value}
              onValueChange={(value) =>
                handleOnValueChange(value, field.onChange)
              }
            >
              <FormControl>
                <SelectTrigger>
                  <span className="!flex flex-row gap-2">
                    {renderLabel({
                      multiple,
                      placeholder,
                      selectedValuesSet,
                      optionsMap: memoizedOptionsMap,
                    })}
                  </span>
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                {renderOptions({
                  options,
                  multiple,
                  selectedValuesSet,
                })}
              </SelectContent>
            </Select>

            {description && <FormDescription>{description}</FormDescription>}

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
