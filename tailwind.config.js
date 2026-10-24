/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          ink: "#0B0F19",
          card: "#131B2E",
          card2: "#1E293B",
        },
        bronze: {
          DEFAULT: "#C5A880",
          warm: "#D97706",
        },
        snow: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
