import React from 'react';
import { mergeProps } from 'react-aria';

import { typography, TypographyVariants } from './typography.theme';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../utils/props';

type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      html?: string;
      active?: boolean;
      variant?: TypographyVariants;
    }
  >;

type TextComponent = <C extends React.ElementType = 'span' | 'label'>(
  props: TypographyProps<C>
) => React.ReactElement | null;

const elementPropsByVariant: Record<string, any> = {
  h1: {
    as: 'h1',
  },
  h2: {
    as: 'h2',
  },
  h3: {
    as: 'h3',
  },
  h4: {
    as: 'h4',
  },
  h5: {
    as: 'h5',
  },
  h6: {
    as: 'h6',
  },
  'button-1': {
    as: 'button',
    type: 'button',
  },
  'button-2': {
    as: 'button',
    type: 'button',
  },
  'nav-link': {
    as: 'a',
  },
};

export const Typography: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span' | 'label'>(
    props: TypographyProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const {
      as,
      variant = 'h1',
      className,
      children,
      color,
      ...restProps
    } = props;

    const { as: asByVariant, ...restPropsVariants } =
      elementPropsByVariant[variant] || {};
    const Component = as || asByVariant || 'span';

    return (
      <Component
        ref={ref}
        className={typography({ variant, color, className })}
        {...mergeProps(restPropsVariants, restProps)}
      >
        {children}
      </Component>
    );
  }
);

export default React.memo(Typography);
