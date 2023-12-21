import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      scale: {
        "92": ".92",
        "95": ".95",
      },
      animation: {
        "slide-in": "slideIn 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],

  // Add the variants configuration
  variants: {
    extend: {
      // Enable scaling on the active state
      scale: ["active"],
    },
  },
};

export default config;
