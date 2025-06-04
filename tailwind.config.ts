import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      forrest: "#002925",
      purple: "#B09DFC",
      darkpurple: "#8A77D5",
      aqua: "#01BDB2",
      darkgreen:"#013B36",
      lightgrey: "#F0EEEB",
    },
    fontFamily: {
      clash: ['ClashDisplay', 'sans-serif'],
      artford: ['artford', 'serif'],
      alfabet: ['Alfabet', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
