module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          primary: '#FEE89E',
        },
        blue: {
          light: '#EAF8F9',
          dark: '#2DD3E3',
        },
      },
      spacing: {
        sides: '10%',
        navbar: '10vh',
        firstsection: '100vh',
        section: '90vh',
        footer: '24vh',
        mobileFirstsection: '95vh',
      },
      fontFamily: {
        body: ['Poppins'],
      },
      fontSize: {
        title: '50px',
        subtitle: '24px',
        paragraph: '20px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
