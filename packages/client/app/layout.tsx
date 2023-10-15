import './globals.css';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import React from 'react';
import { cn } from '@client/client-utils/tailwind/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tut Factory',
  description: 'Create and share tutorials with ease.',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={cn(
            'leading-base',
            'text-foreground bg-background',
            'box-border min-h-screen w-full',
            'text-base',
            inter.className
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;

type RootLayoutProps = {
  children: React.ReactNode;
};
