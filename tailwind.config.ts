import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      fontFamily: {
        serif: ["Roboto Serif", "serif"],
        flex: ["Roboto Flex", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#0284c7",
          600: "#0369a1",
          700: "#075985",
        },
        accent: {
          teal: "#14b8a6",
          slate: "#1e293b",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, theme }) {
      addVariant("max-xs", `@media (max-width: ${theme("screens.xs")})`);
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
