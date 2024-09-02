import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "homebg": "url('../public/homebackground.png')",
      },
      boxShadow: {
        'custom-light-dark': '5px 5px 10px #C2C2C250',
        'custom-light-dark-with-white': '-5px -5px 10px #FFFFFF, 5px 5px 10px #C2C2C250',
        'custom-light-dark-box-image': '-3px -3px 7px #FFFFFF70, 1px 4px 4px #00000025, 5px 5px 10px #C2C2C250',
        'custom-light-dark-box': '-2px -2px 7px #FFFFFF40, 1px 3px 4px #00000018, 5px 5px 10px #C2C2C250',
      },
      transform: {
        'stretch-y': 'scaleY(2)',
      },
      screens: {
        'mobile': {'max': '679px'},
        'tablet': {'min': '680px', 'max': '1199px'},
        'desktop': {'min': '1200px','max': '1920px'},
      },
      fontVariationSettings: {
        customOpt12:"'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 12",
        customOpt16:"'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 16",
        customOpt40:"'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 40",
        customOpt16wght700:"'slnt' 0,'wdth' 100,'wght' 700,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 16",
        customOpt17Xopq90:"'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 90,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 17",
      },
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        '.font-variation-customOpt12': {
          fontVariationSettings: theme('fontVariationSettings.custom'),
        },
        '.font-variation-customOpt16': {
          fontVariationSettings: theme('fontVariationSettings.custom'),
        },
        '.font-variation-customOpt40': {
          fontVariationSettings: theme('fontVariationSettings.custom'),
        },
        '.font-variation-customOpt16wght700': {
          fontVariationSettings: theme('fontVariationSettings.custom'),
        },
        '.font-variation-customOpt17Xopq90': {
          fontVariationSettings: theme('fontVariationSettings.custom'),
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('daisyui'),
  ],
};
export default config;
