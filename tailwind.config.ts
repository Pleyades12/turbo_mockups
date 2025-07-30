/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#fdfaf6", // Light cream background
        foreground: "#443e39", // Dark brown text
        primary: {
          DEFAULT: "#a18057", // Richer brown/gold accent
          foreground: "#ffffff", // White text on primary
        },
        secondary: {
          DEFAULT: "#f5f0ea", // Slightly darker cream for sections
          foreground: "#443e39",
        },
        muted: {
          DEFAULT: "#e7e5e4",
          foreground: "#78716c", // Muted brown/grey text
        },
        accent: {
          DEFAULT: "#f5f0ea",
          foreground: "#443e39",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#ffffff", // White cards
          foreground: "#443e39",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "calc(1rem - 4px)",
        sm: "calc(1rem - 8px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
