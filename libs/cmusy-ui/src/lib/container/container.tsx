import React, { ElementType, PropsWithChildren } from 'react';
import clsx from 'clsx';

type ContainerProps<T extends ElementType = 'div' | 'span'> = {
  as?: T;
  className?: string;
  clean?: boolean;
};

export function Container({
  children,
  className,
  as: Component = 'div',
  clean,
}: PropsWithChildren<ContainerProps>) {
  const rootClassName = clsx(className, {
    'mx-auto max-w-7xl px-6 w-full': !clean,
  });
  return <Component className={rootClassName}>{children}</Component>;
}


export default Container;
