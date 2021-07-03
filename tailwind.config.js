module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
