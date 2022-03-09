const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fredoka', ...defaultTheme.fontFamily.serif],
        'serif': ['Cardo', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
