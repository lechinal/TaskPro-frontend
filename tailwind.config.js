 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      components: {
        '.common-input-phone': {
          '@apply font-normal': {},
        },
        '.common-input-tablet': {
          '@apply font-normal text-sm py-2 pl-3 pr-14 rounded-8 w-full bg-transparent border border-white focus:outline-none focus:border-white': {},
        },
        '.common-input-destk': {
          '@apply font-normal text-sm py-2 pl-3 pr-14 rounded-8 w-full bg-transparent border border-white focus:outline-none focus:border-white': {},
        },
      },
    },
  },
  plugins: [],
}

