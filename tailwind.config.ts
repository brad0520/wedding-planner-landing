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
        rosegold: {
          DEFAULT: "#B76E79",
          light: "#D4A0A7",
          dark: "#9A5560",
        },
        cream: {
          DEFAULT: "#FFFDD0",
          dark: "#F5F0B0",
        },
        blush: {
          DEFAULT: "#F8E8E0",
          dark: "#F0D0C0",
        },
        dark: "#2D2D2D",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
