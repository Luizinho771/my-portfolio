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
    <html
      lang="en"
      className={`${recursive.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Apply persisted theme/mono before first paint to avoid FOUC
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;var m=localStorage.getItem("mono");if(m==="on")document.documentElement.dataset.mono="on";}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
