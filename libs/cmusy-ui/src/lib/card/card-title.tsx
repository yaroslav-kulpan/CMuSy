import { memo, ReactNode } from 'react';
import clsx from 'clsx';
import { Typography } from '../typography';

export interface ICardTitleProps {
  title: string;
  children?: ReactNode;
  icon?: ReactNode;
  wrapperClassName?: string;
}

export function CardTitle({
  title,
  children,
  icon = null,
  wrapperClassName = '',
}: ICardTitleProps) {
  return (
    <div className={wrapperClassName}>
      <div
        className={clsx('flex justify-between items-center', {
          'pb-1.5': children,
        })}
      >
        <Typography variant="h4">{title}</Typography>
        <div className="flex justify-center items-center w-5 h-5 text-neutral-light-gray">
          {icon}
        </div>
      </div>
      {children}
    </div>
  );
}

export default memo(CardTitle);
