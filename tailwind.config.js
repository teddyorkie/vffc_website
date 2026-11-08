/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind scans these files for class names. Classes inside JS strings must be written in full.
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#13304F', 700: '#1A3B5F', 600: '#2A4A6E', 500: '#3A5A7E' },
        gold: { DEFAULT: '#E0B054', 600: '#CF9C3C', 700: '#8A5A12' },
        paper: '#F7F5F0',
        ink: '#16202A',
        muted: '#4A5563',
        sand: '#E3DED3',
        mist: '#C9D3DE',
        fog: '#D5DDE6',
        leaf: '#2E6B3F',
        brown: { DEFAULT: '#6B3F14', 100: '#F4EADB' },
        sea: { DEFAULT: '#0F3A5C', 100: '#E1EBF4' }
      },
      fontFamily: {
        display: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif']
      },
      maxWidth: { site: '1240px' }
    }
  },
  plugins: []
};
