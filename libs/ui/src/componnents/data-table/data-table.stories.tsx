import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './data-table';

const columns = [
  {
    header: 'E-mail',
    accessorKey: 'email',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
];

const data = [
  {
    name: 'Test 1',
    email: 'test1@email.com',
  },
  {
    name: 'Test 2',
    email: 'test2@email.com',
  },
  {
    name: 'Test 3',
    email: 'test3@email.com',
  },
];

const Story: Meta<React.ComponentProps<typeof DataTable>> = {
  component: DataTable,
  title: 'Components/UI/DataTable',
};

export default Story;

export const Primary: StoryObj<typeof Story> = {
  args: {
    options: {
      data,
      columns,
    },
  },
};
