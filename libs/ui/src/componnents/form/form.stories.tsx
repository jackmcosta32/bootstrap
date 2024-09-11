import type { Meta, StoryObj } from '@storybook/react';
import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from './form';

import { Input } from '../input';

const Component = (props: React.ComponentProps<typeof FormField>) => (
  <FormField
    {...props}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
);

const Story: Meta<typeof FormField> = {
  component: Component,
  title: 'Components/UI/Form',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
