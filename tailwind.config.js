module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        neon: "#ccff00",
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 1%, rgba(0,212,255,0.020343171448266806) 66%), url('public/images/hero-cover.jpg')",
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
