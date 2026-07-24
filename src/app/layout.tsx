import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ardhia - Digital Marketing Specialist',
  description: 'Digital Marketing Specialist, Content Strategist & Social Media Manager.',
  themeColor: '#F9F6F0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kanit.variable} light`} style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#F9F6F0" />
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className="bg-[#F9F6F0] text-[#3D2E2B] font-sans antialiased overflow-x-clip min-h-screen">
        <div id="root" className="bg-[#F9F6F0] overflow-x-clip min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
