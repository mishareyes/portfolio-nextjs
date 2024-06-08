/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        nav: "linear-gradient(90deg, hsla(31deg, 97%, 72%, 0.8) 0%, hsla(252deg, 95%, 85%, 0.8) 43.23%, hsla(212deg, 96%, 78%, 0.8) 68.75%, hsla(171deg, 77%, 64%, 0.8) 100%)",
        home: "url(../public/layout/home.png)",
        aboutMe:
          "linear-gradient(180deg, hsla(177deg, 59%, 65%, 0.8) 0%, rgba(255, 255, 255, 0) 80%)",
        projects:
          "url(../public/layout/projects.png), linear-gradient(270deg, hsla(215deg, 76%, 73%, 0.8) 0%, rgba(255, 255, 255, 0) 80%)",
        designs:
          "url(../public/layout/designs.png), linear-gradient(90deg, hsla(243deg, 100%, 84%, 0.8) 0%, rgba(255, 255, 255, 0) 80%)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      background: colors.orange[100],
      current: "currentColor",
      ...colors,
    },
    fontFamily: {
      serif: ["Maragsa", "sans-serif"],
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
