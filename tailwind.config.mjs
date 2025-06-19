/** @type {import('tailwindcss').Config} */
import lineClamp from "@tailwindcss/line-clamp";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite", // Adjust duration as needed
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [lineClamp],
};
