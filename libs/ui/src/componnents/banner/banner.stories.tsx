import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './banner';

const Story: Meta<typeof Banner> = {
  component: Banner,
  title: 'Components/UI/Banner',
};

export default Story;

export const Primary: StoryObj<typeof Banner> = {
  args: {
    children: 'Banner',
  },
};
