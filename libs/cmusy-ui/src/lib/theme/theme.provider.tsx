import React from 'react';
import { SSRProvider } from 'react-aria';

import ThemeContext, { defaultContext } from './theme.context';

export type ThemeProviderProps = {
  theme?: any;
};

export const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>> = ({
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
