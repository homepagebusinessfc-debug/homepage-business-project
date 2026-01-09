import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">カッチャウ佐賀南3号店</h3>
          <p className="text-gray-300">
            〒840-0027　佐賀市本庄町大字本庄968-1<br />
            TEL: 0952-27-0060
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-3 text-kacchau">サービス</h4>
            <ul className="space-y-2">
            　<li><Link href="/cars" className="text-gray-300 hover:text-white transition-colors">新車・中古車</Link></li>
              <li><Link href="/search" className="text-gray-300 hover:text-white transition-colors">クルマを探す</Link></li>
              <li><Link href="/sell" className="text-gray-300 hover:text-white transition-colors">クルマを売る</Link></li>
              <li><Link href="/rental" className="text-gray-300 hover:text-white transition-colors">レンタカー</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-3 text-kacchau">店舗情報</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-300 hover:text-white transition-colors">店舗一覧</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">カッチャウについて</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-3 text-kacchau">サポート</h4>
            <ul className="space-y-2">
              <li><Link href="/question" className="text-gray-300 hover:text-white transition-colors">よくある質問</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
          <p>Copyright © Kacchau-SagaMinami3gouten All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}