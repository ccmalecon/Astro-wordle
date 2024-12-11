/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'jura': ['Jura', 'sans-serif'],
      },
      colors: {
        'sky-theme': {
          light: '#E6F3FF',
          DEFAULT: '#B3D9FF',
          dark: '#80BFFF',
        },
        'teal-gray': {
          light: '#2D3748',
          DEFAULT: '#1A202C',
          dark: '#171923',
        }
      },
      animation: {
        'bounce-in': 'bounce-in 0.5s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'flip': 'flip 0.6s ease-in-out',
      },
      keyframes: {
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        'flip': {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateX(360deg)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}