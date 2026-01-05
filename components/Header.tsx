'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/search', label: 'クルマを探す' },
    { href: '/sell', label: 'クルマを売る' },
    { href: '/shop', label: '店舗一覧' },
    { href: '/about', label: 'カッチャウについて' },
    { href: '/rental', label: 'レンタカー' },
    { href: '/question', label: 'よくある質問' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <Link href="/" className="text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity">
            カッチャウ佐賀南3号店
          </Link>
          <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
            <span className="hidden md:inline">お気軽にお問い合わせ下さい</span>
            <a href="tel:0952-27-0060" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Phone size={20} />
              <span className="font-bold text-lg md:text-xl">0952-27-0060</span>
            </a>
            <Link 
              href="/contact" 
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Mail size={20} />
              <span className="font-semibold">お問い合わせ</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
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
                  className="block py-5 px-4 text-center text-gray-700 hover:bg-gray-50 hover:text-red-600 border-b-3 border-transparent hover:border-red-600 transition-all duration-200"
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
                    className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-lg transition-colors"
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