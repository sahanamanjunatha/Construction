/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#101735',
          light: '#1A234A',
        },
        orange: {
          primary: '#FF5A16',
          hover: '#E04808',
        },
        bgLight: '#F7F7FB',
        textDark: '#11152F',
        textLight: '#65708A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'hero-panel': '0 40px 40px 0',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(16, 23, 53, 0.06)',
        'orange': '0 8px 25px rgba(255, 90, 22, 0.35)',
        'hero': '20px 0 40px rgba(16, 23, 53, 0.2)',
      }
    },
  },
  plugins: [],
}
