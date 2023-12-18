'use client';
import React from 'react'

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  );
};