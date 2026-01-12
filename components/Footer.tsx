import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 会社情報 */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-kacchau">カッチャウ佐賀南3号店</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <MapPin size={18} />
              〒840-0027 佐賀市本庄町大字本庄968-1
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} />
              0952-27-0060
            </p>
            <p className="text-sm text-gray-400">受付時間: 9:00〜19:00</p>
          </div>
        </div>

        {/* リンク */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-kacchau">サービス</h3>
          <ul className="space-y-2">
            <li><a href="#cars" className="hover:text-kacchau transition-colors">新車・中古車</a></li>
            <li><a href="#search" className="hover:text-kacchau transition-colors">クルマを探す</a></li>
            <li><a href="#sell" className="hover:text-kacchau transition-colors">クルマを売る</a></li>
            <li><a href="#shop" className="hover:text-kacchau transition-colors">店舗一覧</a></li>
            <li><a href="#rental" className="hover:text-kacchau transition-colors">レンタカー</a></li>
          </ul>
        </div>

        {/* サポート */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-kacchau">サポート</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-kacchau transition-colors">カッチャウについて</a></li>
            <li><a href="#question" className="hover:text-kacchau transition-colors">よくある質問</a></li>
            <li>
              <a href="#contact" className="hover:text-kacchau transition-colors flex items-center gap-2">
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
        <p>&copy; 2024 カッチャウ佐賀南3号店. All rights reserved.</p>
      </div>
    </footer>
  );
}
