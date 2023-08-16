/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //use it for backgrounds
        'primaryBackground': '#030015',
        //use this white for main text
        'secondaryText': '#F0F0F0',
        //use this white for secondary text
        'tertiaryTextLight': '#DBDBDB',
        //use this white for borders
        'quaternaryTextLightest': '#373737',
        //accent color
        'quinaryAccent': '#725BFF',
        //accent colour hover
        'senaryHover': '#6551DC',
        //hover for background
        'septenaryHover2': '#151039',
      },

    },
  },
  plugins: [],
}

