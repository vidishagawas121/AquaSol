/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#f0f7ff',
            100: '#e0effe',
            200: '#bae0fd',
            300: '#7cc5fb',
            400: '#38a5f6',
            500: '#0e86e7',
            600: '#00529B', // Aqua-Sol Core Blue
            700: '#064983',
            800: '#0a3d6c',
            900: '#0e345b',
            950: '#071f3a',
          },
          amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#e96a00', // Aqua-Sol Solar Orange
            700: '#c2410c',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#22c55e',
            600: '#2e7d32', // Aqua-Sol Eco Green
            700: '#15803d',
            800: '#166534',
          },
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
