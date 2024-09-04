import type { Metadata } from "next";
import {Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: 'swap', adjustFontFallback: false});
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"],display: 'swap', adjustFontFallback: false});

export const metadata: Metadata = {
  title: "Mr. Seyram Yao Alifo",
  description: "Bridging The Gaps Using Technology & Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
