const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages', '**', '*.{js,ts,jsx,tsx}'),
    join(__dirname, 'app', '**', '*.{js,ts,jsx,tsx}'),
  ],
  darkMode: 'class',
  theme: {},
  plugins: [
  ],
}
