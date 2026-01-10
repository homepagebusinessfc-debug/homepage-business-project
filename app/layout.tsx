import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "カッチャウ佐賀南3号店 | 車買取・販売専門店",
  description: "車を買いたい・売りたい そんな時はカッチャウにおまかせください！佐賀県内5店舗展開中。",
  icons: {
    icon: '/favicon.ico',
    apple: '/logo_kacchau.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
