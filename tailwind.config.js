module.exports = {
    mode: 'jit',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        'md': '480px',
        'lg': '992px',
        '2xl': '1200px'
      },
      extend: {
        colors: {
          'green': {
            100: '#1ed760',
          },
          'blue': {
            100: '#2941ab',
          }
        },
        backgroundImage: {
          'main-page-tablet': "url('https://www-growth.scdn.co/static/home/bursts-tablet.svg')",
          'main-page-mobile': "url('https://www-growth.scdn.co/static/home/bursts-mobile.svg')",
          'main-page-desktop': "url('https://www-growth.scdn.co/static/home/bursts.svg')",
        },
        fontFamily: {
          'montserrat': ["Monstserrat", "sans-serif"]
        },
        backgroundPosition: {
          'mobile-page-position': 'center top 40%',
          'tablet-page-position': 'right 40% center',
          'desktop-page-position': '47% 7%',
        }
      },
    },
    plugins: [],
  }