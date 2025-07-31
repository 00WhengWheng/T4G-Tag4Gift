/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './apps/frontends/webapp/src/**/*.{js,ts,jsx,tsx}',
    './libs/ui/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f59e0b',
          dark: '#b45309',
          light: '#fde68a',
        },
        primary: '#ec4899',
        secondary: '#a855f7',
        accent: '#f59e0b',
        muted: '#f3f4f6',
        background: '#f8fafc',
        foreground: '#1e293b',
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: { 
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#ec4899",
          secondary: "#a855f7",
          accent: "#f59e0b",
          neutral: "#1f2937",
          "base-100": "#0f172a",
          "base-content": "#f3f4f6",
        },
        bumblebee: {
          ...require("daisyui/src/theming/themes")["bumblebee"],
          primary: "#ec4899",
          secondary: "#a855f7",
          accent: "#f59e0b",
        }
      }
    ],
    darkTheme: "dark",
  },
};