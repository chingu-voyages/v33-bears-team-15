module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        neon: "#ccff00",
        primary: "#2EF7B9",
        darkFaded: "rgba(18, 24, 39, 0.8)",
      },
      backgroundImage: {
        hero: "linear-gradient(0deg, rgba(17,24,39,1) 0%, rgba(0,0,0,0.5536414394859506) 50%, rgba(17,24,39,1) 100%), url('/images/hero-cover.jpg')",
      },
      height: {
        hero: "550px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [],
};
