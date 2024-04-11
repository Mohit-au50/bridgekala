import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d175b6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        leftToRight: {
          "0% 100%": {
            top: "0",
            left: "0%",
          },
          "50%": {
            top: "0%",
            left: "60%",
          },
        },
        rightToLeft: {
          "0% 100%": {
            bottom: "0%",
            right: "0%",
          },
          "50%": {
            bottom: "0%",
            right: "70%",
          },
        },
      },

      animation: {
        left: "leftToRight 4s linear infinite",
        right: "rightToLeft 4s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
