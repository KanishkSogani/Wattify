/** @type {import('tailwindcss').Config} */
import { fonts } from "./src/fonts";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: fonts.jakarta,
        urbanist: fonts.urbanist,
        sora: fonts.sora,
      },
    },
  },
  plugins: [],
};
