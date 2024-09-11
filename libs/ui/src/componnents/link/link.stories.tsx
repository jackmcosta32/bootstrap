import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './index';

const Story: Meta<typeof Link> = {
    component: Link,
    title: 'Components/UI/Link',
};

export default Story;

export const Primary: StoryObj<typeof Link> = {
    args: {
        children: 'Link',
    },
};
