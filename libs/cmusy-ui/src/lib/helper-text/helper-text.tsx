import React, { ComponentPropsWithoutRef } from 'react';

import Typography from '../typography/typography';

type HelperTextProps = ComponentPropsWithoutRef<'span'> & {
  error?: boolean;
};
export function HelperText({
  children,
  ...restProps
}: React.PropsWithChildren<HelperTextProps>) {
  return (
    <Typography
      as="span"
      variant="small-2"
      {...restProps}
    >
      {children}
    </Typography>
  );
}
