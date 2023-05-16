import React from 'react';

import { CMuSyUIThemeContext } from './theme.interface';

export const defaultContext: CMuSyUIThemeContext = {
  isDark: false,
  type: 'light',
};

const ThemeContext: React.Context<CMuSyUIThemeContext> =
  React.createContext<CMuSyUIThemeContext>(defaultContext);

export default ThemeContext;
