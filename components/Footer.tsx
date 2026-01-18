import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 店舗情報 */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-kacchau">店舗情報</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2">カッチャウ佐賀南3号店</h4>
              <div className="space-y-2">
                <p className="flex items-start gap-2">
                  <MapPin size={18} className="flex-shrink-0 mt-1" />
                  <span>〒840-0027 佐賀市本庄町大字本庄968-1</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:0952-27-0060" className="hover:text-kacchau transition-colors">
                    0952-27-0060
                  </a>
                </p>
                <p className="text-sm text-gray-400">受付時間: 9:00〜19:00（不定休）</p>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-700">
              <ul className="space-y-2">
                <li>
                  <a href="/shop" className="hover:text-kacchau transition-colors">
                    店舗一覧
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-kacchau transition-colors">
                    カッチャウについて
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* サービス */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-kacchau">サービス</h3>
          <ul className="space-y-2">
            <li><a href="/cars" className="hover:text-kacchau transition-colors">新車・中古車</a></li>
            <li><a href="/search" className="hover:text-kacchau transition-colors">クルマを探す</a></li>
            <li><a href="/sell" className="hover:text-kacchau transition-colors">クルマを売る</a></li>
            <li><a href="/rental" className="hover:text-kacchau transition-colors">レンタカー（代車）</a></li>
          </ul>
        </div>

        {/* サポート */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-kacchau">サポート</h3>
          <ul className="space-y-2">
            <li><a href="/question" className="hover:text-kacchau transition-colors">よくある質問</a></li>
            <li>
              <a href="/contact" className="hover:text-kacchau transition-colors flex items-center gap-2">
                <Mail size={18} />
                お問い合わせ
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-kacchau transition-colors">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* コピーライト */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2026 カッチャウ佐賀南3号店. All rights reserved.</p>
      </div>
    </footer>
  );
}
