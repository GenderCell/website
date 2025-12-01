import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/*.{jsx,js}",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    themes: ["light", "dark"],
    colors: {
      primary: "#4F46E5", // Slate Blue
      secondary: "#14B8A6", // Teal
      neutral: "#64748B", // Slate Gray
      background: "#F8FAFC", // Off-White
      accent: "#F59E0B", // Soft Gold
      // Keeping some existing colors for backward compatibility if needed, but mapping them to new palette or deprecating
      subheading: "#64748B",
      links: "#4F46E5",
      success: "#14B8A6",
      sub2: "#94A3B8",
      lightPurple: "#E0E7FF", // Mapped to a light indigo
      lightpink: "#F0FDFA", // Mapped to a light teal/slate
      purpleshade1: "#6366F1",
      buttonpurple: "#4F46E5",
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Outfit', 'sans-serif'],
    }
  },
};

export const plugins = [daisyui];

