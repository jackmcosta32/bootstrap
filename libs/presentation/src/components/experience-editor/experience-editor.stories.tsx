import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceEditor } from './experience-editor';

const Story: Meta<typeof ExperienceEditor> = {
  component: ExperienceEditor,
  title: 'Components/Presentation/ExperienceEditor',
};

export default Story;

export const Primary: StoryObj<typeof ExperienceEditor> = {
  args: {},
};
