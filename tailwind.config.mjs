/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content:["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'vortex': "url('/public/background.png')"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}