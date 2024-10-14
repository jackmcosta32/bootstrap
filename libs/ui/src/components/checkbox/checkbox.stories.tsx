import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../label';
import { Checkbox } from './checkbox';

const Component = (props: React.ComponentProps<typeof Checkbox>) => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" {...props} />

    <Label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </Label>
  </div>
);

const Story: Meta<typeof Checkbox> = {
  component: Component,
  title: 'Components/UI/Checkbox',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
