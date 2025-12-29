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
  title: {
    default: "Tensory - 企業の知識を成果に変える生成AIパートナー",
    template: "%s | Tensory",
  },
  description: "Tensoryは、企業に眠る暗黙知をAIで形式知に変換し、ナレッジエンジニアリングで組織の成長を加速させます。製造業・サービス業向けの生成AI導入支援・コンサルティング。",
  keywords: ["生成AI", "ナレッジマネジメント", "暗黙知", "形式知", "AI導入", "製造業AI", "RAG", "AIコンサルティング", "業務効率化"],
  authors: [{ name: "Tensory Inc." }],
  creator: "Tensory Inc.",
  publisher: "Tensory Inc.",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://tensory.co.jp",
    siteName: "Tensory",
    title: "Tensory - 企業の知識を成果に変える生成AIパートナー",
    description: "企業に眠る暗黙知をAIで形式知に変換し、ナレッジエンジニアリングで組織の成長を加速させます。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tensory - 企業の知識を成果に変える生成AIパートナー",
    description: "企業に眠る暗黙知をAIで形式知に変換し、ナレッジエンジニアリングで組織の成長を加速させます。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tensory.co.jp",
  },
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
