import { z } from 'zod';
import { Button } from '../button';
import { DataForm } from './data-form';
import { useForm } from 'react-hook-form';
import { TextField } from './fields/text-field';
import { SelectField } from './fields/select-field';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxField } from './fields/checkbox-field';
import { PasswordField } from './fields/password-field';
import { DatePickerField } from './fields/data-picker-field';

const BasicUsageComponent = (props: React.ComponentProps<typeof DataForm>) => {
  const GENDER_OPTIONS = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ];

  const defaultSchema = z.object({
    username: z.string().email(),
    password: z.string().min(8),
    remember: z.boolean().default(false),
    birth: z.date(),
    gender: z.enum(['male', 'female', 'others']).default('male'),
  });

  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(defaultSchema),
  });

  return (
    <DataForm form={form} onSubmit={console.log}>
      <TextField name="username" label="Username" autoComplete="username" />

      <PasswordField
        name="password"
        label="Password"
        autoComplete="new-password"
      />

      <SelectField name="gender" label="Gender" options={GENDER_OPTIONS} />

      <DatePickerField name="birth" label="Birth" />

      <CheckboxField name="remember" label="Remember me" />

      <Button type="submit" disabled={!form.formState.isValid}>
        Submit
      </Button>
    </DataForm>
  );
};

const Story: Meta<typeof DataForm> = {
  component: BasicUsageComponent,
  title: 'Components/UI/DataForm',
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export default Story;

export const Primary: StoryObj<typeof DataForm> = {
  args: {},
};

const MultiSelectComponent = (props: React.ComponentProps<typeof DataForm>) => {
  const COUNTRY_OPTIONS = [
    { label: 'United States', value: 'USA' },
    { label: 'Brazil', value: 'BR' },
    { label: 'Argentina', value: 'AR' },
  ];

  const defaultSchema = z.object({
    countries: z.enum(['USA', 'BR', 'AR']).array().default(['USA']),
  });

  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(defaultSchema),
  });

  return (
    <DataForm form={form} onSubmit={console.log}>
      <SelectField
        multiple
        name="countries"
        label="Countries to Visit"
        options={COUNTRY_OPTIONS}
      />

      <Button type="submit" disabled={!form.formState.isValid}>
        Submit
      </Button>
    </DataForm>
  );
};

export const MultipleSelections: StoryObj<typeof DataForm> = {
  args: {},
  render: MultiSelectComponent,
};
