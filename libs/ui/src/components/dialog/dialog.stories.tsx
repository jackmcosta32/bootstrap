import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from './dialog';

const Component = (props: React.ComponentProps<typeof Dialog>) => (
  <Dialog {...props}>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const Story: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Components/UI/Dialog',
};

export default Story;

export const Primary: StoryObj<typeof Dialog> = {
  args: {},
  render: Component,
};
