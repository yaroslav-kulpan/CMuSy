const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');
const { withTV } = require('tailwind-variants/transformer');
const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4E60FF',
          lightest: '#F8F9FF',
          light: '#F3F4FF',
          30: '#CACFFF',
          hover: '#697BFF',
          dark: '#3A4CEB',
        },
        neutral: {
          black: '#2B2B43',
          gray: {
            DEFAULT: '#83859C',
            dark: '#545563',
            light: '#C7C8D2',
            lightest: '#EDEEF2',
          },
          white: '#FFFFFF',
          background: '#F7F7F9',
        },
        error: {
          DEFAULT: '#FF5C60',
          lightest: '#FFF6F6',
          light: '#FFEAEA',
          hover: '#FF6B6F',
          dark: '#E13E42',
        },
        success: {
          DEFAULT: '#1ABF70',
          light: '#E8F9F1',
        },
        secondary: {
          DEFAULT: '#FD6D22',
          light: '#FFF3ED',
        },
        tertiary: {
          DEFAULT: '#8C3EEE',
          light: '#F6F0FE',
        },
      },
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
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
});
