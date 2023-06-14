import React from 'react';
import { I18nProvider, SSRProvider } from 'react-aria';

import ThemeContext, { defaultContext } from './theme.context';

export type ThemeProviderProps = {
  theme?: any;
  locale?: string;
};

export const ThemeProvider: React.FC<
  React.PropsWithChildren<ThemeProviderProps>
> = ({ children, locale }) => {
  return (
    <SSRProvider>
      <I18nProvider locale={locale}>
        <ThemeContext.Provider value={defaultContext}>
          {children}
        </ThemeContext.Provider>
      </I18nProvider>
    </SSRProvider>
  );
};
