import React from 'react';

import { Typography } from '../typography';

type HelperTextProps = {
  error: boolean;
};
export function HelperText({
  children,
  error,
}: React.PropsWithChildren<HelperTextProps>) {
  return error ? (
    <Typography variant="small-2" className="text-error">
      {children}
    </Typography>
  ) : null;
}
