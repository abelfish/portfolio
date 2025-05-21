/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        primary: '#130f31',
        secondary: '#e94536',
        tertiary: '#f4f0f1',
        dark: '#0b091e',
      },
    },

    plugins: [require('flowbite/plugin')],
  },
};
