/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffd700",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "dev-green": "#00ff41",
        "dev-dark": "#0a0e27",
        "software-gold": "#ffd700",
        "software-dark": "#000000",
        "sales-silver": "#c0c0c0",
        "sales-dark": "#000000",
        "sales-gold": "#ffd700",
        "sales-red": "#dc2626",
        "sales-luxury": "#1a1a2e",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
      },
    },
  },
  plugins: [],
};