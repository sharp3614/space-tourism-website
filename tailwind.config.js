/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'destination-desktop': "url('./assets/destination/background-destination-desktop.jpg')",
        'destination-mobile': "url('./assets/destination/background-destination-mobile.jpg')",
        'crew-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
      },
      fontFamily: {
        barlow: 'Barlow',
        barlowCondensed: 'Barlow Condensed',
        bellefair: 'Bellefair'
      }
    },
  },
  plugins: [],
}

