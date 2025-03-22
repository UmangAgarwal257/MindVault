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
        slate: {
          100: "#f8fafc", // Lightest - Page background
          200: "#e2e8f0", // Light - Card backgrounds
          500: "#64748b", // Medium - Secondary text and icons
        },
      },
    },
  },
  plugins: [],
};
