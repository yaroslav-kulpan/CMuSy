import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';
import {modalTitleStyles} from "./modal.theme";

type IModalTitleProps = ComponentPropsWithoutRef<'div'>;

export function ModalTitle({
  children,
  className,
  ...props
}: PropsWithChildren<IModalTitleProps>) {
  return (
    <div className={modalTitleStyles({className})} {...props}>
      {children}
    </div>
  );
}
