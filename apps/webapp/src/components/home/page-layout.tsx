'use client';
import { PropsWithChildren } from 'react';
import { Footer } from '../../shared/footer';
import Navbar from '../../shared/navbar/navbar';

type PageLayoutProps = {
  isShowFooter?: boolean;
};

export function PageLayout({
  children,
  isShowFooter = true,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <main className="flex flex-col flex-1 min-h-screen">
      <Navbar />
      {children}
      {isShowFooter && <Footer />}
    </main>
  );
}
