import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableHeader,
  TableCaption,
} from './table';

const Component = (props: React.ComponentProps<typeof Table>) => (
  <Table {...props}>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const Story: Meta<typeof Table> = {
  component: Component,
  title: 'Components/UI/Table',
};

export default Story;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
