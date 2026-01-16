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
        {/* 1. テキスト部分（上） - スマホ時はロゴを左、テキストを右に配置 */}
        <div 
          className="text-gray-900 h-[60px] sm:h-[90px] px-2 sm:px-4 lg:px-8 border-b border-kacchau-dark overflow-hidden flex items-center"
          style={{ backgroundColor: '#FFD600' }}
        >
          <div className="max-w-[1600px] mx-auto w-full">
            {/* スマホ: 左右配置、PC: 中央寄せ */}
            <div className="flex flex-row flex-nowrap justify-between sm:justify-center items-center gap-2 sm:gap-3 lg:gap-6 xl:gap-8 relative">
              {/* 左側: ロゴ - スマホ時は大きく */}
              <Link href="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
                <Image 
                  src="/logo_kacchau.png" 
                  alt="カッチャウロゴ" 
                  width={350}
                  height={69}
                  className="object-contain w-[140px] h-[28px] sm:w-[200px] sm:h-[39px] md:w-[250px] md:h-[49px] lg:w-[300px] lg:h-[59px] xl:w-[350px] xl:h-[69px]"
                  priority
                />
              </Link>

              {/* 右側: テキスト（スマホ時は右寄せ、PC時は中央） */}
              <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 shrink-0 mr-10 sm:mr-0">
                {/* スマホ: 縦並び（右揃え）、PC: 横並び */}
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-0.5 sm:gap-2">
                  <span className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold whitespace-nowrap leading-tight" style={{ color: '#1A237E' }}>
                    カッチャウ佐賀南3号店
                  </span>
                  {/* 車買取専門バッジ */}
                  <div className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-2 lg:py-1 border border-white sm:border-2 lg:border-2 bg-red-600 text-white font-bold text-[8px] sm:text-xs md:text-sm lg:text-sm xl:text-base rounded shadow-lg whitespace-nowrap">
                    車買取専門
                  </div>
                </div>
              </div>

              {/* 右側: PC表示のみ連絡先情報 */}
              <div className="hidden sm:flex flex-row flex-nowrap items-center gap-0.5 sm:gap-2 lg:gap-3 xl:gap-4 shrink-0">
                {/* PC表示のみ */}
                <span className="hidden 2xl:inline text-xs sm:text-sm md:text-base lg:text-base whitespace-nowrap text-gray-900">お気軽にお問い合わせ下さい</span>
                
                {/* 電話番号と受付時間（PC表示のみ） */}
                <div className="hidden sm:flex flex-col items-center">
                  <a href="tel:0952-27-0060" className="flex items-center gap-1 hover:opacity-90 transition-opacity">
                    <Phone size={14} className="sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-gray-900" />
                    <span className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap text-gray-900">0952-27-0060</span>
                  </a>
                  <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-xs xl:text-sm text-gray-700 whitespace-nowrap">受付時間: 9:00〜19:00</span>
                </div>

                {/* お問い合わせボタン（PC表示のみ） */}
                <Link 
                  href="/contact"
                  className="hidden sm:flex items-center gap-0.5 sm:gap-1.5 bg-white text-gray-900 px-1.5 py-0.5 sm:px-3 sm:py-1.5 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 rounded-full hover:bg-gray-100 transition-colors border border-gray-300 sm:border-2 text-[8px] sm:text-xs md:text-sm lg:text-sm xl:text-base font-semibold whitespace-nowrap shadow-md"
                >
                  <Mail size={10} className="sm:w-3.5 sm:h-3.5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                  <span>お問い合わせ</span>
                </Link>
              </div>

              {/* メニューボタン（スマホ表示のみ・絶対配置で右端固定） */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="sm:hidden absolute right-2 p-1.5 rounded-lg transition-colors"
                style={{ backgroundColor: 'rgba(255, 214, 0, 0.3)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 214, 0, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 214, 0, 0.3)'}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* 2. ナビゲーション（PC表示のみ） - 背景色は白色のまま */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8">
            {/* Desktop Navigation */}
            <ul className="hidden sm:flex justify-center items-center">
              {navItems.map((item) => (
                <li key={item.href} className="flex-1">
                  <Link
                    href={item.href}
                    className="block py-1.5 lg:py-2 xl:py-2.5 px-2 lg:px-3 xl:px-4 text-center text-xs lg:text-sm xl:text-base text-gray-700 hover:bg-gray-50 hover:text-kacchau border-b-3 border-transparent hover:border-kacchau transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <ul className="sm:hidden py-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-kacchau rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
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

      {/* 背景画像部分 - bg-coverで余白をなくす */}
      <div 
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/shop_picture.jpg)' }}
      >
      </div>

      {/* スマホ表示のみ: 下部固定の連絡先バー */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-50">
        <div className="flex flex-col items-center py-2 px-4">
          {/* お気軽にお問い合わせ下さい */}
          <span className="text-[10px] text-gray-600 mb-1">お気軽にお問い合わせ下さい</span>
          
          {/* 電話番号 */}
          <a 
            href="tel:0952-27-0060" 
            className="flex items-center gap-1 mb-1 hover:opacity-80 transition-opacity"
          >
            <Phone size={16} className="text-kacchau" />
            <span className="font-bold text-base text-gray-900">0952-27-0060</span>
          </a>
          
          {/* 受付時間 */}
          <span className="text-[9px] text-gray-500 mb-2">受付時間: 9:00〜19:00</span>
          
          {/* お問い合わせボタン */}
          <Link 
            href="/contact"
            className="flex items-center gap-1.5 bg-kacchau text-gray-900 px-6 py-2 rounded-full hover:bg-kacchau-dark transition-colors border-2 border-kacchau text-sm font-semibold w-full justify-center"
          >
            <Mail size={16} />
            <span>お問い合わせ</span>
          </Link>
        </div>
      </div>
    </>
  );
}
