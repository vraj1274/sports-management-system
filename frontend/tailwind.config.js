/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#203d6b",
        primary: "#1670a8",
        secondary: "#daf0ff",
        purple: {
          50: "#faf5ff",
          600: "#9333ea",
          700: "#7e22ce",
        },
        blue: {
          50: "#eff6ff",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        green: {
          700: "#15803d",
        },
      },
      fontFamily: {
        poppins: ["poppins"],
        merriweather: ["merriweather"],
      },
    },
  },
  plugins: [],
};
