/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scrollLeft 30s linear infinite",
        shine: "shine 3s linear infinite", // Added shine animation
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shine: {
          "0%": {
            transform: "translateX(-100%) skewX(-15deg)",
          },
          "50%": {
            transform: "translateX(100%) skewX(-15deg)",
          },
          "100%": {
            transform: "translateX(100%) skewX(-15deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
