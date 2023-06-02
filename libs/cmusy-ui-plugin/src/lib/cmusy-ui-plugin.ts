import { CmusyTheme, defaultCmusyTheme } from './default-theme';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cmusyUiPlugin = require('tailwindcss/plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { deepMerge } from './deep-merge';

module.exports = cmusyUiPlugin.withOptions(
  (options: CmusyTheme = {}) => {
    return function ({ addBase, theme }) {
      theme('');
    };
  },
  function (options: CmusyTheme = {}) {
    return {
      theme: {
        extend: deepMerge(options, defaultCmusyTheme),
      },
    };
  }
);
