/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
      },
      colors: {
        pry: {
          100: "hsl(243, 87%, 12%)",
          200: "hsl(238, 22%, 44%)",
        },
        acc: {
          100: "hsl(224, 93%, 58%)",
          200: "hsl(170, 45%, 43%)",
        },
        neu: {
          100: "hsl(240, 75%, 98%)",
          200: "hsl(0, 0%, 75%)",
        },
      },
    },
  },
  plugins: [],
};
