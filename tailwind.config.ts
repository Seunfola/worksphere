import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A3D45',  
        secondary: '#8A939A', 
        accent: '#F1F5F8',  
        background: '#FAFAFA',  
        dark: {
          900: '#1B1B1B',  
          700: '#2C2C2C',  
        },
        gray: {
          200: '#D9DEE2',  
          400: '#AAB1B8',  
        },
        'ws-midnight-blue': '#1C2541',  
        'ws-soft-white': '#F9FAFB',  
        'ws-muted-gold': '#D4AF37',  
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], 
        heading: ['Poppins', 'sans-serif'],  
        'ws-primary': ['Montserrat', 'sans-serif'],  
        'ws-secondary': ['Open Sans', 'sans-serif'],  
      },
      buttons: {
        'ws-primary': {
          'base': 'bg-primary text-ws-soft-white font-ws-primary px-6 py-3 rounded-md transition-colors duration-300',
          'hover': 'bg-ws-midnight-blue',
          'active': 'bg-ws-muted-gold',
        },
      },
      links: {
        'ws-primary': {
          'base': 'text-primary font-ws-secondary transition-colors duration-300',
          'hover': 'text-ws-muted-gold',
          'active': 'text-ws-midnight-blue',
        },
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }: PluginAPI) {  
      addComponents({
        '.btn-ws-primary': {
          '@apply bg-primary text-ws-soft-white font-ws-primary px-6 py-3 rounded-md transition-colors duration-300': {},
          '&:hover': {
            '@apply bg-ws-midnight-blue': {},
          },
          '&:active': {
            '@apply bg-ws-muted-gold': {},
          },
        },
        '.btn-ws-secondary': {
          '@apply bg-secondary hover:bg-gray-400 active:bg-ws-midnight-blue': {},
        },
        '.link-ws-primary': {
          '@apply text-primary font-ws-secondary transition-colors duration-300': {},
          '&:hover': {
            '@apply text-ws-muted-gold': {},
          },
          '&:active': {
            '@apply text-ws-midnight-blue': {},
          },
        },
      });
    },
  ],
};

export default config;
