import React from 'react';

import { tableBody } from './table.theme';

type TableBodyProps = React.ComponentPropsWithoutRef<'tbody'>;

export const TableBody = React.forwardRef<
  React.ComponentPropsWithoutRef<'tbody'>,
  React.PropsWithChildren<TableBodyProps>
>(function TableBody({ children, className, ...rest }) {
  return (
    <tbody className={tableBody({ className })} {...rest}>
      {children}
    </tbody>
  );
});


export default TableBody;
