import React from 'react';

import Typography from '../typography';
import { avatar, AvatarVariants } from './avatar.theme';

export type AvatarProps = React.ComponentPropsWithoutRef<'div'> &
  AvatarVariants & {
    src?: string;
    alt?: string;
  };

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      children,
      round = 'circle',
      color = 'primary',
      src,
      alt,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={avatar({ round, color, className })} {...props}>
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
);

export default React.memo(Avatar);
