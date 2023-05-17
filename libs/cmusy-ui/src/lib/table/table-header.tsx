import { HTMLProps, PropsWithChildren, useRef, useState, useEffect } from 'react';
import { Checkbox } from '../checkbox';
import { TableColumn } from './table-column';
import { useTable, useTableAction } from './context/table.context';

type TableHeaderProps = HTMLProps<HTMLHeadingElement>;

export function TableHeader({ children }: PropsWithChildren<TableHeaderProps>) {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const checkbox = useRef<HTMLInputElement>(null);
  const { selectedKeys, list } = useTable();
  const dispatch = useTableAction();

  useEffect(() => {
    const isIndeterminate = selectedKeys.size > 0 && selectedKeys.size < list.length;
    setChecked(selectedKeys.size === list.length);
    setIndeterminate(isIndeterminate);

    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
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
    <thead className="border border-b-neutral-light-gray">
    <tr className="bg-neutral-background">
      <TableColumn scope="col" className="relative w-12">
        <Checkbox
          className="absolutes top-1/2"
          ref={checkbox}
          checked={checked}
          onChange={toggleAll}
        />
      </TableColumn>
      {children}
    </tr>
    </thead>
  );
}
