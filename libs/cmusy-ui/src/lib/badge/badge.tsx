import React from 'react';
import { badge, BadgeVariants, dot } from './badge.theme';
import { mergeProps } from 'react-aria';

type TTag =
  | ({ as?: never } & React.HTMLProps<HTMLSpanElement>)
  | ({ as: 'span' } & React.HTMLProps<HTMLSpanElement>)
  | ({ as: 'a' } & React.HTMLProps<HTMLAnchorElement>)
  | ({ as: 'div' } & React.HTMLProps<HTMLDivElement>)
  | ({ as: 'p' } & React.HTMLProps<HTMLParagraphElement>)
  | ({ as: 'button' } & React.HTMLProps<HTMLButtonElement>);

export type BadgeProps = BadgeVariants &
  TTag & {
    fullWidth?: boolean;
    disabled?: boolean;
  };

const elementPropsByVariant: Record<string, any> = {
  text: {
    as: 'button',
    type: 'button',
  },
  outlined: {
    as: 'button',
    type: 'button',
  },
};

export const Badge = React.forwardRef<
  TTag,
  React.PropsWithChildren<BadgeProps>
>(function Badge(props: React.PropsWithChildren<BadgeProps>, ref) {
  const {
    children,
    as,
    variant = 'text',
    color = 'primary',
    size = 'xs',
    disabled = false,
    className,
    ...restProps
  } = props;
  const { as: asByVariant, ...restPropsVariants } =
    elementPropsByVariant[variant] || {};
  const Component = asByVariant || as || 'span';
  const classes = badge({ size, color, variant, className, disabled });

  return (
    <Component
      ref={ref}
      className={classes}
      disabled={disabled}
      {...mergeProps(restProps, restPropsVariants)}
    >
      {variant === 'dot' && <span className={dot({ color })} />}
      {children}
    </Component>
  );
});

export default React.memo(Badge);
