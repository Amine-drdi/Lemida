/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#114d5b",
        secondary: "#e2f1f5",
        tertiary: "#e8e8e8",
        header_text_color: "#000",
        header_background_color: "#FAFAFA",
        nav_color: "#000",
        nav_focus_color: "#114d5b",
        footer_text_color: "#fff",
        footer_text_hover_color: "#fff",
        footer_background_color: "#114d5b",
        main_color: "#114d5b",
        secondary_color: "",
        bgFrom: "#4C0873",
        bgTo: "#4C0873",
        HoverBgTo: "#00474F",
      },
      padding: {
        desktop_padding: "90px",
        laptop_padding: "60px",
        tablet_padding: "30px",
        mobile_padding: "16px",
      },
      boxShadow: {
        cardButtonShadow: "0 3.06px 0px #DADADA",
        headerShadow: "0 2px 8px #F0F1F2",
        tableOfContentShadow: "0 4px 0px #ECECEC",
        aboutBtnShadow: "0 3px 0px #DADADA",
      },
      animation: {
        mover: "mover 15s infinite  linear",
        show: "show 3s  linear",
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
      keyframes: {
        mover: {
          "0%": { transform: "translateX(1280px)" },
          "100%": { transform: "translateX(-1280px)" },
        },
        show: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 100 },
        },

        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".bg-squares": {
          "background-image":
            "linear-gradient(to right, #fff 1px, transparent 1px)",
          "background-size": "20px 20px",
        },
      });
    }),
  ],
};
