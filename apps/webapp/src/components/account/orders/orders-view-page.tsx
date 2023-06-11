'use client';
import { useTranslations } from 'next-intl';
import {
  Badge,
  TableCell,
  Container,
  Table,
  TableHeader,
  Typography,
  TableColumn,
  TableBody,
  TableRow,
} from '@cmusy/ui';
import clsx from 'clsx';

import { table, tablesColumns } from './mocks/table';

// TODO: Add functionality to hide columns, in Table component.
export function OrdersViewPage() {
  const t = useTranslations('order');
  return (
    <Container className="container mx-auto mt-7 mb-7">
      <Table list={table} caption={t('title')}>
        <TableHeader>
          {tablesColumns.map((tablesColum) => (
            <TableColumn key={tablesColum}>{tablesColum}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {table.map((item) => {
            const {
              id,
              creationDate,
              creationTime,
              orderId,
              status,
              restaurant,
              totalAmount,
              badge,
            } = item;
            return (
              <TableRow className="group" key={id} rowKey={item}>
                <TableCell>{orderId}</TableCell>
                <TableCell>
                  <Badge
                    variant="text"
                    color="secondary"
                    className="whitespace-nowrap"
                  >
                    {restaurant}
                  </Badge>
                </TableCell>
                <TableCell>{creationDate}</TableCell>
                <TableCell>{creationTime}</TableCell>
                <TableCell>
                  <Badge
                    variant="dot"
                    color={
                      clsx({
                        success: badge === 'success',
                        primary: badge === 'primary',
                        danger: badge === 'error',
                      }) as any
                    }
                  >
                    {status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right group-hover:text-primary">
                  <Typography variant="subtitle-1" className="text-right">
                    {totalAmount}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}
