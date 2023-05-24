import { tv, VariantProps } from 'tailwind-variants';

export const table = tv({
  slots: {
    tableCaption: 'text-h5 font-semibold leading-28 tracking-0.1',
    tableContainer:
      'overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-2xl mt-4',
    tableRoot: 'min-w-full text-left border border-neutral-lightest-gray',
  },
});

export const tableBody = tv({
  base: 'divide-y',
});

export const tableColumn = tv({
  base: 'whitespace-nowrap text-small-1 font-bold leading-18 tracking-0.1 first:py-5 px-4 last:pr-4 last:text-right text-neutral-gray',
  variants: {
    align: {
      start: '',
      center: '',
      end: '',
    },
  },
});

export const tableCell = tv({
  base: 'text-small-2 font-semibold leading-16 tracking-0 py-5 px-4 whitespace-nowrap',
});

export const tableHeader = tv({
  slots: {
    header: 'border border-b-neutral-light-gray',
    row: 'bg-neutral-background',
    column: 'relative w-12',
    checkbox: 'absolutes top-1/2',
  },
});

export const tableRow = tv({
  slots: {
    row: 'hover:bg-neutral-background cursor-pointer transition duration-150',
    cell: 'relative transition duration-150',
    checkbox: 'absolutes top-1/2',
    col: 'transition duration-150',
  },
  variants: {
    selected: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ['cell'],
      selected: true,
      class: 'bg-primary-light',
    },
    {
      slots: ['col'],
      selected: true,
      class: 'bg-primary-light',
    },
  ],
});

export type TableColumnVariants = VariantProps<typeof tableColumn>;
export type TableCellVariants = VariantProps<typeof tableCell>;
export type TableHeaderVariants = VariantProps<typeof tableHeader>;
export type TableRowVariants = VariantProps<typeof tableRow>;
