import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Open Sans",
      secondary: "Lato",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#212353",
        secondary: "#4B5D68",
        accent: {
          primary: "#9C69E2",
          primary_hover: "#9059DB",
          secondary: "#F063B8",
          secondary_hover: "#E350A9",
          tertiary: "#68C9BA",
        },
      },
    },
  },
  plugins: [],
};
export default config
