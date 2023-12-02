import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { cn } from '@client/client-utils/tailwind/cn';
import ReactQueryClientProvider from '@client/components/client-components/react-query/ReactQueryClientProvider';
import ThemeProvider from '@client/components/client-components/theme-provider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tut Factory',
  description: 'Create and share tutorials with ease.',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'leading-base',
          'text-foreground',
          'bg-background',
          'box-border',
          'w-full',
          'min-h-screen',
          'text-base',
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

type RootLayoutProps = {
  children: React.ReactNode;
};
