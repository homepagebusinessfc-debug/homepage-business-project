'use client';
import Link from 'next/link';
import { Mail } from 'lucide-react';

/**
 * タスク5: スマホ用フローティングボタン
 * - 画面右下に固定配置
 * - スマホ表示時のみ表示（md:hidden）
 * - クリックで/contactに遷移
 */
export default function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-kacchau text-gray-900 shadow-lg hover:bg-kacchau-dark transition-all hover:scale-110 flex items-center justify-center md:hidden"
      aria-label="お問い合わせ"
    >
      <Mail className="h-6 w-6" />
    </Link>
  );
}
