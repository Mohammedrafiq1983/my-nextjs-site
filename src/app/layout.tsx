import type { Metadata } from 'next';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import './globals.css';

export const metadata: Metadata = {
  title: 'eDarris Office, Education & Business Supplies',
  description: 'B2B supplier of stationery, education supplies, print-shop consumables and packaging materials in Iraq and MENA.'
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children, params }: any) {
  return (
    <html lang={params.locale} dir={dir(params.locale)}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
