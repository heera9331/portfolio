import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "yellow": {
          100: '#fff3bf',
          200: '#ffec99',
          300: '#ffe066',
          400: '#ffd43b',
          500: '#fcc419',
          600: '#fab005',
          700: '#f59f00',
          800: '#f08c00',
          900: '#e67700'
        },
        "orange": {
          100:"#ffe8cc",
          200:"#ffd8a8",
          300:"#ffc078",
          400:"#ffa94d",
          500:"#ff922b",
          600:"#fd7e14",
          700:"#f76707",
          800:"#e8590c",
          900:"#d9480f"
        },
        "blue": {
          100: "#d3e0fb",
          200: "#a8c1f7",
          300: "#7ca1f3",
          400: "#5182ef",
          500: "#2563eb",
          600: "#2159d4",
          700: "#1a45a5",
          800: "#133276",
          900: "#0b1e46"
        }
      }
    },
  },
  plugins: [],
};
export default config;
