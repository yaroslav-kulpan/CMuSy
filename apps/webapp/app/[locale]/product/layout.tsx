import { PageLayout } from '../../../src/components/home/page-layout';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}