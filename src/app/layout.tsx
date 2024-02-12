import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';

const onest = Onest({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Agencia Beauty',
  description:
    'Agencia de marketing digital. Especializada en salones de belleza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
