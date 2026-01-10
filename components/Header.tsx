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
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* 1. テキスト部分（上） */}
      <div className="bg-white text-gray-900 py-6 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          {/* ロゴとテキスト部分 - 中央配置 */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <Image 
                src="/logo_kacchau.png" 
                alt="カッチャウロゴ" 
                width={450}
                height={450}
                className="object-contain w-72 h-72 md:w-96 md:h-96 lg:w-[27rem] lg:h-[27rem]"
                priority
              />
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <span className="text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap" style={{ color: '#1A237E' }}>
                  カッチャウ佐賀南3号店
                </span>
                {/* 車買取専門バッジ */}
                <div className="inline-block px-3 py-1.5 border-3 border-white bg-red-600 text-white font-bold text-sm md:text-base rounded shadow-lg whitespace-nowrap">
                  車買取専門
                </div>
              </div>
            </Link>
          </div>

          {/* 連絡先情報 - 中央配置 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-sm md:text-base">
            <span className="hidden lg:inline text-sm">お気軽にお問い合わせ下さい</span>
            
            {/* 電話番号と受付時間 */}
            <div className="flex flex-col items-center">
              <a href="tel:0952-27-0060" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Phone size={20} />
                <span className="font-bold text-lg md:text-xl">0952-27-0060</span>
              </a>
              <span className="text-xs md:text-sm text-gray-600 mt-0.5">受付時間: 9:00〜19:00</span>
            </div>

            <Link 
              href="/contact" 
              className="flex items-center gap-2 bg-kacchau text-gray-900 px-5 py-2.5 rounded-full hover:bg-kacchau-dark transition-colors border-2 border-kacchau text-sm md:text-base font-semibold whitespace-nowrap"
            >
              <Mail size={20} />
              <span>お問い合わせ</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 背景画像部分（下） */}
      <div 
        className="h-64 md:h-96 lg:h-[32rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/shop_picture.jpg)' }}
      >
        <div className="w-full h-full bg-black/20"></div>
      </div>

      {/* 3. ナビゲーション */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
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
                  className="block py-5 px-4 text-center text-gray-700 hover:bg-gray-50 hover:text-kacchau border-b-3 border-transparent hover:border-kacchau transition-all duration-200"
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
  );
}
