// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');
import { colors } from './colors';

export const defaultCmusyTheme = {
  colors,
  height: { 23: '5,75rem' },
  minHeight: {
    11: '2.75rem',
  },
  fontFamily: {
    nunito: ['nunito', 'sans-serif', ...defaultTheme.fontFamily.sans],
  },
  fontSize: {
    h1: '5.125rem',
    h2: '2.5rem',
    h3: '2rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1.125rem',
    subtitle: '0.875rem',
    'subtitle-2': '0.8125rem',
    'body-1': '0.875rem',
    'body-2': '0.8125rem',
    'small-1': '0.8125rem',
    'small-2': '0.75rem',
    'small-3': '0.625rem',
    'button-1': '0.875rem',
    'button-2': '0.75rem',
    caption: '0.6875rem',
  },
  lineHeight: {
    14: '0.875rem',
    16: '1rem',
    18: '1.125rem',
    20: '1.25rem',
    24: '1.5rem',
    28: '1.75rem',
    32: '2rem',
    42: '2.625rem',
    56: '3.5rem',
    82: '5.125rem',
  },
  letterSpacing: {
    0.1: '0.00625em',
    0.2: '0.0125em',
    0.4: '0.025em',
    0.6: '0.0375em',
  },
  borderWidth: {
    1.5: '1.5px',
  },
  ringWidth: {
    1.5: '1.5px',
  },
  boxShadow: {
    modal: '0px 20px 56px rgba(43, 43, 67, 0.4)',
    card: '0px 12px 24px rgba(43, 43, 67, 0.16)',
    dropdown: '0px 4px 16px rgba(43, 43, 67, 0.12)',
    button: '0px 8px 20px rgba(78, 96, 255, 0.16)',
  },
};

export type CmusyTheme = Partial<typeof defaultCmusyTheme>;
