import { PropsWithChildren } from 'react';

import { TableProvider } from './context/table.context';
import { Typography } from '../typography';
import { TableBody } from './table-body';
import { TableCell } from './table-cell';
import { TableColumn } from './table-column';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';

interface TableProps {
  selectionMode?: string;
  defaultSelectedKeys?: string[];
  caption?: string | null;
  list: Record<string, any>[];
}

export function Table({
  children,
  defaultSelectedKeys,
  selectionMode,
  list,
  caption = null,
}: PropsWithChildren<TableProps>) {
  return (
    <TableProvider
      defaultSelectedKeys={defaultSelectedKeys}
      selectionMode={selectionMode}
      list={list}
    >
      {caption && <Typography variant="h5">{caption}</Typography>}
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-2xl mt-4">
        <table className="min-w-full text-left border border-neutral-lightest-gray">
          {children}
        </table>
      </div>
    </TableProvider>
  );
}

Table.TableBody = TableBody;
Table.TableCell = TableCell;
Table.TableColumn = TableColumn;
Table.TableHeader = TableHeader;
Table.TableRow = TableRow;
