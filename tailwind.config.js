// filepath: tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        mediumWhite: "hsl(0, 0%, 98%)",
        blue: "hsl(207, 26%, 17%)",
        lightBlue: "hsl(209, 23%, 22%)",
        deepBlue: "hsl(200, 15%, 8%)",
        grey: "hsl(0, 0%, 52%)",
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
        md: "1440px",
        lg: "1920px",
        xl: "2560px",
      },
    },
  },
  plugins: [],
};