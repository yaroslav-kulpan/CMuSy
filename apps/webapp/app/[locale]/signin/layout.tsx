export const metadata = {
  title: 'Welcome to webapp',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
