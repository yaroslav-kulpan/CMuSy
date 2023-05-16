import { HTMLProps, PropsWithChildren } from 'react';

type TableBodyProps = HTMLProps<HTMLTableSectionElement>;

export function TableBody({ children }: PropsWithChildren<TableBodyProps>) {
  return (
    <tbody className="divide-y">
    {children}
    </tbody>
  );
}
