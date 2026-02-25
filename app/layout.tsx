import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from '@/components/FloatingContactButton';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "カッチャウ佐賀南3号店 | 車買取・販売専門店",
  description: "車を買いたい・売りたい そんな時はカッチャウにおまかせください！佐賀県内5店舗展開中。",
  icons: {
    icon: '/icon_kacchau.ico',
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
        export default function RootLayout({
  children,
}: {
  children: React.Node
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* タスク5: スマホ用フローティングボタン */}
        <FloatingContactButton />
      </body>
    </html>
  )
        }
        <Footer />
      </body>
    </html>
  );
}

