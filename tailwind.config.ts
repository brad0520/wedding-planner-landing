import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFF0",
        champagne: {
          DEFAULT: "#C9A96E",
          light: "#D4BC8E",
          dark: "#B08D4F",
        },
        blush: {
          DEFAULT: "#F5E6E0",
          light: "#FDF2EF",
          dark: "#EBCFC5",
        },
        warm: {
          50: "#FBF9F7",
          100: "#F5F0EB",
          200: "#EDE4DB",
          300: "#DFD0C1",
          400: "#C4AA8D",
          500: "#A68A6B",
          600: "#8B7052",
          700: "#6E583F",
          800: "#4A3B2A",
          900: "#2C2318",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-elegant":
          "linear-gradient(135deg, #FFFFF0 0%, #F5E6E0 50%, #FFFFF0 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
