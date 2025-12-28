import type { Metadata } from "next";
import { Inter, Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ... existing imports ...

export const metadata: Metadata = {
  title: "Tensory - Intelligent Fusion",
  description: "企業の知識を『成果』に変える 生成AIパートナー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${montserrat.variable} ${notoSansJP.variable} font-sans antialiased bg-white text-gray-1`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
