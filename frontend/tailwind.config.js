import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "corporate", "dim", "nord", "bumblebee", "synthwave",
      "cyberpunk", "valentine", "halloween", "garden", "forest",
      "aqua", "lofi", "pastel", "fantasy", "wireframe",
      "black", "luxury", "dracula", "cmyk", "autumn",
      "business", "acid", "lemonade", "night", "coffee",
      "winter", "procyon", "retro", "sahara", "light",
      "dark", "cupcake", "emerald",
    ],
  },
}