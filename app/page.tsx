'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Car } from 'lucide-react';
import { useState, useEffect } from 'react';

// 車両データの型定義
interface CarData {
  id: number;
  name: string;
  image: string;
  type: 'new' | 'used';
  year: string;
  mileage: string;
  repairHistory: string;
  transmission: string;
  drive: string;
  displacement: string;
  color: string;
  warranty: string;
  totalPrice: number;
  vehiclePrice: number;
  fees: number;
  category: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cars, setCars] = useState<CarData[]>([]);
  const [loading, setLoading] = useState(true);

  // フォールバックデータ（CMSにデータがない場合）
  const fallbackCars: CarData[] = [
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
      totalPrice: 180,
      vehiclePrice: 150,
      fees: 30,
      category: 'imported'
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
      fees: 8,
      category: 'kei'
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
      fees: 8,
      category: 'kei'
    }
  ];

  useEffect(() => {
    // APIから車両データを取得
    async function fetchCars() {
      try {
        const response = await fetch('/api/cars');
        if (response.ok) {
          const data = await response.json();
          setCars(data.length > 0 ? data : fallbackCars);
        } else {
          setCars(fallbackCars);
        }
      } catch (error) {
        console.error('車両データの取得に失敗しました:', error);
        setCars(fallbackCars);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'kei', label: '軽自動車' },
    { id: 'compact', label: 'コンパクトカー' },
    { id: 'sedan', label: 'セダン' },
    { id: 'suv', label: 'SUV' },
    { id: 'imported', label: '輸入車' },
  ];

  const filteredCars = selectedCategory === 'all' 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kacchau to-kacchau-dark text-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car size={48} className="text-gray-900" />
            <h1 className="text-4xl md:text-5xl font-bold">新車・中古車</h1>
          </div>
          <p className="text-lg md:text-xl mb-2">
            豊富な在庫からあなたにぴったりの一台を。
          </p>
          <p className="text-base md:text-lg">
            全店合計100台を超える展示車から、お気に入りの車を見つけましょう。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* カテゴリーフィルター */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-kacchau text-gray-900'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* 検索結果数 */}
        <div className="mb-6 text-gray-700">
          <p className="text-lg">
            <span className="font-bold text-2xl text-kacchau">{filteredCars.length}</span> 台の車両が見つかりました
          </p>
        </div>
        
        {/* ローディング表示 */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-kacchau"></div>
            <p className="mt-4 text-gray-600">車両情報を読み込み中...</p>
          </div>
        ) : (
          <>
            {/* 車両リスト */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <div 
                  key={car.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
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
          </>
        )}

        {/* お問い合わせCTA */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">お探しの車が見つかりませんか？</h2>
          <p className="text-gray-700 mb-8 text-lg">
            お気軽にお問い合わせください。ご希望の車両をお探しします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0952-27-0060"
              className="inline-block px-8 py-4 bg-kacchau text-gray-900 rounded-full font-bold text-lg hover:bg-kacchau-dark transition-colors shadow-md"
            >
              電話で問い合わせる
            </a>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-kacchau border-2 border-kacchau rounded-full font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              フォームで問い合わせる
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section - カッチャウの事業 */}
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

            {/* 車検見積・予約 */}
            <Link 
              href="/inspection"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/inspection.jpg" 
                  alt="車検見積・予約" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">車検見積・予約</h3>
                <p className="text-gray-600">車検のお見積もりとご予約を承ります。</p>
              </div>
            </Link>

            {/* オイル交換 */}
            <Link 
              href="/oil-change"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/oil-change.jpg" 
                  alt="オイル交換" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">オイル交換</h3>
                <p className="text-gray-600">定期的なオイル交換で愛車を長持ちさせます。</p>
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

            {/* カッチャウについて */}
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

            {/* レンタカー */}
            <Link 
              href="/rental"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-40 relative">
                <Image 
                  src="/rental_car.jpg" 
                  alt="レンタカー（代車）" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">レンタカー（代車）</h3>
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

      {/* Page Top Button */}
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
