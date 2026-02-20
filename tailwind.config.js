/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/navigation/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#5653FC",
        text: "#0F172A",
        subtext: "#64748B",
        divider: "#E5E7EB",
        surface: "#FFFFFF",
        purpleRing: "#5653FC",
        purpleCard: "#EFEEFF",
        orangeRing: "#E35F00",
        orangeCard: "#FFF8EB",
        chipBlue: "#F0F9FF",
        chipPink: "#FDF2FA",
        textPink: "#C11574",
        textBlue: "#026AA2",
        blueRing: "#009FE3",
        blueCard: "#EEF5FF",
        overlay: "rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
