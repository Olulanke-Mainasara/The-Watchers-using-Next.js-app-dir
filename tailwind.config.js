/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xtraSmall: { min: "0px" },
      // => @media (min-width: 0px) { ... }

      iphone5: { min: "320px" },
      // => @media (min-width: 320px) { ... }

      allT: { max: "321px" },
      // => @media (max-width: 321px) { ... }

      xs: { min: "322px" },
      // => @media (min-width: 322px) { ... }

      sm: { min: "390px" },
      // => @media (min-width: 390px) { ... }

      allEM: { min: "322px", max: "767px" },
      // => @media (min-width: 322px and max-width: 767px) { ... }

      allEMT: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      allM: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      allLM: { min: "768px", max: "1309px" },
      // => @media (min-width: 1024px and max-width: 1309px) { ... }

      allIL: { max: "1309px" },
      // => @media (max-width: 1309px) { ... }

      xl: { min: "1310px" },
      // => @media (min-width: 1310px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }

      ultraWide: { min: "2001px" },
      // => @media (min-width: 2001px) { ... }
    },
    extend: {
      height: {
        extraHeight: "60vh",
      },
      lineHeight: {
        newsC: "100px",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
