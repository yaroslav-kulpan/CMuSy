import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

type IModalTitleProps = ComponentPropsWithoutRef<'div'>;

export function ModalTitle({
  children,
  className,
  ...props
}: PropsWithChildren<IModalTitleProps>) {
  return (
    <div className={clsx('px-5 py-5', className)} {...props}>
      {children}
    </div>
  );
}
