import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

type IModalActionsProps = ComponentPropsWithoutRef<'div'>

export function ModalActions({ children, className }: PropsWithChildren<IModalActionsProps>) {
  return (
    <div className={clsx('w-full flex justify-end items-center px-5 py-5 border-t border-neutral-lightest-gray', className)}>
      <div className="grid grid-cols-2 gap-x-4">{children}</div>
    </div>
  );
}
