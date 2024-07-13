/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["10px", "14.4px"],
      base: ["16px", "23px"],
      md: ["18px", "16.39px"],
      lg: ["18px", "20px"],
      xl: ["20px", "18px"],
      "2xl": ["20px", "28px"],
      "2.5xl": ["20px", "30px"],
      "3xl": ["24px", "33px"],
      "3.5xl": ["24px", "40px"],
      "4xl": ["28px", "40px"],
      "4.5xl": ["30px", "42px"],
      "5xl": ["40px", "57.61px"],
      "6xl": ["48px", "69.13px"],
    },
    extend: {
      colors: {
        fontColor: {
          black: "#000000",
          gray_level_1: "#525252",
          gray_level_2: "#595959",
          gray_level_3: "#999999",
          gray_level_4: "#9C9C9C",
          gray_level_5: "#ADADAD",
          white: "#FFFFFF",
          palePink: "#ED5353",
        },
        borderColor: {
          gray_light: "#C2C2C2",
          gray_lighter: "#CECECE",
        },
        bgColor: {
          palePink: "#ED5353",
          gray_level_1: "#858585",
          pink_light: "#FF6B6B",
          pink_lighter: "#FFEEEE",
          pink_dark: "#FF0000",
        },
      },
      boxShadow: {
        "5xl": "0px 4px 23px 2px #0000001A",
        "3xl": "0px 2px 35px 1px #0000001A",
        "2xl": "0px 0px 22px 4px #FF202040",
      },
      backgroundImage: {
        registerPage_bg: "url('/Images/bg_registerPage.svg')",
        jobAddPage_bg: "url('/Images/bg_jobAddPage.svg')",
      },
      width: {
        1512: "1512px",
      },
    },
  },
  plugins: [],
};
