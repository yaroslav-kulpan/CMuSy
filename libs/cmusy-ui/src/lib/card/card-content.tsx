import { HTMLAttributes, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export function CardContent({
  children,
  className,
}: PropsWithChildren<CardContentProps>) {
  return <div className={clsx('px-5 py-5', className)}>{children}</div>;
}

export default memo(CardContent);
