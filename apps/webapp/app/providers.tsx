'use client';
import { ThemeProvider } from '@cmusy/ui';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
