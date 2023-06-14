import React from 'react';

import Typography from '../typography';
import { avatar, AvatarVariants } from './avatar.theme';
import PropTypes from 'prop-types';

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
      <div
        ref={ref}
        className={avatar({ round, color, className, src })}
        {...props}
      >
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

Avatar.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'tertiary',
  ]),
  round: PropTypes.oneOf(['square', 'circle', 'rounded']),
};

Avatar.displayName = 'CMuSyUI.Avatar';

export default React.memo(Avatar);
