import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerClose,
  DrawerTitle,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerTrigger,
  DrawerDescription,
} from './drawer';

import { Button } from '../button';

const Component = (props: React.ComponentProps<typeof Drawer>) => (
  <Drawer {...props}>
    <DrawerTrigger>Open</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

const Story: Meta<typeof Drawer> = {
  component: Component,
  title: 'Components/UI/Drawer',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
