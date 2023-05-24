import React from 'react';

import { card, CardVariants } from './card.theme';
import { __DEV__ } from '../utils/assert';

export type CardProps = React.ComponentPropsWithoutRef<'div'> & CardVariants;

export const Card = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CardProps>
>(function Card({ children, className, variant = 'default', ...props }, ref) {
  return (
    <div ref={ref} className={card({ className })} {...props}>
      {children}
    </div>
  );
});

if (__DEV__) {
  Card.displayName = 'CMuSyUI.Card';
}

export default Card;
