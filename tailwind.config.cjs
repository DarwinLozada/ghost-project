/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel']
      },
      boxShadow: {
        album: '0px 3px 20px 8px rgba(0, 0, 0, 0.5)'
      }
    }
  },
  plugins: []
}
