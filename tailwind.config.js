module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      tablet: { min: "640px" },
      laptop: { min: "1024px" },
      desktop: { min: "1280px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
