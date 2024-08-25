/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bgsecc1: "url('/public/svg/bg_secc1.svg')",
        ico_manbg: "url('/public/svg/icon_man_bg.svg')",
        bgmen: "url('/public/svg/bg_business_men.svg')",
        bgsecc3: "url('/public/svg/bg_secc3.svg')",
        bgsecc5: "url('/public/svg/bg_secc5.svg')",
      },
      colors: {
        transparent: "transparent",
        green3: "#114040",
        green2: "#2F9564",
        green1: "#2E8C57",
        green0: "#E9F2E5",
        bone: "#F2F2F0",
        yelow: "#F0B43A",
        orange: "#F27B50",

        bg1_indx: "#E9F2E5",
        bg245_indx: "#F6F5EF",
        bg3_indx: "#F2EDE5",

        tittle: "#0F393B",
      },
      fontFamily: {
        lexend: ["Lexend"],
      },
    },
  },
  plugins: [],
};
