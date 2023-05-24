import { memo, ReactNode } from 'react';

import { cardTitle, CardTitleVariants } from './card.theme';

export type CardTitleProps = CardTitleVariants & {
  title: string;
  children?: ReactNode;
  icon?: ReactNode;
  wrapperClassName?: string;
};

export function CardTitle({
  title,
  children,
  icon = null,
  wrapperClassName = '',
}: CardTitleProps) {
  const {
    cardTitle: cardTitleStyles,
    cardIcon,
    cardContainer,
  } = cardTitle({ children });

  return (
    <div className={wrapperClassName}>
      <div className={cardContainer()}>
        <h4 className={cardTitleStyles()}>{title}</h4>
        <div className={cardIcon()}>{icon}</div>
      </div>
      {children}
    </div>
  );
}

export default memo(CardTitle);
