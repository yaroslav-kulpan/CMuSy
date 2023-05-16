import React, { PropsWithChildren } from 'react';

import ThemeContext, { defaultContext } from './theme.context';
import { SSRProvider } from 'react-aria';

export type ThemeProviderProps = {
  theme?: any;
};

export const ThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
}) => {
  return (
    <SSRProvider>
      <ThemeContext.Provider value={defaultContext}>
        {children}
      </ThemeContext.Provider>
    </SSRProvider>
  );
};
