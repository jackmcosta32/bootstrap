import type { Meta, StoryObj } from '@storybook/react';
import {
  NavigationBar,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from './navigation';
import { Typography } from '../typography';

const Story: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  title: 'Components/UI/NavigationBar',
};

export default Story;

export const Primary: StoryObj<typeof NavigationBar> = {
  args: {
    children: 'NavigationBar',
  },
};

const Component = (props: React.ComponentProps<typeof NavigationBar>) => {
  return (
    <NavigationBar {...props}>
      <Typography variant="h3" fontFamily="sans">
        Logo
      </Typography>

      <NavigationMenu className="ml-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </NavigationBar>
  );
};

export const WithMenu: StoryObj<typeof NavigationBar> = {
  args: {},
  render: Component,
};
