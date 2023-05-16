import { Children, cloneElement, HTMLProps, memo, PropsWithChildren, ReactElement } from 'react';
import { TableCell } from './table-cell';
import { Checkbox } from '../checkbox';
import { useTable, useTableAction } from './context/table.context';
import clsx from 'clsx';

type TableRow = HTMLProps<HTMLTableRowElement> & {
  rowKey: any;
};

export function TableRow({ children, className, rowKey }: PropsWithChildren<TableRow>) {
  const { selectedKeys } = useTable();
  const dispatch = useTableAction();

  const handleChange = () => {
    dispatch({ type: 'toggle-selected', payload: rowKey });
  };

  return (
    <tr
      className={clsx(
        'hover:bg-neutral-background cursor-pointer transition duration-150',
        className
      )}
    >
      <TableCell
        className={clsx('relative transition duration-150', {
          'bg-primary-light': selectedKeys?.has(rowKey),
        })}
      >
        <Checkbox
          className="absolutes top-1/2"
          onChange={handleChange}
          checked={selectedKeys?.has(rowKey)}
        />
      </TableCell>
      {Children.map(children, (child) => {
        const childItem = child as ReactElement;
        const childClassName = childItem.props.className;
        return cloneElement(childItem, {
          className: clsx(childClassName, {
            'transition duration-150 bg-primary-light': selectedKeys?.has(rowKey),
          }),
        });
      })}
    </tr>
  );
}

export default memo(TableRow);
