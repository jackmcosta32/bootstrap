import signUpStyles from './sign-up.module.scss';

import { Link } from '@template/ui/components/link';
import { Button } from '@template/ui/components/button';
import { useTranslation } from '@template/presentation/libs/i18n';

export interface SignUpProps {}

export function SignUp({ children }: React.PropsWithChildren<SignUpProps>) {
  const { t } = useTranslation('sign-up');

  return (
    <div className="flex flex-col">
      <h1 className="text-foreground text-left md:text-center font-bold text-3xl md:text-4xl mb-8">
        {t('title')}
      </h1>

      <div className={signUpStyles.separator}>
        <span className="bg-background">{t('sign-up-alternative')}</span>
      </div>

      <span className="flex flex-row gap-1 text-center content-center justify-center text-sm font-medium text-primary">
        {t('already-have-an-account')}
        <Link className="p-0 h-auto">{t('sign-in-button')}</Link>
      </span>
    </div>
  );
}
