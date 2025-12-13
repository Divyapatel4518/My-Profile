
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C7A76C",
          dark: "#A68A55",
        },
        grey: {
          light: "#F5F5F3",
          dark: "#2b2b2b",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

