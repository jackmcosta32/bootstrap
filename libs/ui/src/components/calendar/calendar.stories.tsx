import { useState } from 'react';
import { Calendar } from './calendar';
import type { Meta, StoryObj } from '@storybook/react';

const Component = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
};

const Story: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Components/UI/Calendar',
};

export default Story;

export const Primary: StoryObj<typeof Calendar> = {
  args: {},
  render: Component,
};
