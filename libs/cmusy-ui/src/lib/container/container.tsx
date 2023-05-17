import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { AsProp } from '../utils/props';

type ContainerProps = AsProp<'span' | 'div'> & {
  className?: string;
  clean?: boolean;
}

export function Container({
  children,
  className,
  as: Component = 'div',
  clean,
}: PropsWithChildren<ContainerProps>) {
  const rootClassName = clsx(className, {
    'mx-auto max-w-7xl px-6 w-full': !clean,
  });
  return <Component className={rootClassName} >{children}</Component>;
}
