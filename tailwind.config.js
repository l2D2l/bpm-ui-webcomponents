module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      body: ['OpenSans', 'sans-serif'],
      prelo: ['PreloSlab-book'],
      "prelo-bold": ['PreloSlab-bold']
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        yellow: {
          200: '#fff199',
          500: '#ffdd00',
        },
        blue: {
          200: '#9fa8be',
          300: '#6f7f9f',
          500: '#0f265c',
          600: '#cfd4de',
          900: '#2a4365'
        },
        griss: {
          100: '#dddddd',
          200: '#eeeeee',
          300: '#f5f5f5',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
