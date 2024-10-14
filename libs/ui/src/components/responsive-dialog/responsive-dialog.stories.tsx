import type { Meta, StoryObj } from '@storybook/react';
import {
  ResponsiveDialog,
  ResponsiveDialogTitle,
  ResponsiveDialogHeader,
  ResponsiveDialogTrigger,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
} from './responsive-dialog';

const Component = (props: React.ComponentProps<typeof ResponsiveDialog>) => (
  <ResponsiveDialog {...props}>
    <ResponsiveDialogTrigger>Open</ResponsiveDialogTrigger>
    <ResponsiveDialogContent>
      <ResponsiveDialogHeader>
        <ResponsiveDialogTitle>Are you absolutely sure?</ResponsiveDialogTitle>
        <ResponsiveDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </ResponsiveDialogDescription>
      </ResponsiveDialogHeader>
    </ResponsiveDialogContent>
  </ResponsiveDialog>
);

const Story: Meta<typeof ResponsiveDialog> = {
  component: Component,
  title: 'Components/UI/ResponsiveDialog',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
