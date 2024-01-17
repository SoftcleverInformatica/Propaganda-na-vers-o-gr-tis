/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#959595",
        dark_indigo: "#312E81",
        light_indigo: "#5450C6",
        "gray-900": "#1E1E1E",
        "gray-700": "#2E2E2E",
        "gray-300": "#777777",
        "gray-100": "#BFBFBF",
      },
      borderColor: {
        gray: "#666666",
      },
      screens: {
        sm: "320px",
        "2sm": "390px",
        md: "768px",
        lg: "1024px",
        '2lg': "1280px",
        xl: "1440px",
        '2xl': "1920px",
      }
    },
  },
  plugins: [],
}

