import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { modalActionsStyles } from './modal.theme';

type IModalActionsProps = ComponentPropsWithoutRef<'div'>;

export function ModalActions({
  children,
  className,
}: PropsWithChildren<IModalActionsProps>) {
  const { actionsWrapper, divider } = modalActionsStyles({ className });
  return (
    <div className={divider()}>
      <div className={actionsWrapper()}>{children}</div>
    </div>
  );
}
