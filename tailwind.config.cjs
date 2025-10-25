/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#f4f8ff",
          100: "#e6efff",
          200: "#c4d8ff",
          300: "#9bb8ff",
          400: "#6d8dff",
          500: "#4c52ff",
          600: "#3735db",
          700: "#2d2aac",
          800: "#252580",
          900: "#1e1f66",
          950: "#14163b"
        },
        neon: {
          green: "#66ffb2",
          blue: "#66d9ff",
          violet: "#a066ff"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(102, 217, 255, 0.35)"
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at 1px 1px, rgba(102, 217, 255, 0.25) 1px, transparent 0)",
        "radial-fade":
          "radial-gradient(circle at 20% 20%, rgba(102, 82, 255, 0.35), transparent 55%)"
      }
    }
  },
  plugins: []
};
