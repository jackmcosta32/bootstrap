'use client';

import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
} from '../table';

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  type Table as TTable,
  type TableOptions as TTableOptions,
} from '@tanstack/react-table';

import {
  DataTablePagination,
  PAGE_LIMIT_OPTIONS,
} from './data-table-pagination';

export interface TPagination {
  pageNumber?: number;
  totalItems?: number;
  itemsPerPage?: number;
  nextPage: number | null;
  previousPage: number | null;
}

interface DataTableProps<TData>
  extends Omit<React.ComponentProps<typeof Table>, 'children'> {
  options?: Partial<TTableOptions<TData>>;
  pagination?: TPagination;
}

const DEFAULT_TABLE_OPTIONS = {
  data: [],
  columns: [],
  debugTable: true,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
} satisfies Partial<TTableOptions<unknown>>;

const mapPaginationDetails = (pagination?: TPagination) => {
  if (!pagination) return;

  const { totalItems, pageNumber, itemsPerPage } = pagination;

  return {
    rowCount: totalItems ?? -1,
    initialState: {
      pagination: {
        pageIndex: pageNumber ?? 0,
        pageSize: itemsPerPage ?? PAGE_LIMIT_OPTIONS[0],
      },
    },
  };
};

const renderTableHeader = <TData,>(table?: TTable<TData>) => {
  if (!table) return null;

  const renderedHeaderGroups = table.getHeaderGroups().map((headerGroup) => (
    <TableRow key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <TableHead key={header.id}>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </TableHead>
      ))}
    </TableRow>
  ));

  return renderedHeaderGroups;
};

const renderTableBody = <TData,>(table?: TTable<TData>) => {
  if (!table) return null;

  const { rows } = table.getRowModel();

  if (!Array.isArray(rows) || !rows.length) {
    return (
      <TableRow>
        <TableCell
          className="h-24 text-center"
          colSpan={table.getAllColumns().length}
        >
          No results.
        </TableCell>
      </TableRow>
    );
  }

  const renderedRows = rows.map((row) => (
    <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  ));

  return renderedRows;
};

export function DataTable<TData>({
  options,
  pagination,
  ...rest
}: DataTableProps<TData>) {
  const tableOptions: TTableOptions<TData> = Object.assign(
    DEFAULT_TABLE_OPTIONS,
    options,
    mapPaginationDetails(pagination)
  );

  const table = useReactTable(tableOptions);

  return (
    <Table {...rest}>
      <TableHeader>{renderTableHeader(table)}</TableHeader>

      <TableBody>{renderTableBody(table)}</TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={table.getAllColumns().length}>
            <DataTablePagination table={table} />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
