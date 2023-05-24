import { PropsWithChildren } from 'react';

import { TableProvider } from './context/table.context';
import { TableBody } from './table-body';
import { TableCell } from './table-cell';
import { TableColumn } from './table-column';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';
import { table } from './table.theme';

type TableProps = {
  selectionMode?: string;
  defaultSelectedKeys?: string[];
  caption?: string | null;
  list: Record<string, any>[];
};

export function Table({
  children,
  defaultSelectedKeys,
  selectionMode,
  list,
  caption = null,
}: PropsWithChildren<TableProps>) {
  const { tableContainer, tableRoot, tableCaption } = table();

  return (
    <TableProvider
      defaultSelectedKeys={defaultSelectedKeys}
      selectionMode={selectionMode}
      list={list}
    >
      {caption && <h5 className={tableCaption()}>{caption}</h5>}
      <div className={tableContainer()}>
        <table className={tableRoot()}>{children}</table>
      </div>
    </TableProvider>
  );
}

Table.TableBody = TableBody;
Table.TableCell = TableCell;
Table.TableColumn = TableColumn;
Table.TableHeader = TableHeader;
Table.TableRow = TableRow;

export default Table;
