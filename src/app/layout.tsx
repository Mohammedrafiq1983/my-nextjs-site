import type { Metadata } from "next";
import { Inter, Heebo, Cairo } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "احمد زيدان نت - مزود خدمة الإنترنت وخدمات الإنترنت العريض",
  description: "احمد زيدان نت - مزود خدمة الإنترنت وخدمات الإنترنت العريض",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${heebo.variable} ${cairo.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
