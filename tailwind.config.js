module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {

      fontSize: {

        xxs: "0.625rem"
      } , 
      colors: {
        primary: "#fbc91b",
        secondary: "#F2F2F2",
        ever:'rgba(0, 0, 0, 0.82)'
      },
      margin: {
        13: "4rem",
      },


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
