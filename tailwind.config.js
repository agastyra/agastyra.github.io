/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-light": "#F3E8EE",
        "theme-teal": "#BACDB0",
        "theme-green": "#729B79",
        "theme-blue": "#475B63",
        "theme-dark": "#2E2C2F",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        kaushan: ["Kaushan Script", "sans-serif"],
      },
      fontSize: {
        "display-1": "72px",
        "display-2": "64px",
        "heading-1": "48px",
        "heading-2": "40px",
        "heading-3": "36px",
        "heading-4": "32px",
        "body-large": "24px",
        "body-medium": "20px",
        "body-small": "16px",
        caption: "13px",
      },
    },
  },
  plugins: [],
};
