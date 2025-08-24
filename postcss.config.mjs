const config = {
   darkMode: "class", // required for manual dark mode toggling
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
    extend: {
     
    },
  },
  plugins: ["@tailwindcss/postcss",  require('@tailwindcss/typography'),

  ],
  
};

export default config;
