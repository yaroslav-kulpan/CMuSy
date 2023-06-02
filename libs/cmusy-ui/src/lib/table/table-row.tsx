import React from 'react';

import { TableCell } from './table-cell';
import Checkbox from '../checkbox';
import { useTable, useTableAction } from './context/table.context';
import { tableRow } from './table.theme';

type TableRow = React.ComponentPropsWithoutRef<'tr'> & {
  rowKey: any;
};

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.PropsWithChildren<TableRow>
>(function TableRow({ children, className, rowKey }) {
  const { selectedKeys } = useTable();
  const dispatch = useTableAction();
  const selectedRow = selectedKeys?.has(rowKey);
  const { row, cell, checkbox, col } = tableRow({
    selected: selectedRow,
  });
  const handleChange = () => {
    dispatch({ type: 'toggle-selected', payload: rowKey });
  };

  return (
    <tr className={row({ className })}>
      <TableCell className={cell()}>
        <Checkbox
          className={checkbox()}
          onChange={handleChange}
          checked={selectedRow}
        />
      </TableCell>
      {React.Children.map(children, (child) => {
        const childItem = child as React.ReactElement;
        const childClassName = childItem.props.className;
        return React.cloneElement(childItem, {
          className: col({ className: childClassName }),
        });
      })}
    </tr>
  );
});

export default React.memo(TableRow);
