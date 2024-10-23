import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

const Component = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Components/UI/Card',
  render: Component,
};

export default Story;

export const Primary: StoryObj<typeof Card> = {
  args: {},
  render: Component,
};
