/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientBlue: "gradient-to-br from-purple-600 to-blue-500 hover:bg-gradientBlue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      }
    },
  },
  plugins: [],
}

