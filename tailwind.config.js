/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
        dela_gothic_one: ["Dela Gothic One"],
      },
      colors: {
        main_blue: "#004A98",
        second_blue: "#0C0C70",
      },
    },
  },
  plugins: [],
};
