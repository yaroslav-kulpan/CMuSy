import React from 'react';
import { I18nProvider, SSRProvider } from 'react-aria';

import ThemeContext, { defaultContext } from './theme.context';

export type ThemeProviderProps = {
  theme?: any;
};

export const ThemeProvider: React.FC<
  React.PropsWithChildren<ThemeProviderProps>
> = ({ children }) => {
  return (
    <SSRProvider>
      <I18nProvider>
        <ThemeContext.Provider value={defaultContext}>
          {children}
        </ThemeContext.Provider>
      </I18nProvider>
    </SSRProvider>
  );
};
