import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      background: '#FFEFD8',
      purple: '#b1adff',
      peach: '#f6bd88',
      blue: '#86b1ee',
      turquoise: '#71dad5',
    },
    fontFamily: {
      serif: ["Maragsa", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;
