import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const recursive = localFont({
  src: "../assets/fonts/recursive.woff2",
  variable: "--font-recursive",
  weight: "300 1000",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luiz Paulo",
  description: "Luiz Paulo's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${recursive.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
