import { SignUpForm } from '@libs/presentation/src/components/auth/sign-up-form';
import { Button } from '@template/ui/components/button';

export default function Index() {
  return (
    <div>
      <SignUpForm />
      <Button variant="destructive">click me</Button>
    </div>
  );
}
