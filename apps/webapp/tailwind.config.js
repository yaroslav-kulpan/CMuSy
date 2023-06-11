const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const theme = require('tailwindcss/defaultTheme');

const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require(join(process.cwd(), 'tailwindcss-workspace.preset.js'))],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', ...theme.fontFamily.sans],
      },
    },
  },
};
