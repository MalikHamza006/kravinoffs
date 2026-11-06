/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030406',
          900: '#060709',
          850: '#0A0C11',
          800: '#10131B',
          700: '#171C27',
          600: '#212735',
        },
        chrome: {
          50: '#FFFFFF',
          100: '#F1F4F8',
          200: '#D5DCE6',
          300: '#ADB8C7',
          400: '#8694A6',
          500: '#5F6D81',
          600: '#434D5D',
          700: '#2C333E',
        },
        accent: {
          cyan: '#5ce1e6',
          whatsapp: '#25d366',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'metallic': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(220, 230, 245, 0.08)',
        'chrome-glow': '0 0 35px rgba(255, 255, 255, 0.15)',
        'whatsapp-glow': '0 10px 25px rgba(37, 211, 102, 0.35)',
        'glass-nav': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
