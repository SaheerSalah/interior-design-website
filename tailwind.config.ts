import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'xs': { 'min': '250px', 'max': '410px' },
      },
      colors: {},
      container: {
        center:true,
        padding:{
          DEFAULT: "1rem",
          // "xs":"0.5rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        }
      },

    },
  },
  plugins: [],
};
export default config;
