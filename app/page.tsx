'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 紫→黄色グラデーション */}
      <section className="bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            カッチャウ
          </h1>
          <p className="text-xl md:text-2xl">
            車を買いたい・売りたい そんな時はカッチャウにおまかせください！
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            カッチャウは全国ネットワークで買い取った車両情報を店頭公開するので種類が豊富。<br />
            買い取りでは、あなたの愛車を細かく査定し、データだけにとらわれないカッチャウオリジナルの高価査定を実現します。
          </p>
        </div>
      </section>

      {/* Recommended Cars */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-kacchau">
            オススメの新車・中古車
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* 車のカード（既存のコード） */}
    </div>
    
    {/* 🆕 もっと見るボタンを追加 */}
    <div className="text-center mt-12">
      <Link 
        href="/cars"
        className="inline-block px-12 py-4 bg-kacchau text-gray-900 text-lg font-bold rounded-full hover:bg-kacchau-dark transition-colors shadow-lg"
      >
        もっと見る
      </Link>
    </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'ＢＭＷ 318ｉ ツーリング', price: '18万円' },
              { name: 'ダイハツ タント', price: '118万円' },
              { name: 'ダイハツ タント カスタムＸ', price: '113万円' }
            ].map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">{car.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-2xl font-bold text-kacchau">本体価格：{car.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-kacchau">
            カッチャウの事業
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                href: '/search', 
                icon: '🚗', 
                title: 'クルマを探す',
                desc: '直販システムで、いい車をお安く販売します。'
              },
              { 
                href: '/sell', 
                icon: '💰', 
                title: 'クルマを売る',
                desc: 'カッチャウの高額査定システムで高価買い取りが可能です。'
              },
              { 
                href: '/shop', 
                icon: '🏪', 
                title: '店舗一覧',
                desc: 'カッチャウは佐賀県内5店舗展開中です。'
              },
              { 
                href: '/about', 
                icon: 'ℹ️', 
                title: 'カッチャウについて',
                desc: '車を売る・買うならカッチャウのワケ。'
              },
              { 
                href: '/rental', 
                icon: '🚙', 
                title: 'レンタカー',
                desc: 'レンタカーもカッチャウで。'
              },
              { 
                href: '/question', 
                icon: '❓', 
                title: 'よくある質問',
                desc: '車を売る・買うに関する質問です。'
              }
            ].map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-6xl">
                  {service.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Page Top Button */}
      <section className="py-12 text-center bg-gray-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-8 py-4 bg-[#FFC107] text-white rounded-full font-bold text-lg hover:bg-red-700 transition-colors"
        >
          ページトップへ
        </button>
      </section>
    </div>
  );
}