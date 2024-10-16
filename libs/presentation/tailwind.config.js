const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind-workspace-preset')],
  content: [join(__dirname, './src/**/*!(*.stories|*.spec).{ts,tsx,html}')],
};
