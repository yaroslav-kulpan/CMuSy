import React from 'react';

import { tableColumn, TableColumnVariants } from './table.theme';

type TableColumnProps = React.ComponentPropsWithoutRef<'th'> &
  TableColumnVariants;

export const TableColumn = React.forwardRef<
  HTMLTableCellElement,
  React.PropsWithChildren<TableColumnProps>
>(function TableColumn({ children, className, ...rest }, ref) {
  return (
    <th ref={ref} scope="col" className={tableColumn({ className })} {...rest}>
      {children}
    </th>
  );
});

export default TableColumn;
