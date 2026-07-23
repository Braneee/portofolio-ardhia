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
  title: 'Ardhia -- Digital Marketing Specialist',
  description: 'Digital Marketing Specialist, Content Strategist & Social Media Manager.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kanit.variable}>
      <head>
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className="bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased overflow-x-clip min-h-screen">
        <div id="root" className="bg-[#0C0C0C] overflow-x-clip min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
