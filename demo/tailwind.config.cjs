const { createThemes } = require('../dist/lib');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./**/*.{js,ts,jsx,tsx,html}'],

   plugins: [
      createThemes({
         t1: {
            c1: 'rgb(255 0 0)',
         },
         t2: {
            c1: 'rgb(0 0 255 / 0.5)',
         },
         t3: {
            c1: 'purple',
         },
      }),
   ],
};