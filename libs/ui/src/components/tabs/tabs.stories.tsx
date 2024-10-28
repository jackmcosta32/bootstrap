import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const Component = () => (
  <Tabs defaultValue="account" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent>
  </Tabs>
);

const Story: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/UI/Tabs',
};

export default Story;

export const Primary: StoryObj<typeof Tabs> = {
  args: {},
  render: Component,
};
