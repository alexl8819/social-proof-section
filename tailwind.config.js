/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif']
      },
      backgroundImage: {
        'mobile-top-pattern': 'url("./images/bg-pattern-top-mobile.svg")',
        'mobile-bottom-pattern': 'url("./images/bg-pattern-bottom-mobile.svg")',
        'desktop-top-pattern': 'url("./images/bg-pattern-top-desktop.svg")',
        'desktop-bottom-pattern': 'url("./images/bg-pattern-bottom-desktop.svg")'
      },
      colors: {
        'dark-magenta': 'hsl(300, 43%, 22%)',
        'dark-greyish-magenta': 'hsl(303, 10%, 53%)',
        'misty-white': '#f7f2f8',
        'soft-pink': 'hsl(333, 80%, 67%)'
      }
    },
  },
  plugins: [],
}
