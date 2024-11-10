'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { cn } from '@template/ui/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { GENDERS } from '@template/constants/genders';
import { Button } from '@template/ui/components/button';
import { DataForm } from '@template/ui/components/data-form';
import { useTranslation } from '@template/presentation/libs/i18n';
import type * as TAuthContract from '@template/domain/contracts/auth.contract';
import { TextField } from '@template/ui/components/data-form/fields/text-field';
import { SelectField } from '@template/ui/components/data-form/fields/select-field';
import { PasswordField } from '@template/ui/components/data-form/fields/password-field';
import { DatePickerField } from '@template/ui/components/data-form/fields/data-picker-field';

const schema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    username: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(1),
    birthday: z.date(),
    gender: z.nativeEnum(GENDERS),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'validations.confirm-password',
    path: ['confirmPassword'],
  });

export interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSignUp: TAuthContract.TSignUpContract;
}

export const SignUpForm = ({ onSignUp, className }: SignUpFormProps) => {
  const { t } = useTranslation(['sign-up-form-component', 'fields']);

  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <DataForm
      form={form}
      onValid={onSignUp}
      className={cn('flex flex-col gap-4', className)}
    >
      <TextField name="firstName" label={t('fields:first-name-field')} />

      <TextField name="lastName" label={t('fields:last-name-field')} />

      <TextField name="username" label={t('fields:username-field')} />

      <PasswordField name="password" label={t('fields:password-field')} />

      <PasswordField
        name="confirmPassword"
        label={t('fields:confirm-password-field')}
      />

      <DatePickerField name="birthday" label={t('fields:birthday-field')} />

      <SelectField
        name="gender"
        label={t('fields:gender-field')}
        options={[
          {
            label: t('fields:male-option'),
            value: GENDERS.MAN,
          },
          {
            label: t('fields:female-option'),
            value: GENDERS.WOMAN,
          },
          {
            label: t('fields:other-option'),
            value: GENDERS.OTHER,
          },
          {
            label: t('fields:non-binary-option'),
            value: GENDERS['NON-BINARY'],
          },
          {
            label: t('fields:not-informed-option'),
            value: GENDERS['NOT-INFORMED'],
          },
        ]}
      />

      <Button
        type="submit"
        disabled={!form.formState.isValid}
        isLoading={form.formState.isLoading}
      >
        {t('submit-button')}
      </Button>
    </DataForm>
  );
};
