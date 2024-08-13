/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        twitterWhite: "#e7e9ea",
        twitterBlue: "#308cd8",
        twitterBorder: "#2f3336",
        twitterLighGray: "#71767b",
        twitterDarkGray: "#17181c"
      }
    },
  },
  plugins: [],
}

