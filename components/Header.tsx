'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/cars', label: '新車・中古車' },
    { href: '/search', label: 'クルマを探す' },
    { href: '/sell', label: 'クルマを売る' },
    { href: '/shop', label: '店舗一覧' },
    { href: '/about', label: 'カッチャウについて' },
    { href: '/rental', label: 'レンタカー' },
    { href: '/question', label: 'よくある質問' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  return (
    <>
      {/* ヘッダー部分（固定表示） */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* 1. テキスト部分（上） */}
        <div className="bg-white text-gray-900 py-3 md:py-4 lg:py-5 px-4 lg:px-8 border-b">
          <div className="max-w-full mx-auto">
            {/* PC: 横並び、スマホ: 縦並び */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-6">
              {/* 左側: ロゴとテキスト */}
              <Link href="/" className="flex items-center gap-3 lg:gap-4 hover:opacity-90 transition-opacity shrink-0">
                <Image 
                  src="/logo_kacchau.png" 
                  alt="カッチャウロゴ" 
                  width={300}
                  height={300}
                  className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
                  priority
                />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold whitespace-nowrap" style={{ color: '#1A237E' }}>
                    カッチャウ佐賀南3号店
                  </span>
                  {/* 車買取専門バッジ */}
                  <div className="inline-block px-2 py-1 md:px-3 md:py-1.5 border-2 md:border-3 border-white bg-red-600 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded shadow-lg whitespace-nowrap">
                    車買取専門
                  </div>
                </div>
              </Link>

              {/* 右側: 連絡先情報 */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6 shrink-0">
                <span className="hidden xl:inline text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">お気軽にお問い合わせ下さい</span>
                
                {/* 電話番号と受付時間 */}
                <div className="flex flex-col items-center">
                  <a href="tel:0952-27-0060" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Phone size={18} className="lg:w-5 lg:h-5" />
                    <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">0952-27-0060</span>
                  </a>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-0.5 whitespace-nowrap">受付時間: 9:00〜19:00</span>
                </div>

                <Link 
                  href="/contact" 
                  className="flex items-center gap-2 bg-kacchau text-gray-900 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full hover:bg-kacchau-dark transition-colors border-2 border-kacchau text-xs sm:text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap"
                >
                  <Mail size={16} className="lg:w-5 lg:h-5" />
                  <span>お問い合わせ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. ナビゲーション */}
        <nav className="bg-white border-b">
          <div className="max-w-full mx-auto px-4 lg:px-8">
            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end py-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-center items-center">
              {navItems.map((item) => (
                <li key={item.href} className="flex-1">
                  <Link
                    href={item.href}
                    className="block py-4 lg:py-5 px-3 lg:px-4 text-center text-sm lg:text-base text-gray-700 hover:bg-gray-50 hover:text-kacchau border-b-3 border-transparent hover:border-kacchau transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <ul className="md:hidden py-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-kacchau rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>

      {/* 背景画像部分（固定表示しない） */}
      <div 
        className="h-48 sm:h-64 md:h-96 lg:h-[32rem] xl:h-[40rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/shop_picture.jpg)' }}
      >
        <div className="w-full h-full bg-black/20"></div>
      </div>
    </>
  );
}
