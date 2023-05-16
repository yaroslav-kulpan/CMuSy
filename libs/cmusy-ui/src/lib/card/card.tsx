import { forwardRef, HTMLAttributes, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'floating';
}

const styles = {
  default: 'min-w-0 bg-white border border-neutral-light-gray rounded-2xl',
  floating:
    'min-w-0 bg-white border border-neutral-lightest-gray rounded-2xl shadow-card',
};

export const Card = forwardRef<HTMLDivElement, PropsWithChildren<ICardProps>>(
  function Card({ children, className, variant = 'default', ...props }, ref) {
    return (
      <div ref={ref} className={clsx(styles[variant], className)} {...props}>
        {children}
      </div>
    );
  }
);

export default memo(Card);
