/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F6F6F6",

          secondary: "#212121",

          accent: "#205295",

          neutral: "#0A2647",

          "base-100": "#212121",

          "base-200": "#F6F6F6",

          info: "#635985",

          success: "#443C68",

          warning: "#393053",

          error: "#18122B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
