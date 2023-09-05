/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Rubik': ['Rubik']
      },
      strokeWidth: {
        '2': '2px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
        },
        aa: {
          '0%': { transform: 'translateY(80%) translateX(-80%)', opacity: 0 },
          '100%': { transform: 'translateY(-700%) translateX(-150%)', opacity: 1 },
        },
        aar: {
          '0%': { transform: 'translateY(-700%) translateX(-150%)', opacity: 0 },
          '100%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
        },
        a1: {
          '0%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
          '100%': { transform: 'translateY(-300%) translateX(100%)', opacity: 1 },
        },
        a1r: {
          '0%': { transform: 'translateY(-300%) translateX(100%)', opacity: 1 },
          '100%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
        },a2: {
          '0%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
          '100%': { transform: 'translateY(-200%) translateX(-100%)', opacity: 1 },
        },
        a2r: {
          '0%': { transform: 'translateY(-200%) translateX(-100%)', opacity: 1 },
          '100%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
        },a3: {
          '0%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
          '100%': { transform: 'translateY(-250%) translateX(-250%)', opacity: 1 },
        },
        a3r: {
          '0%': { transform: 'translateY(-250%) translateX(-250%)', opacity: 1 },
          '100%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
        },a4: {
          '0%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
          '100%': { transform: 'translateY(-50%) translateX(-300%)', opacity: 1 },
        },
        a4r: {
          '0%': { transform: 'translateY(-50%) translateX(-300%)', opacity: 1 },
          '100%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
        },a5: {
          '0%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
          '100%': { transform: 'translateY(-50%) translateX(-50%)', opacity: 1 },
        },
        a5r: {
          '0%': { transform: 'translateY(-50%) translateX(-50%)', opacity: 1 },
          '100%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
        },a6: {
          '0%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
          '100%': { transform: 'translateY(-50%) translateX(100%)', opacity: 1 },
        },
        a6r: {
          '0%': { transform: 'translateY(-50%) translateX(100%)', opacity: 1 },
          '100%': { transform: 'translateY(80%) translateX(-60%)', opacity: 0 },
        },show: {
          '0%': { transform: 'translateX(-100%) ', opacity: 0, backdropBlur: '10px'},
          '100%': { transform: 'translateX(0%)', opacity: 1, backdropBlur: '0px' },
        },hide: {
          '0%': { transform: 'translateX(0%)', opacity: 1,backdropBlur: '0px' },
          '100%': { transform: 'translateX(-100%)', opacity: 0, backdropBlur: '10px' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.1s ',
        show: 'show 1s',
        hide: 'hide 1s',
        aa: 'aa 3s  normal forwards', // Adjust animation duration and name
        aar: 'aar 0.3s  normal forwards',
        a1: 'a1 3s  normal forwards', // Adjust animation duration and name
        a1r: 'a1r 0.3s  normal forwards',
        a2: 'a2 3s  normal forwards', // Adjust animation duration and name
        a2r: 'a2r 0.3s  normal forwards',
        a3: 'a3 3s  normal forwards', // Adjust animation duration and name
        a3r: 'a3r 0.3s  normal forwards',
        a4: 'a4 3s  normal forwards', // Adjust animation duration and name
        a4r: 'a4r 0.3s  normal forwards',
        a5: 'a5 3s  normal forwards', // Adjust animation duration and name
        a5r: 'a5r 0.3s  normal forwards',
        a6: 'a6 3s  normal forwards', // Adjust animation duration and name
        a6r: 'a6r 0.3s  normal forwards',
      },
    },
  },
  plugins: [],
}