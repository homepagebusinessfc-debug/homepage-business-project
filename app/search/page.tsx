'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (!keyword) return;
    window.location.href = `/search/result?keyword=${encodeURIComponent(keyword)}`;
  };

  const makers = [
    { name: 'トヨタ', img: '/makers/toyota.png' },
    { name: '日産', img: '/makers/nissan.png' },
    { name: 'ホンダ', img: '/makers/honda.png' },
    { name: 'スズキ', img: '/makers/suzuki.png' },
    { name: 'ダイハツ', img: '/makers/daihatsu.png' },
    { name: 'マツダ', img: '/makers/mazda.png' },
    { name: 'スバル', img: '/makers/subaru.png' },
    { name: '三菱', img: '/makers/mitsubishi.png' },
  ];

  const bodyTypes = [
    { name: '軽自動車', img: '/body/kei.png' },
    { name: 'コンパクト', img: '/body/compact.png' },
    { name: 'セダン', img: '/body/sedan.png' },
    { name: 'SUV', img: '/body/suv.png' },
    { name: 'ミニバン', img: '/body/minivan.png' },
    { name: 'ワゴン', img: '/body/wagon.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-red-600 hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">クルマを探す</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">

          <h1 className="text-4xl font-bold text-red-600 mb-8 pb-4 border-b-4 border-red-600">
            クルマを探す
          </h1>

          {/* キーワード検索 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">キーワードで探す</h2>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="例：N-BOX、プリウス、SUV など"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
              >
                検索
              </button>
            </div>
          </div>

          {/* メーカー一覧 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">メーカーから選ぶ</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {makers.map((m) => (
                <Link
                  key={m.name}
                  href={`/search/result?maker=${m.name}`}
                  className="text-center hover:opacity-80 transition"
                >
                  <img src={m.img} alt={m.name} className="w-24 h-24 mx-auto object-contain" />
                  <p className="mt-2 text-gray-700 font-semibold">{m.name}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* ボディタイプ一覧 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ボディタイプから選ぶ</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {bodyTypes.map((b) => (
                <Link
                  key={b.name}
                  href={`/search/result?body=${b.name}`}
                  className="text-center hover:opacity-80 transition"
                >
                  <img src={b.img} alt={b.name} className="w-20 h-20 mx-auto object-contain" />
                  <p className="mt-2 text-gray-700 font-semibold">{b.name}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* 価格帯 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">価格帯で選ぶ</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['〜50万円', '50〜100万円', '100〜150万円', '150〜200万円', '200万円以上'].map((p) => (
                <Link
                  key={p}
                  href={`/search/result?price=${p}`}
                  className="block bg-gray-50 border p-4 rounded-lg text-center font-semibold hover:bg-gray-100"
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>

          {/* お問い合わせ */}
          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 shadow-lg"
            >
              お問い合わせはこちら
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
