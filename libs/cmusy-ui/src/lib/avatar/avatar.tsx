import React from 'react';

import { Typography } from '../typography';
import { avatar, AvatarVariants } from './avatar.theme';

export type AvatarProps = React.ComponentPropsWithoutRef<'div'> &
  AvatarVariants & {
    src?: string;
    alt?: string;
  };

export function Avatar({
  className,
  children,
  round = 'circle',
  color = 'primary',
  src,
  alt,
}: AvatarProps) {
  return (
    <div className={avatar({ round, color, className })}>
      {src ? (
        <img src={src} className={'object-contain'} alt={alt} />
      ) : (
        <Typography variant="small-1" as="a">
          {children}
        </Typography>
      )}
    </div>
  );
}

export default Avatar;
