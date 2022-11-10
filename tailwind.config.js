module.exports = {
    mode: 'jit',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '992px',
        '2xl': '1200px'
      },
      extend: {
        colors: {
          'black': {
            default: '#000000',
            100: '#191414',
          },
          'green': {
            100: '#1ed760',
            200: '#1fdf64',
            300: '#14833b',
            400: '#19e68d',
          },
          'blue': {
            100: '#2941ab',
            200: '#2e77d0',
          },
          'gray': {
            100: '#919496',
            200: '#efefef',
            300: '#222326',
            400: '#cccccc',
            500: '#212121',
            600 : '#f5f5f5',
          },
        },
        backgroundImage: {
          'main-page-tablet': "url('https://www-growth.scdn.co/static/home/bursts-tablet.svg')",
          'main-page-mobile': "url('https://www-growth.scdn.co/static/home/bursts-mobile.svg')",
          'main-page-desktop': "url('https://www-growth.scdn.co/static/home/bursts.svg')",
          'pp-column-1': "url('../../../../assets/img/premium-p_1.png')",
          'pp-column-2': "url('../../../../assets/img/premium-p_2.png')",
          'pp-column-3': "url('../../../../assets/img/premium-p_3.png')",
          'pp-column-4': "url('../../../../assets/img/premium-p_4.png')",
        },
        fontFamily: {
          'montserrat': ["Monstserrat", "sans-serif"]
        },
        backgroundPosition: {
          'mobile-page-position': 'center top 40%',
          'tablet-page-position': 'right 40% center',
          'desktop-page-position': '47% 7%',
        },
        gridTemplateColumns: {
          'pp-grid-cols': '114px auto',
        },
        gridTemplateRows: {
          'pp-grid-rows': '142px auto',
          '5-auto': 'repeat(4, minmax(0, 1fr))',
        }
      },
    },
    plugins: [],
  }