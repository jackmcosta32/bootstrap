import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './index';

const Story: Meta<typeof Loader> = {
    component: Loader,
    title: 'components/UI/Loader',
};

export default Story;

export const Primary: StoryObj<typeof Loader> = {
    args: {},
};
