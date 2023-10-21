import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "280px",
      laptop: "1280px",
      desktop: "1440px",
      standard: "1800px",
    },
    extend: {
      colors: {
        "dark-gray": "var(--dark-gray)",
        "very-dark-gray": "var(--very-dark-gray)",
      },
    },
  },
  plugins: [],
};
export default config;
