import type { Meta, StoryObj } from '@storybook/react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  PaginationPrevious,
  PaginationEllipsis,
} from './pagination';

const Component = (props: React.ComponentProps<typeof Pagination>) => (
  <Pagination {...props}>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

const Story: Meta<typeof Pagination> = {
  component: Component,
  title: 'Components/UI/Pagination',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
