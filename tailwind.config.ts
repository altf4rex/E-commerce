import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        primaryLight: "#575757",
        primaryBg: "#F9F9F9",
        primaryHover: "#E8F0E2",
        secondary: "#6A983C",
        secondaryHover: "#518919",
        secondaryBgLight: "#F4F8EC",
        secondaryBgDark: "#46760A",
      }
    },
  },
  plugins: [],
}

// hover // hover:bg-slate-200
// hover // hover:bg-gray-200
// borde // text-gray-500
// text //  text-gray-400
export default config

