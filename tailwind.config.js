/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A3D62',
        secondary: '#01A3A4',
        accent: '#1B9CFC',
        light: '#F8FAFC'
      },
      fontFamily: {
        body: ['Poppins', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(27, 156, 252, 0.25), transparent 60%)'
      }
    }
  },
  plugins: []
};
