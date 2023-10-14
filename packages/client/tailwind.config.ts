import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        popover: 'var(--popover)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        radius: 'var(--radius)',
        'card-foreground': 'var(card-foreground)',
        'popover-foreground': 'var(popover-foreground)',
        'primary-foreground': 'var(primary-foreground)',
        'secondary-foreground': 'var(secondary-foreground)',
        'muted-foreground': 'var(muted-foreground)',
        'accent-foreground': 'var(accent-foreground)',
        'destructive-foreground': 'var(destructive-foreground)',
      },
      fontSize: {
        sm: ['1.4rem', '20px'],
        base: ['1.6rem', '24px'],
        lg: ['2rem', '28px'],
        xl: ['2.4rem', '32px'],
      },
    },
  },
  plugins: [],
};
export default config;
