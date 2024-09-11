import { z } from 'zod';
import type { Meta } from '@storybook/react';
import { Button } from '../button';
import { zodResolver } from '@hookform/resolvers/zod';
import { DataForm, type DataFormProps } from './data-form';

const defaultSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean().default(false),
  gender: z.enum(['male', 'female', 'others']).default('male'),
});

const Story: Meta<typeof DataForm> = {
  component: DataForm,
  title: 'Components/UI/DataForm',
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export default Story;

export const Primary = {
  args: {
    onSubmit: console.log,
    resolver: zodResolver(defaultSchema),
    fields: [
      {
        name: 'username',
        type: 'text',
        props: { label: 'Username', autoComplete: 'username' },
      },
      {
        name: 'password',
        type: 'text',
        props: { label: 'Password', autoComplete: 'new-password' },
      },
      {
        name: 'gender',
        type: 'select',
        props: {
          label: 'Gender',
          options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Others', value: 'others' },
          ],
        },
      },
      {
        name: 'remember',
        type: 'checkbox',
        props: { label: 'Remember me' },
      },
    ],
    defaultValues: {
      gender: 'male',
    },
    renderControls: (form) => (
      <Button type="submit" disabled={!form.formState.isValid}>
        submit
      </Button>
    ),
  } as DataFormProps<z.infer<typeof defaultSchema>>,
};
