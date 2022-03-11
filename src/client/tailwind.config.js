const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages', '**', '*.{js,ts,jsx,tsx}'),
    join(__dirname, 'app', '**', '*.{js,ts,jsx,tsx}'),
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  corePlugins: {
  }
};
