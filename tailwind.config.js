/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-color-brand": "#3294F8",
        "app-color-base-title": "#E7EDF4",
        "app-color-base-subtitle": "#C4D4E3",
        "app-color-base-text": "#AFC2D4",
        "app-color-base-span": "#7B96B2",
        "app-color-base-label": "#3A536B",
        "app-color-base-border": "#1C2F41",
        "app-color-base-post": "#112131",
        "app-color-base-profile": "#0B1B2B",
        "app-color-base-background": "#071422",
        "app-color-base-input": "#040F1A",
      }
    },
  },
  plugins: [],
}

