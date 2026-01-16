'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 白色背景 - 縦幅をさらに小さく調整 */}
      <section className="bg-white text-gray-900 py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* カッチャウロゴ画像 - スマホ表示時に大きく */}
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/logo_kacchau.png" 
              alt="カッチャウ" 
              width={500}
              height={500}
              className="object-contain w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
              priority
            />
          </div>
          {/* テキスト部分 - 白色背景 */}
          <div className="bg-white px-6 py-1 rounded-lg inline-block">
            <p className="text-lg md:text-xl">
              車を買いたい・売りたい そんな時はカッチャウにおまかせください！
            </p>
          </div>
        </div>
      </section>

      {/* Introduction - 縦幅を狭く調整 */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
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
              {
                id: 1,
                name: 'ＢＭＷ 318ｉ ツーリング',
                image: '/car1.jpg',
                type: 'used',
                year: '2015年',
                mileage: '8.5万km',
                repairHistory: '修復歴なし',
                transmission: 'AT',
                drive: '2WD',
                displacement: '2000cc',
                color: 'ホワイトパール',
                warranty: '保証付き',
                totalPrice: 18,
                vehiclePrice: 15,
                fees: 3
              },
              {
                id: 2,
                name: 'ダイハツ タント',
                image: '/car2.jpg',
                type: 'used',
                year: '2020年',
                mileage: '3.2万km',
                repairHistory: '修復歴なし',
                transmission: 'CVT',
                drive: 'FF',
                displacement: '660cc',
                color: 'パールホワイト',
                warranty: '保証付き',
                totalPrice: 118,
                vehiclePrice: 110,
                fees: 8
              },
              {
                id: 3,
                name: 'ダイハツ タント カスタムＸ',
                image: '/car3.jpg',
                type: 'new',
                year: '2019年',
                mileage: '4.5万km',
                repairHistory: '修復歴なし',
                transmission: 'CVT',
                drive: 'FF',
                displacement: '660cc',
                color: 'ブラックマイカ',
                warranty: '保証付き',
                totalPrice: 113,
                vehiclePrice: 105,
                fees: 8
              }
            ].map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* 車両画像 */}
                <div className="h-56 relative bg-gray-200">
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill
                    className="object-cover"
                  />
                  {/* 保証バッジ（左上） */}
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {car.warranty}
                  </div>
                  {/* 新車/中古車バッジ（右上） */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
                    car.type === 'new' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-orange-500 text-white'
                  }`}>
                    {car.type === 'new' ? '新車' : '中古車'}
                  </div>
                </div>

                {/* 車両情報 */}
                <div className="p-5">
                  {/* 車名 */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 min-h-[3rem]">
                    {car.name}
                  </h3>

                  {/* 価格情報 */}
                  <div className="mb-4 pb-4 border-b-2 border-gray-200">
                    <div className="text-3xl font-bold text-kacchau mb-2">
                      支払総額 {car.totalPrice}万円
                      <span className="text-sm text-gray-600 ml-1 font-normal">(税込)</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      車両本体 <span className="font-semibold text-gray-900">{car.vehiclePrice}万円</span> / 諸費用 <span className="font-semibold text-gray-900">{car.fees}万円</span>
                    </div>
                  </div>

                  {/* 詳細情報 */}
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between py-1.5">
                      <span className="text-gray-600">年式</span>
                      <span className="font-semibold text-gray-900">{car.year}</span>
                    </div>
                    <div className="flex justify-between py-1.5 bg-gray-50 px-2 rounded">
                      <span className="text-gray-600">走行距離</span>
                      <span className="font-semibold text-gray-900">{car.mileage}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-gray-600">修復歴</span>
                      <span className="font-semibold text-green-600">{car.repairHistory}</span>
                    </div>
                    <div className="flex justify-between py-1.5 bg-gray-50 px-2 rounded">
                      <span className="text-gray-600">シフト</span>
                      <span className="font-semibold text-gray-900">{car.transmission}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-gray-600">駆動</span>
                      <span className="font-semibold text-gray-900">{car.drive}</span>
                    </div>
                    <div className="flex justify-between py-1.5 bg-gray-50 px-2 rounded">
                      <span className="text-gray-600">排気量</span>
                      <span className="font-semibold text-gray-900">{car.displacement}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-gray-600">系統色</span>
                      <span className="font-semibold text-gray-900">{car.color}</span>
                    </div>
                  </div>

                  {/* ボタン */}
                  <div className="space-y-2">
                    <Link
                      href={`/cars/${car.id}`}
                      className="block w-full text-center px-6 py-3 bg-kacchau text-gray-900 rounded-full font-bold hover:bg-kacchau-dark transition-colors shadow-md"
                    >
                      詳細を見る
                    </Link>
                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-3 bg-white text-kacchau border-2 border-kacchau rounded-full font-bold hover:bg-gray-50 transition-colors"
                    >
                      お問い合わせ
                    </Link>
                  </div>
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
            {/* クルマを探す */}
            <Link 
              href="/search"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/search_car.png" 
                  alt="クルマを探す" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">クルマを探す</h3>
                <p className="text-gray-600">直販システムで、いい車をお安く販売します。</p>
              </div>
            </Link>

            {/* クルマを売る */}
            <Link 
              href="/sell"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/sell_car.png" 
                  alt="クルマを売る" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">クルマを売る</h3>
                <p className="text-gray-600">カッチャウの高額査定システムで高価買い取りが可能です。</p>
              </div>
            </Link>

            {/* 店舗一覧 */}
            <Link 
              href="/shop"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/shop_list.png" 
                  alt="店舗一覧" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">店舗一覧</h3>
                <p className="text-gray-600">カッチャウは佐賀県内5店舗展開中です。</p>
              </div>
            </Link>

            {/* カッチャウについて - ロゴ画像をさらに大きく表示 */}
            <Link 
              href="/about"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative bg-gradient-to-br from-kacchau to-kacchau-dark flex items-center justify-center">
                <Image 
                  src="/logo_kacchau.png" 
                  alt="カッチャウについて" 
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">カッチャウについて</h3>
                <p className="text-gray-600">車を売る・買うならカッチャウのワケ。</p>
              </div>
            </Link>

            {/* レンタカー - 画像を追加 */}
            <Link 
              href="/rental"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/rental_car.jpg" 
                  alt="レンタカー（代車サービス）" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">レンタカー（代車サービス）</h3>
                <p className="text-gray-600">レンタカーもカッチャウで。</p>
              </div>
            </Link>

            {/* よくある質問 */}
            <Link 
              href="/question"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/faq.jpg" 
                  alt="よくある質問" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">よくある質問</h3>
                <p className="text-gray-600">車を売る・買うに関する質問です。</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Page Top Button - スマホ表示時は下部固定バーの高さ分のパディングを追加 */}
      <section className="py-12 pb-32 sm:pb-12 text-center bg-gray-50">
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
