import type { Meta, StoryObj } from '@storybook/react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

const Component = (props: React.ComponentProps<typeof Carousel>) => (
  <Carousel
    opts={{
      align: 'start',
    }}
    className="w-full"
  >
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="border-border border-solid border rounded-sm w-60 h-60 flex flex-col aspect-square items-center justify-center p-6">
            <span className="text-3xl font-semibold">{index + 1}</span>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

const Story: Meta<typeof Carousel> = {
  component: Component,
  title: 'Components/UI/Carousel',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
