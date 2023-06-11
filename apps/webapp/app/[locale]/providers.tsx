'use client';
import { ThemeProvider } from '@cmusy/ui';
import { PropsWithChildren } from 'react';

type ProvidersProps = {
  locale?: string;
};
export function Providers({
  children,
  locale,
}: PropsWithChildren<ProvidersProps>) {
  return (
      <ThemeProvider>{children}</ThemeProvider>
  );
}
