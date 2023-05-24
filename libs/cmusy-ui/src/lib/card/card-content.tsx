import React from 'react';
import clsx from 'clsx';

export type CardContentProps = React.ComponentPropsWithoutRef<"div">;

export function CardContent({
  children,
  className,
}: React.PropsWithChildren<CardContentProps>) {
  return <div className={clsx('px-5 py-5', className)}>{children}</div>;
}

export default React.memo(CardContent);
