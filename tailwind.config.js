/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          dark: '#0A0E1A',
          text: '#E8EDF2',
          muted: '#94A3B8',
          card: '#0D1424',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
        },
        // Home: Cyan/Teal (#00D9FF / #4AE8E0)
        accentHome: {
          primary: '#00D9FF',
          secondary: '#4AE8E0',
          glow: 'rgba(0, 217, 255, 0.15)',
        },
        // Services/Systems: Muted Teal-Green (#2ED9A8 / #5CEFC0)
        accentServices: {
          primary: '#2ED9A8',
          secondary: '#5CEFC0',
          glow: 'rgba(46, 217, 168, 0.15)',
        },
        // About: Soft Violet-Blue (#6C7FF0 / #8FA0FF)
        accentAbout: {
          primary: '#6C7FF0',
          secondary: '#8FA0FF',
          glow: 'rgba(108, 127, 240, 0.15)',
        },
        // Contact: Soft Cyan-Pink (#4FC3F7 / #F78FC0)
        accentContact: {
          primary: '#4FC3F7',
          secondary: '#F78FC0',
          glow: 'rgba(79, 195, 247, 0.15)',
        },
        midnight: {
          950: '#070B14',
          900: '#0A0E1A',
          850: '#0D1322',
          800: '#11182B',
          750: '#162038',
          700: '#1D2A4A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      animation: {
        'scan-line': 'scan 6s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'radar-spin': 'radarSpin 12s linear infinite',
        'hud-float': 'hudFloat 5s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.04)' },
        },
        radarSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        hudFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
