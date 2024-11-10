'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { cn } from '@template/ui/utils/cn';
import authStyles from '../auth.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@template/ui/components/button';
import { DataForm } from '@template/ui/components/data-form';
import { useTranslation } from '@template/presentation/libs/i18n';
import type * as TAuthContract from '@template/domain/contracts/auth.contract';
import { TextField } from '@template/ui/components/data-form/fields/text-field';
import { PasswordField } from '@template/ui/components/data-form/fields/password-field';

const schema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean().default(false),
});

export interface SignInFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSignIn: TAuthContract.TSignInContract;
  onSignInWithGitHub?: TAuthContract.TSignInWithGitHubContract;
}

export const SignInForm = ({
  onSignIn,
  className,
  onSignInWithGitHub,
}: SignInFormProps) => {
  const { t } = useTranslation(['sign-in-form-component', 'fields']);

  const form = useForm({
    resolver: zodResolver(schema),
  });

  const hasOauthMethods = [onSignInWithGitHub].some(
    (method) => typeof method === 'function'
  );

  return (
    <DataForm
      form={form}
      onValid={onSignIn}
      className={cn('flex flex-col gap-4', className)}
    >
      <TextField name="username" label={t('fields:username-field')} />

      <PasswordField name="password" label={t('fields:password-field')} />

      <Button
        type="submit"
        disabled={!form.formState.isValid}
        isLoading={form.formState.isLoading}
      >
        {t('submit-button')}
      </Button>

      {hasOauthMethods && (
        <div className={authStyles.separator}>
          <span className="bg-background typography-small">
            {t('sign-in-alternative')}
          </span>
        </div>
      )}

      {onSignInWithGitHub && (
        <Button type="button" variant="outline" className="gap-1">
          {t('github-button')}
        </Button>
      )}
    </DataForm>
  );
};
