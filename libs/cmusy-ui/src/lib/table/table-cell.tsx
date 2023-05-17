import { HTMLProps, PropsWithChildren } from 'react';
import clsx from 'clsx';

type TableCellProps = HTMLProps<HTMLTableCellElement>;

export function TableCell({ children, className, ...props }: PropsWithChildren<TableCellProps>) {
  return (
    <td
      className={clsx(
        'text-small-2 font-semibold leading-16 tracking-0 py-5 px-4 whitespace-nowrap',
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}
