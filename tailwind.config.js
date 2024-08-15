/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",

      brand: {
        25: "#F9F5FF",
        50: "#F9F5FF",
        100: "#F4EBFF",
        300: "#D6BBFB",
        500: "#9E77ED",
        600: "#7F56D9",
        700: "#6941C6",
      },

      warning: {
        50: "#FFFAEB",
        400: "#FDB022",
        700: "#B54708",
      },

      error: {
        50: "#FEF3F2",
        100: "#FEE4E2",
        200: "#FECDCA",
        300: "#FDA29B",
        400: "#F97066",
        500: "#F04438",
        600: "#D92D20",
        700: "#B42318",
      },

      success: {
        50: "#ECFDF3",
        100: "#D1FADF",
        200: "#A6F4C5",
        400: "#32D583",
        500: "#12B76A",
        600: "#039855",
        700: "#027A48",
      },

      blue: {
        50: "#EFF8FF",
        700: "#175CD3",
      },

      "blue-light": {
        100: "#E0F2FE",
        600: "#0086C9",
      },

      gray: {
        25: "#FCFCFD",
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#E4E7EC",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#98A2B3",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
      },

      "blue-gray": {
        100: "#EAECF5",
        600: "#3E4784",
        900: "#101323",
      },

      orange: {
        50: "#FFF6ED",
        100: "#FFEAD5",
        600: "#EC4A0A",
        700: "#C4320A",
      },

      pink: {
        50: "#FDF2FA",
        100: "#FCE7F6",
        600: "#DD2590",
        700: "#C11574",
      },

      purple: {
        500: "#7A5AF8",
        700: "#5925DC",
      },
    },
    fontSize: {
      xs: ".75em",
      sm: ".875em",
      md: "1em",
      lg: "1.125em",

      "display-xs": "1.5em",
      "display-sm": "1.875em",
    },
    extend: {},
  },
  plugins: [],
};
