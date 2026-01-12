'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 白色背景 */}
      <section className="bg-white text-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* カッチャウロゴ画像 */}
          <div className="flex items-center justify-center mb-6">
            <Image 
              src="/logo_kacchau.png" 
              alt="カッチャウ" 
              width={500}
              height={500}
              className="object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96"
              priority
            />
          </div>
          {/* テキスト部分 - 白色背景 */}
          <div className="bg-white px-6 py-4 rounded-lg inline-block">
            <p className="text-xl md:text-2xl">
              車を買いたい・売りたい そんな時はカッチャウにおまかせください！
            </p>
          </div>
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
      <section className="py-16 px-4 bg-gray-50" id="cars">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-kacchau">
            オススメの新車・中古車
          </h2>
          
          {/* 車のカード */}
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
          
          {/* もっと見るボタン */}
          <div className="text-center mt-12">
            <Link 
              href="/cars"
              className="inline-block px-12 py-4 bg-kacchau text-gray-900 text-lg font-bold rounded-full hover:bg-kacchau-dark transition-colors shadow-lg"
            >
              もっと見る
            </Link>
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
            {/* クルマを探す - 写真を追加 */}
            <a 
              href="#search"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/search_car.jpg" 
                  alt="クルマを探す" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">クルマを探す</h3>
                <p className="text-gray-600">直販システムで、いい車をお安く販売します。</p>
              </div>
            </a>

            {/* クルマを売る - 写真を追加 */}
            <a 
              href="#sell"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/sell_car.jpg" 
                  alt="クルマを売る" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">クルマを売る</h3>
                <p className="text-gray-600">カッチャウの高額査定システムで高価買い取りが可能です。</p>
              </div>
            </a>

            {/* 店舗一覧 */}
            <a 
              href="#shop"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-kacchau to-kacchau-dark flex items-center justify-center text-6xl">
                🏪
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">店舗一覧</h3>
                <p className="text-gray-600">カッチャウは佐賀県内5店舗展開中です。</p>
              </div>
            </a>

            {/* カッチャウについて */}
            <a 
              href="#about"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-kacchau to-kacchau-dark flex items-center justify-center text-6xl">
                ℹ️
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">カッチャウについて</h3>
                <p className="text-gray-600">車を売る・買うならカッチャウのワケ。</p>
              </div>
            </a>

            {/* レンタカー */}
            <a 
              href="#rental"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-kacchau to-kacchau-dark flex items-center justify-center text-6xl">
                🚙
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">レンタカー</h3>
                <p className="text-gray-600">レンタカーもカッチャウで。</p>
              </div>
            </a>

            {/* よくある質問 */}
            <a 
              href="#question"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-kacchau to-kacchau-dark flex items-center justify-center text-6xl">
                ❓
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">よくある質問</h3>
                <p className="text-gray-600">車を売る・買うに関する質問です。</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Page Top Button */}
      <section className="py-12 text-center bg-gray-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-8 py-4 bg-kacchau text-gray-900 rounded-full font-bold text-lg hover:bg-kacchau-dark transition-colors"
        >
          ページトップへ
        </button>
      </section>
    </div>
  );
}
