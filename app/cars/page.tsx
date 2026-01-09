'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CarsPage() {
  const cars = [
    { 
      name: 'ＢＭＷ 318ｉ ツーリング', 
      price: '18万円',
      image: 'ＢＭＷ 318ｉ ツーリング'
    },
    { 
      name: 'ダイハツ タント', 
      price: '118万円',
      image: 'ダイハツ タント'
    },
    { 
      name: 'ダイハツ タント カスタムＸ', 
      price: '113万円',
      image: 'ダイハツ タント カスタムＸ'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-kacchau hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">新車・中古車</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-kacchau">
          オススメの新車・中古車
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">{car.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-2xl font-bold text-kacchau">本体価格：{car.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* お問い合わせボタン */}
        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-block px-12 py-4 bg-kacchau text-gray-900 text-lg font-bold rounded-full hover:bg-kacchau-dark transition-colors shadow-lg"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </div>
    </div>
  );
}