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

const GENDER_OPTIONS = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Others', value: 'others' },
];

const defaultSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean().default(false),
  gender: z.enum(['male', 'female', 'others']).default('male'),
});

const Component = (props: React.ComponentProps<typeof DataForm>) => {
  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(defaultSchema),
  });

  return (
    <DataForm form={form}>
      <TextField name="username" label="Username" autoComplete="username" />

      <PasswordField
        name="password"
        label="Password"
        autoComplete="new-password"
      />

      <SelectField name="gender" label="Gender" options={GENDER_OPTIONS} />

      <CheckboxField name="remember" label="Remember me" />

      <Button type="submit" disabled={!form.formState.isValid}>
        Submit
      </Button>
    </DataForm>
  );
};

const Story: Meta<typeof DataForm> = {
  component: Component,
  title: 'Components/UI/DataForm',
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export default Story;

export const Primary: StoryObj<typeof DataForm> = {
  args: {},
};
