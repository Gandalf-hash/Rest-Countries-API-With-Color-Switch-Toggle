// filepath: tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "hsl(209, 23%, 22%)",
        blue: "hsl(207, 26%, 17%)",
        darkBlue: "hsl(200, 15%, 8%)",
        gray: "hsl(0, 0%, 52%)",
        lightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        homePageItems: "14px",
        detailPage: "16px",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      fontWeight: {
        small: "300",
        medium: "500",
        large: "700",
      },
      screen: {
        sm: "375px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};