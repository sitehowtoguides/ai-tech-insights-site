/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,njk,md}",
    // Add other file types if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
