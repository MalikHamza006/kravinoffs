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
        olive: {
          950: '#0c1305',
          900: '#152109',
          850: '#1c2d0c',
          800: '#273c11',
          700: '#385418',
          600: '#4e7321',
          500: '#69952c',
          400: '#86ba38',
          300: '#a5de47',
          200: '#c5f26d',
          100: '#e3fbb0',
        },
        electric: {
          lime: '#D4FF00',
          time: '#CCFF00',
          neon: '#B8FF00',
          glow: 'rgba(204, 255, 0, 0.45)',
          muted: '#8FB339',
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
        'olive-glow': '0 0 40px rgba(134, 186, 56, 0.25)',
        'electric-glow': '0 0 45px rgba(204, 255, 0, 0.4)',
        'stair-step': '0 15px 35px -5px rgba(0, 0, 0, 0.85), 0 0 25px rgba(165, 222, 71, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
