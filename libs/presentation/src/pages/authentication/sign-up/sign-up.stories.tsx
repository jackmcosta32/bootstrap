import { SignUp } from './index';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof SignUp> = {
  component: SignUp,
  title: 'Presentation/pages/authentication/SignUp',
};

export default Story;

export const Primary = {
  args: {} as React.ComponentProps<typeof SignUp>,
};
