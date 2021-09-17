module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Source Serif Pro', 'serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1370px',
      '3xl': '1536px',
      '4xl': '1660px',
    },
    extend: {
      colors: {
        neon: '#ccff00',
        primary: { 900: '#00A572', 800: '#0DCC8F', 700: '#0FDD9C', 600: '#2EF7B9' },
        darkFaded: 'rgba(17, 24, 39, 0.6)',
        darkGray: '#2f3744',
        lightFaded: 'rgba(249, 249, 249, 0.6)',
        lightGray: '#f7f8fc',
      },
      backgroundImage: {
        hero: "linear-gradient(0deg, rgba(17,24,39,1) 0%, rgba(0,0,0,0.5536414394859506) 50%, rgba(17,24,39,1) 100%), url('/images/hero-cover.jpg')",
        greenish: 'linear-gradient(13deg, rgba(10,83,47,1) 0%, rgba(4,32,20,1) 100%)',
        primaryBtn: 'linear-gradient(115deg,#4cddbd,#06f286)',
      },
      height: {
        hero: '650px',
        featured: '750px',
        featuredFirst: '1130px',
        card: '295px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
