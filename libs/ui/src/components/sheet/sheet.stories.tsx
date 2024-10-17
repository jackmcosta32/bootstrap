import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  SheetDescription,
} from './sheet';

import type { Meta, StoryObj } from '@storybook/react';

const Component = () => (
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const Story: Meta<typeof Sheet> = {
  component: Sheet,
  title: 'Components/UI/Sheet',
};

export default Story;

export const Primary: StoryObj<typeof Sheet> = {
  args: {},
  render: Component,
};
