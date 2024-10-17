import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from './accordion';

import type { Meta, StoryObj } from '@storybook/react';

const Component = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const Story: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/UI/Accordion',
};

export default Story;

export const Primary: StoryObj<typeof Accordion> = {
  args: {},
  render: Component,
};
