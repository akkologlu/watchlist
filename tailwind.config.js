/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        "merriweather-sans": ["Merriweather Sans", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#f9f9f9",
        secondary: "#f74b03",
        tertiary: "#bc4b1e",
        quaternary: "#814b3a",
        pentarny: "#464b56",
      },
    },
  },
  plugins: [],
};
