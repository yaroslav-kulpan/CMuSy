'use client';
import React, { PropsWithChildren } from 'react';
import { SSRProvider } from 'react-aria';

import ThemeContext, { defaultContext } from './theme.context';

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
