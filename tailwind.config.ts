import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#4e8075",
        input: "#66baa8",
        ring: "#66baa8",
        background: "#c5fcee",
        foreground: "#4e8075",
        primary: {
          DEFAULT: "#007f93",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#66baa8",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#007f93",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#c5fcee",
          foreground: "#4e8075",
        },
        accent: {
          DEFAULT: "#4e8075",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#c5fcee",
          foreground: "#4e8075",
        },
        card: {
          DEFAULT: "#c5fcee",
          foreground: "#4e8075",
        },
        sidebar: {
          DEFAULT: "#c5fcee",
          foreground: "#4e8075",
          primary: "#007f93",
          "primary-foreground": "#ffffff",
          accent: "#66baa8",
          "accent-foreground": "#ffffff",
          border: "#4e8075",
          ring: "#66baa8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
