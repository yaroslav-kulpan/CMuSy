import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface IModalContentProps extends ComponentPropsWithoutRef<'div'> {
  dividers?: boolean;
}

export function ModalContent({
  dividers = false,
  children,
  className,
  ...props
}: PropsWithChildren<IModalContentProps>) {
  return (
    <div className={clsx('px-5 py-5', className)} {...props}>
      {children}
    </div>
  );
}
