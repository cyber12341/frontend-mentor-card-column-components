/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue', './app/**/*.{js,vue,ts}', './ui/**/*.{js,vue,ts}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        bright: {
          orange: 'hsl(31, 77%, 52%)',
        },
        cyan: {
          dark: 'hsl(184, 100%, 22%)',
          'very-dark': 'hsl(179, 100%, 13%)',
        },
      },
      neutral: {
        white: {
          transparent: 'hsla(0, 0%, 100%, 0.75)',
        },
        gray: {
          'very-light': 'hsl(0, 0%, 95%)',
        },
      },
      transparent: 'transparent',
    },
  },
  plugins: [],
};
