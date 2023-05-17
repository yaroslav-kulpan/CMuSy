import clsx from 'clsx';
import React, { HTMLProps } from 'react';
import { Typography } from '../typography';

type Variant = 'square' | 'rounded' | 'circle';
type Color =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'tertiary';

export interface AvatarProps extends HTMLProps<HTMLDivElement> {
  variant?: Variant;
  color?: Color;
  src?: string;
  alt?: string;
}

const styles = {
  variants: {
    square: '',
    rounded: 'rounded-2xl',
    circle: 'rounded-full',
  },
  colors: {
    primary: 'bg-primary text-white',
    secondary: 'bg-neutral-gray text-white',
    danger: 'bg-error text-white',
    success: 'bg-success text-white',
    warning: 'bg-secondary text-white',
    tertiary: 'bg-tertiary text-white',
  },
};

export function Avatar({
  className,
  children,
  variant = 'circle',
  color = 'primary',
  src,
  alt,
}: AvatarProps) {
  const classes = clsx(
    'flex justify-center items-center h-11 w-11',
    styles.variants[variant],
    !src && styles.colors[color],
    className
  );
  return (
    <div className={classes}>
      {src ? (
        <img
          src={src}
          className={clsx('object-contain', styles.variants[variant])}
          alt={alt}
        />
      ) : (
        <Typography variant="small-1" as="a">
          {children}
        </Typography>
      )}
    </div>
  );
}

export default Avatar;
