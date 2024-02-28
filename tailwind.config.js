/** @type {import('tailwindcss').Config} */
export default {
  content: ["./../loginpage.board.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: "#495CEF",
        yellow: "#FFC328",
        "gray-dark": "#8D8D8D",
        "gray-med": "#D9D9D9",
        "gray-light": "#F3F3F3",


//SYSTEM COLOR PALETTE
        'kolor': {
          1: '#0B60B0',
          2: '#6B7280',
          3: '#E5E7EB',
        }
      },
    },
  },
  plugins: [],
};
