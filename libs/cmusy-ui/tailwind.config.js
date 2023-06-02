const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('../../libs/cmusy-ui-plugin/src'),
  ],
};
