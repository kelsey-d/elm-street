import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sofia': ['var(--font-sofia-sans)'],
        'sofia-condensed': ['var(--font-sofia-sans-extra-condensed)'],
        'romanesco': ['var(--font-romanesco)'],
      },
      colors: {
        'crimson': '#FF5500',
        'ice': '#9EBFE3',
        'dusk': '#00080E',
      },
    },
  },
  plugins: [],
}

export default config