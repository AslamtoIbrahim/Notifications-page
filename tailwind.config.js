/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-red': "hsl(1, 90%, 64%)",
        'primary-blue': "hsl(219, 85%, 26%)",
        'v-l-g-blue': "hsl(210, 60%, 98%)",
        'l-g-blue-1': "hsl(211, 68%, 94%)",
        'l-g-blue-2': "hsl(205, 33%, 90%)",
        'g-blue': "hsl(219, 14%, 63%)",
        'd-g-blue': "hsl(219, 12%, 42%)",
        'v-d-blue': "hsl(224, 21%, 14%)",
      },
      fontFamily: {
        'roboto': ['Roboto', 'serif'],
        'jakarta': ['PlusJakartaSansVar'],
        'jakartaya': ['PlusJakartaSans'],
      },
      screens: {
        'vrsm': {
          'max': '435px'
        },
      },
    },
  },
  plugins: [],
}

