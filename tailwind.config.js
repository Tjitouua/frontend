/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0055E6', // Bright blue for buttons and links
          dark: '#0D2244',    // Dark blue for header/nav
          light: '#E6F0FF',   // Light blue for accents and backgrounds
        },
        secondary: {
          DEFAULT: '#F7F8FA', // Light gray page background
          card: '#FFFFFF',    // White for cards
          border: '#E5E7EB',  // Light gray for borders
          hover: '#F0F4F9',   // Light blue-gray for hover states
        },
        text: {
          DEFAULT: '#4A5568', // Default body text
          heading: '#1A202C', // Darker text for headings
          muted: '#718096',   // Lighter gray for secondary text
          link: '#0055E6',     // Link color, same as primary
        },
      },
      borderRadius: {
        sm: '0.25rem',   // 4px
        DEFAULT: '0.375rem',// 6px
        lg: '0.5rem',     // 8px
        xl: '9999px',      // Pill shape
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInOpacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceDot: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fillBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        'fade-in': 'fadeInOpacity 0.5s ease-in',
        'fade-out': 'fadeOut 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-dot': 'bounceDot 1s ease-in-out infinite',
        'fill-bar': 'fillBar 2.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}
