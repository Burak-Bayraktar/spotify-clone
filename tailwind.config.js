module.exports = {
    mode: 'jit',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        'lg': '992px',
        '2xl': '1200px'
      },
      extend: {
        colors: {
          'green': {
            100: '#1ed760',
          },
        },
      },
    },
    plugins: [],
  }