/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(45deg, red, green)',
          'custom-gradient2': 'linear-gradient(180deg, #050313 0%, #4c1616 50.95%, #6b2525 100%)',
          'custom-gradient3': 'linear-gradient(180deg, #01053d 0%, #05002b 24.5%, #22005c 49%, #2e0042 100%)',
          'custom-gradient4': 'radial-gradient(82.56% 400.59% at 50% 50%, #FFFFFF 11%, #FDF9F9 24%, #F8E8E8 40%, #F0CDCC 58%, #E5A7A6 78%, #E09795 86%)',
          'gold-gradient': 'background: linear-gradient(126.36deg, #E5B257 -0.29%, #E5B257 16.03%, #E5B257 18.54%, #E6B65F 23.57%, #E9C077 29.84%, #EFD29E 38.63%, #F2DEB7 44.91%, #E5B257 46.17%, #E5B257 58.72%, #E5B257 67.51%, #C08C31 86.35%, #AD781C 95.14%, #9A691C 97.65%, #51321C 108.95%);',
          'custom-bg': "url('/bg3.jpg')",

      },
    },
  },
  plugins: [],
};
