/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "metro-grey": "rgba(0, 0, 0, 0.45)",
      },
    },
    plugins: [],
  },
};
