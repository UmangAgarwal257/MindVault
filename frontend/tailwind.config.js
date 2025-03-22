/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#ebf4ff",
          500: " #6366f1",
          600: "#4f46e5",
        },
      },
    },
  },
  plugins: [],
};
