import React from 'react';

import Checkbox from '../checkbox';
import { TableColumn } from './table-column';
import { useTable, useTableAction } from './context/table.context';
import { tableHeader, TableHeaderVariants } from './table.theme';

type TableHeaderProps = React.ComponentPropsWithoutRef<'thead'> &
  Omit<TableHeaderVariants, 'class'>;

export function TableHeader({
  children,
}: React.PropsWithChildren<TableHeaderProps>) {
  const [checked, setChecked] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(false);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const { selectedKeys, list } = useTable();
  const dispatch = useTableAction();
  const { checkbox, header, row, column } = tableHeader();

  React.useEffect(() => {
    const isIndeterminate =
      selectedKeys.size > 0 && selectedKeys.size < list.length;
    setChecked(selectedKeys.size === list.length);
    setIndeterminate(isIndeterminate);

    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [list.length, selectedKeys]);

  const toggleAll = () => {
    dispatch({
      type: 'toggle-all',
      payload: checked || indeterminate ? [] : list,
    });
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  };

  return (
    <thead className={header()}>
      <tr className={row()}>
        <TableColumn scope="col" className={column()}>
          <Checkbox
            className={checkbox()}
            ref={checkboxRef}
            checked={checked}
            onChange={toggleAll}
          />
        </TableColumn>
        {children}
      </tr>
    </thead>
  );
}
