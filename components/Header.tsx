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
      <div className="bg-white text-gray-900 py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* ロゴとテキスト部分 */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image 
              src="/logo_kacchau.png" 
              alt="カッチャウロゴ" 
              width={200}
              height={200}
              className="object-contain w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              priority
            />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap" style={{ color: '#1A237E' }}>
                カッチャウ佐賀南3号店
              </span>
              {/* 車買取専門バッジ */}
              <div className="inline-block px-3 py-1.5 border-3 border-white bg-red-600 text-white font-bold text-sm md:text-base lg:text-lg rounded shadow-lg whitespace-nowrap">
                車買取専門
              </div>
            </div>
          </Link>

          {/* 連絡先情報 */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-sm md:text-base">
            <span className="hidden xl:inline text-sm">お気軽にお問い合わせ下さい</span>
            
            {/* 電話番号と受付時間 */}
            <div className="flex flex-col items-center md:items-start">
              <a href="tel:0952-27-0060" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Phone size={18} />
                <span className="font-bold text-lg md:text-xl">0952-27-0060</span>
              </a>
              <span className="text-xs md:text-sm text-gray-600 mt-0.5">受付時間: 9:00〜19:00</span>
            </div>

            <Link 
              href="/contact" 
              className="flex items-center gap-2 bg-kacchau text-gray-900 px-4 py-2 rounded-full hover:bg-kacchau-dark transition-colors border-2 border-kacchau text-sm md:text-base font-semibold whitespace-nowrap"
            >
              <Mail size={18} />
              <span>お問い合わせ</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 背景画像部分（下） - 高さを2倍以上に拡大 */}
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
