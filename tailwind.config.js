module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        neon: '#ccff00',
        primary: { 900: '#00A572', 800: '#0DCC8F', 700: '#0FDD9C', 600: '#2EF7B9' },
        darkFaded: 'rgba(17, 24, 39, 0.6)',
        lightFaded: 'rgba(249, 249, 249, 0.6)',
      },
      backgroundImage: {
        hero: "linear-gradient(0deg, rgba(17,24,39,1) 0%, rgba(0,0,0,0.5536414394859506) 50%, rgba(17,24,39,1) 100%), url('/images/hero-cover.jpg')",
        greenish: 'linear-gradient(13deg, rgba(10,83,47,1) 0%, rgba(4,32,20,1) 100%)',
        primaryBtn: 'linear-gradient(115deg,#4cddbd,#06f286)',
      },
      height: {
        hero: '650px',
        featured: '750px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
