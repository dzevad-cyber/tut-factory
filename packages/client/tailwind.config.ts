import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    sm: ['1.4rem', '20px'],
    base: ['1.6rem', '24px'],
    lg: ['2rem', '28px'],
    xl: ['2.4rem', '32px'],
  },
  plugins: [],
};
export default config;
