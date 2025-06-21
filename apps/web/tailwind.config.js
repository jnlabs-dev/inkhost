/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}", // correct path for your setup
    "./pages/**/*.{ts,tsx}", // optional if you later add pages
    "./components/**/*.{ts,tsx}" // optional if you add components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

