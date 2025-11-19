/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors from design
        stone: {
          100: '#f5f5f4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          900: '#1c1917',
        },
        zinc: {
          100: '#f4f4f5',
          700: '#3f3f46',
        },
        neutral: {
          700: '#404040',
        },
        yellow: {
          600: '#ca8a04',
        },
        red: {
          300: '#fca5a5',
        },
        orange: {
          200: '#fed7aa',
        },
        rose: {
          100: '#ffe4e6',
        },
        amber: {
          100: '#fef3c7',
        },
        // Custom automation background color
        automationBg: 'rgba(227, 217, 201, 1)',
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['ISABELLA_GRAND_Italic', 'Georgia', 'serif'],
        timeless: ['Timeless', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

