/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "food-image": "url('./src/assets/bgnogluten1.png')",
        "food-image2": "url('./src/assets/bgnogluten2.png')",
      },
    },
  },
  plugins: [],
};
