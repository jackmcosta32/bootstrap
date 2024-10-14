import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from './index';

const Story: Meta<typeof CircularProgress> = {
    component: CircularProgress,
    title: 'Components/UI/CircularProgress',
};

export default Story;

export const Primary: StoryObj<typeof CircularProgress> = {
    args: {},
};
