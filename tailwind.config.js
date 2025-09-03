/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // si tu utilises le nouveau dossier app/
    "./pages/**/*.{js,ts,jsx,tsx}", // pour les pages classiques
    "./components/**/*.{js,ts,jsx,tsx}", // tes composants réutilisables
  ],
  darkMode: 'class', // mode sombre basé sur classe
  theme: {
    extend: {},
  },
  plugins: [],
}
