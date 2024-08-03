/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        jeans: "#4C63AB",
        sunday: "#CF504B",
      },
      fontFamily: {
        fern: ["fern"],
      },
    },
    screens: {
      sm: "320px",
    },
  },
  plugins: [],
};
