import type { Meta } from '@storybook/react';
import { Typography, type TypographyProps } from './typography';
import { DataTable, PAGE_LIMIT_OPTIONS, type TColumnDef } from '../data-table';

const Component = () => {
  const variantProps = [
    // Display
    {
      children: 'Display 1/300',
      variant: 'display1',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Display 1/Special',
      variant: 'display1',
      fontFamily: 'sans',
      fontWeight: 'light',
      fontStyle: 'italic',
    },
    {
      children: 'Display 2/300',
      variant: 'display2',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Display 2/Special',
      variant: 'display2',
      fontFamily: 'sans',
      fontWeight: 'light',
      fontStyle: 'italic',
    },

    // Headline
    {
      children: 'Headline 1/300',
      variant: 'h1',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Headline 1/600',
      variant: 'h1',
      fontFamily: 'mono',
      fontWeight: 'bold',
    },
    {
      children: 'Headline 1/Special',
      variant: 'h1',
      fontFamily: 'sans',
      fontWeight: 'light',
      fontStyle: 'italic',
    },
    {
      children: 'Headline 2/300',
      variant: 'h2',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Headline 2/600',
      variant: 'h2',
      fontFamily: 'mono',
      fontWeight: 'bold',
    },
    {
      children: 'Headline 2/Special',
      variant: 'h2',
      fontFamily: 'sans',
      fontWeight: 'light',
      fontStyle: 'italic',
    },
    {
      children: 'Headline 3/300',
      variant: 'h3',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Headline 3/600',
      variant: 'h3',
      fontFamily: 'mono',
      fontWeight: 'bold',
    },
    {
      children: 'Headline 3/Special',
      variant: 'h3',
      fontFamily: 'sans',
      fontWeight: 'light',
    },
    {
      children: 'Headline 4/300',
      variant: 'h4',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Headline 4/600',
      variant: 'h4',
      fontFamily: 'mono',
      fontWeight: 'bold',
    },
    {
      children: 'Headline 4/Special',
      variant: 'h4',
      fontFamily: 'sans',
      fontWeight: 'light',
    },

    // Paragraph
    {
      children: 'Paragraph 1/300',
      variant: 'paragraph1',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Paragraph 2/300',
      variant: 'paragraph2',
      fontFamily: 'mono',
      fontWeight: 'light',
    },

    // Label
    {
      children: 'Label 1/300',
      variant: 'label1',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Label 1/600',
      variant: 'label1',
      fontFamily: 'mono',
      fontWeight: 'bold',
    },
    {
      children: 'Label 2/300',
      variant: 'label2',
      fontFamily: 'mono',
      fontWeight: 'light',
    },
    {
      children: 'Label 2/600',
      variant: 'label2',
      fontFamily: 'mono',
      fontWeight: 'bold',
    },

    // Caption
    {
      children: 'Caption 1/400',
      variant: 'caption1',
      fontFamily: 'mono',
      fontWeight: 'normal',
    },
    {
      children: 'Caption 2/400',
      variant: 'caption2',
      fontFamily: 'mono',
      fontWeight: 'normal',
    },

    // CTA
    {
      children: 'CTA 1/500',
      variant: 'cta1',
      fontFamily: 'mono',
      fontWeight: 'medium',
    },
    {
      children: 'CTA 2/500',
      variant: 'cta2',
      fontFamily: 'mono',
      fontWeight: 'medium',
    },
    {
      children: 'CTA 3/500',
      variant: 'cta3',
      fontFamily: 'mono',
      fontWeight: 'medium',
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
