/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            'mont': ['Montserrat', 'sans-serif'],
            'hand': ['"Figma Hand"', 'cursive', 'Indie Flower'], // Falls back to Indie Flower if Figma Hand isn't loaded
        },
        colors: {
          'folder-yellow': '#E6D5A7', // Home tab
          'folder-blue': '#9BB7D9',   // About/Skills tab
          'folder-pink': '#D192B4',   // Projects tab
          'folder-purple': '#D9A7C7', // Contact tab
          'folder-green': '#B9D9A7',  // About text box
          'brutal-blue': '#5E81AC',   // The "HELLO" card
        },
        boxShadow: {
          'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
          'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        }
      },
    },
    plugins: [],
  }