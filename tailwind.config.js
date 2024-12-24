/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b58700",
        secondary: "#f7e6b4",
        base: "#4E4E4E",
      },
    },
  },
  plugins: [],
};
