import React from 'react';
import clsx from 'clsx';

type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'no-color';
type Variant = 'text' | 'outlined' | 'dot' | 'sticker' | 'indicator';
type Size = 'xs' | 'sm' | 'lg';

type TTag =
  | ({ as?: never } & React.HTMLProps<HTMLSpanElement>)
  | ({ as: 'span' } & React.HTMLProps<HTMLSpanElement>)
  | ({ as: 'a' } & React.HTMLProps<HTMLAnchorElement>)
  | ({ as: 'div' } & React.HTMLProps<HTMLDivElement>)
  | ({ as: 'p' } & React.HTMLProps<HTMLParagraphElement>)
  | ({ as: 'button' } & React.HTMLProps<HTMLButtonElement>);

export type BadgeProps = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  fullWidth?: boolean;
  disabled?: boolean;
} & TTag;

const badgesSizes: Record<string, any> = {
  xs: 'py-1.5 px-3 text-small-2 font-semibold leading-16 tracking-0',
  sm: 'py-1.5 px-3',
  lg: 'py-1.5 px-3',
};

const variants: Record<string, any> = {
  text: {
    primary:
      'flex items-center rounded-full bg-primary text-white hover:bg-primary-hover focus:bg-primary-dark focus:text-white transition duration-150',
    secondary:
      'flex items-center rounded-full bg-neutral-lightest-gray text-neutral-dark-gray hover:bg-neutral-light-gray focus:bg-neutral-light-gray focus:text-neutral-dark-gray transition duration-150',
    'no-color': 'flex items-center rounded-full transition duration-150',
    disabled:
      'flex items-center rounded-full bg-neutral-lightest-gray text-neutral-light-gray transition duration-150',
    success: 'flex items-center rounded-full transition duration-150',
    danger: 'flex items-center rounded-full transition duration-150',
  },
  outlined: {
    primary:
      'rounded-full border border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary-dark focus:text-white ',
    secondary:
      'rounded-full border border-neutral-gray text-neutral-gray hover:bg-neutral-gray hover:text-white focus:bg-neutral-dark-gray focus:text-white',
    'no-color': 'rounded-full',
    disabled: 'rounded-full',
    success:
      'rounded-full border border-success text-success hover:bg-success hover:text-white focus:bg-success focus:text-white',
    danger:
      'rounded-full border border-error text-error hover:bg-error hover:text-white focus:bg-error focus:text-white',
  },
  dot: {
    primary:
      'inline-flex items-center gap-x-2 whitespace-nowrap text-neutral-black text-subtitle2 font-semibold leading-18',
    secondary:
      'inline-flex items-center gap-x-2 whitespace-nowrap text-neutral-black text-subtitle2 font-semibold leading-18',
    disabled:
      'inline-flex items-center gap-x-2 whitespace-nowrap text-neutral-black text-subtitle2 font-semibold leading-18',
    success:
      'inline-flex items-center gap-x-2 whitespace-nowrap text-neutral-black text-subtitle2 font-semibold leading-18',
    danger:
      'inline-flex items-center gap-x-2 whitespace-nowrap text-neutral-black text-subtitle2 font-semibold leading-18',
    'no-color':
      'inline-flex items-center gap-x-2 whitespace-nowrap text-neutral-black text-subtitle2 font-semibold leading-18',
  },
  sticker: {
    primary:
      'py-2 px-4 bg-primary rounded-bl-2xl rounded-tr-2xl text-caption text-white font-bold leading-16 tracking-0.6',
    success:
      'py-2 px-4 bg-success rounded-bl-2xl rounded-tr-2xl text-caption text-white font-bold leading-16 tracking-0.6',
    danger:
      'py-2 px-4 bg-error-dark rounded-bl-2xl rounded-tr-2xl text-caption text-white font-bold leading-16 tracking-0.6',
    secondary:
      'py-2 px-4 bg-neutral-gray rounded-bl-2xl rounded-tr-2xl text-caption text-white font-bold leading-16 tracking-0.6',
    'no-color':
      'py-2 px-4 rounded-bl-2xl rounded-tr-2xl text-caption text-white font-bold leading-16 tracking-0.6',
    disabled:
      'py-2 px-4 rounded-bl-2xl rounded-tr-2xl text-caption text-white font-bold leading-16 tracking-0.6',
  },
  indicator: {
    primary:
      'absolute h-5 w-5 -top-1 -right-1 flex justify-center items-center bg-primary text-white rounded-lg text-small-3 font-bold leading-14',
    success:
      'absolute h-3 w-3 top-0 right-0 py-1 pr-1 bg-success text-white rounded-lg text-small-3 font-bold leading-14',
    secondary:
      'absolute h-3 w-3 top-0 -right-0  py-1 pr-1 bg-neutral-gray text-white rounded-lg text-small-3 font-bold leading-14',
    'no-color':
      'absolute h-3 w-3 top-0 right-0 py-1 pr-1 rounded-lg text-small-3 font-bold leading-14',
    danger:
      'absolute h-3 w-3 top-0 right-0 py-1 pr-1 bg-error text-white rounded-lg text-small-3 font-bold leading-14',
  },
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

  const classes = clsx(
    variants[variant][color],
    variant !== 'dot' && variant !== 'indicator' && badgesSizes[size],
    className
  );

  return (
    <Component
      ref={ref}
      className={classes}
      disabled={disabled}
      {...restProps}
      {...restPropsVariants}
    >
      {variant === 'dot' && (
        <span
          className={clsx(
            'inline-block h-1.5 w-1.5 rounded-full text-neutral-black text-subtitle2 font-bold leading-18',
            {
              'bg-success': color === 'success',
              'bg-primary': color === 'primary',
              'bg-neutral-dark-gray': color === 'secondary',
              'bg-error': color === 'danger',
            }
          )}
        />
      )}
      {children}
    </Component>
  );
});

export default React.memo(Badge);
