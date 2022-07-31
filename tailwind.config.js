/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fluid": "repeat(auto-fit, minmax(28px, 1fr))",
        "titles-fluid": "repeat(auto-fit, minmax(130px, 1fr))",
      },
      gridTemplateRows: {

      }
    },
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1000px',
        '2xl': '1000px',
      },
    }
  },

  plugins: [],
}
