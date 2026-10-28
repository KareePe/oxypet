/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        seed: ["Noto Sans Thai", "sans-serif"],
        sriracha: ["Sriracha", "cursive"],
      },
      keyframes: {
        "cta-shine": {
          "0%, 62%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        "cta-online": {
          "0%": { boxShadow: "0 0 0 0 rgba(6, 199, 85, 0.6)" },
          "100%": { boxShadow: "0 0 0 8px rgba(6, 199, 85, 0)" },
        },
        "fab-ripple": {
          "0%": { boxShadow: "0 0 0 0 currentColor", opacity: "0.6" },
          "40%, 100%": { boxShadow: "0 0 0 18px currentColor", opacity: "0" },
        },
        "ecg-pulse": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "urgent-ping": {
          "0%": { boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.7)" },
          "100%": { boxShadow: "0 0 0 10px rgba(239, 68, 68, 0)" },
        },
        "urgent-ping-light": {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.8)" },
          "100%": { boxShadow: "0 0 0 8px rgba(255, 255, 255, 0)" },
        },
        "siren-glow": {
          "0%, 100%": {
            backgroundColor: "#dc2626",
            boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.6), 0 0 10px 0 rgba(239, 68, 68, 0.35)",
          },
          "50%": {
            backgroundColor: "#ef4444",
            boxShadow: "0 0 0 7px rgba(239, 68, 68, 0), 0 0 26px 6px rgba(239, 68, 68, 0.65)",
          },
        },
        "danger-shake": {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "65%": { transform: "rotate(-16deg)" },
          "70%": { transform: "rotate(14deg)" },
          "75%": { transform: "rotate(-10deg)" },
          "80%": { transform: "rotate(8deg)" },
          "85%": { transform: "rotate(-4deg)" },
          "90%": { transform: "rotate(0deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "cta-shine": "cta-shine 3.6s ease-in-out infinite",
        "cta-online": "cta-online 1.6s ease-out infinite",
        "fab-ripple": "fab-ripple 4s ease-out infinite",
        "ecg-pulse": "ecg-pulse 3.2s linear infinite",
        "urgent-ping": "urgent-ping 1.4s ease-out infinite",
        "urgent-ping-light": "urgent-ping-light 1.4s ease-out infinite",
        "siren-glow": "siren-glow 1.2s ease-in-out infinite",
        "danger-shake": "danger-shake 2.4s ease-in-out infinite",
        breathe: "breathe 6s ease-in-out infinite",
        "float-soft": "float-soft 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
