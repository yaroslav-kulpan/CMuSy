import * as React from 'react';

import { cardTitle, CardTitleVariants } from './card.theme';

export type CardTitleProps = Omit<CardTitleVariants, "children"> & {
  title?: string;
  icon?: React.ReactNode;
  wrapperClassName?: string;
};

export const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CardTitleProps>
>(function CardTitle(
  { title = null, children = null, icon = null, wrapperClassName = '' },
  ref
) {
  const {
    cardTitle: cardTitleStyles,
    cardIcon,
    cardContainer,
  } = cardTitle({ children: !!children });

  return (
    <div className={wrapperClassName} ref={ref}>
      <div className={cardContainer()}>
        <h4 className={cardTitleStyles()}>{title}</h4>
        <div className={cardIcon()}>{icon}</div>
      </div>
      {children}
    </div>
  );
});

export default React.memo(CardTitle);
