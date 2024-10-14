import type { Meta } from '@storybook/react';
import { Typography, type TypographyProps } from './typography';
import { DataTable, PAGE_LIMIT_OPTIONS, type TColumnDef } from '../data-table';

const Component = () => {
  const variantProps = [
    {
      children: 'H1',
      variant: 'h1',
    },
    {
      children: 'H2',
      variant: 'h2',
    },
    {
      children: 'H3',
      variant: 'h3',
    },
    {
      children: 'H4',
      variant: 'h4',
    },
    {
      children: 'Paragraph',
      variant: 'p',
    },
    {
      children: 'Lead',
      variant: 'lead',
    },
    {
      children: 'Large',
      variant: 'large',
    },
    {
      children: 'Small',
      variant: 'small',
    },
    {
      children: 'Muted',
      variant: 'muted',
    },
    {
      children: 'Code',
      variant: 'code',
    },
  ] as TypographyProps[];

  const columns = [
    {
      header: 'Style',
      accessorKey: 'children',
      cell: ({ row }) => <Typography {...row.original} />,
    },
    {
      header: 'Variant',
      accessorKey: 'variant',
    },
    {
      header: 'Font Family',
      accessorKey: 'fontFamily',
    },
    {
      header: 'Font Weight',
      accessorKey: 'fontWeight',
    },
  ] as TColumnDef<TypographyProps>[];

  return (
    <DataTable
      pagination={{
        itemsPerPage: PAGE_LIMIT_OPTIONS[2],
        pageNumber: 0,
        totalItems: variantProps.length,
        nextPage: undefined,
        previousPage: undefined,
      }}
      options={{ columns, data: variantProps }}
    />
  );
};

const Story: Meta<typeof Typography> = {
  component: Typography,
  title: 'Components/UI/Typography',
};

export default Story;

export const Primary = {
  args: {
    as: 'span',
    children: 'Typography',
  } as React.ComponentProps<typeof Typography>,
};

export const As = {
  args: {
    as: 'a',
    href: '#',
    children: 'Anchor',
  } as React.ComponentProps<typeof Typography<'a'>>,
};

export const Showcase = {
  render: Component,
};
