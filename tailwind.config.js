/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightpurp: "#E9DCFF",
      black: "#1E1E1E",
      darkblue: "#2B2D3D",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: { poppins: ["Poppins"] },
    },
  },
  plugins: [],
};
