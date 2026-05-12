import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enables dark mode based on user preference toggling via class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ocean: {
          50: '#eef2f6',
          100: '#d9e2eb',
          200: '#b4c7d9',
          300: '#83a4c1',
          400: '#5280a5',
          500: '#32648c',
          600: '#234f73',
          700: '#1c3e5c',
          800: '#18314a',
          900: '#142a40',
        },
        gold: {
          300: '#f3d373',
          400: '#ebd158',
          500: '#d4af37', // metallic gold
          600: '#b5952f',
          700: '#8c7324',
        }
      },
    },
  },
  plugins: [],
};
export default config;
