import { HTMLProps, PropsWithChildren } from 'react';
import clsx from 'clsx';

type TableColumnAlign = 'start' | 'center' | 'end';
type TableColumnProps = HTMLProps<HTMLTableColElement>;

export function TableColumn({ children, className }: PropsWithChildren<TableColumnProps>) {
  return (
    <th
      scope="col"
      className={clsx(
        'whitespace-nowrap text-small-1 font-bold leading-18 tracking-0.1 first:py-5 px-4 last:pr-4 last:text-right text-neutral-gray',
        className
      )}
    >
      {children}
    </th>
  );
}
