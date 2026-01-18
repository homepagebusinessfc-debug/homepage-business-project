'use client';

import Link from 'next/link';
import { ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [selectedMaker, setSelectedMaker] = useState<string | null>(null);
  const [selectedBody, setSelectedBody] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const [results, setResults] = useState<any[] | null>(null);
  const [searched, setSearched] = useState(false);

  // ▼ 仮の新車・中古車データ（後でAPIやDBに置き換え可能）
  const cars = [
    {
      id: 1,
      name: 'トヨタ プリウス',
      maker: 'トヨタ',
      body: 'セダン',
      price: 150,
      type: '中古車',
    },
    {
      id: 2,
      name: 'ホンダ N-BOX',
      maker: 'ホンダ',
      body: '軽自動車',
      price: 120,
      type: '中古車',
    },
    {
      id: 3,
      name: '日産 セレナ',
      maker: '日産',
      body: 'ミニバン',
      price: 200,
      type: '新車',
    },
  ];

  const makers = [
    'トヨタ',
    '日産',
    'ホンダ',
    'スズキ',
    'ダイハツ',
    'マツダ',
    'スバル',
    '三菱',
  ];

  const bodyTypes = [
    '軽自動車',
    'コンパクト',
    'セダン',
    'SUV',
    'ミニバン',
    'ワゴン',
  ];

  const prices = [
    '〜50万円',
    '50〜100万円',
    '100〜150万円',
    '150〜200万円',
    '200万円以上',
  ];

  // ▼ 価格帯の判定
  const priceInRange = (price: number, range: string | null) => {
    if (!range) return true;
    if (range === '〜50万円') return price <= 50;
    if (range === '50〜100万円') return price >= 50 && price <= 100;
    if (range === '100〜150万円') return price >= 100 && price <= 150;
    if (range === '150〜200万円') return price >= 150 && price <= 200;
    if (range === '200万円以上') return price >= 200;
    return true;
  };

  // ▼ 検索処理（ページ内で完結）
  const handleSearch = () => {
    const filtered = cars.filter((car) => {
      const matchKeyword =
        keyword === '' || car.name.includes(keyword) || car.maker.includes(keyword);

      const matchMaker = !selectedMaker || car.maker === selectedMaker;
      const matchBody = !selectedBody || car.body === selectedBody;
      const matchPrice = priceInRange(car.price, selectedPrice);

      return matchKeyword && matchMaker && matchBody && matchPrice;
    });

    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-kacchau hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">クルマを探す</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kacchau to-kacchau-dark text-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Search size={48} className="text-gray-900" />
            <h1 className="text-4xl md:text-5xl font-bold">クルマを探す</h1>
          </div>
          <p className="text-lg md:text-xl mb-2">
            直販システムで、いい車をお安く販売します。
          </p>
          <p className="text-base md:text-lg">
            全店合計100台を超える展示車から、あなたにピッタリの1台を見つけましょう。
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-2xl text-gray-700 mb-12 font-semibold">
            あなたが欲しいのは新車？中古車？
          </p>

          {/* ▼ 検索UIブロック（既存） */}
          <div className="mb-12 border border-gray-200 rounded-lg p-6 md:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              条件からクルマを探す
            </h2>

            {/* キーワード */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                キーワードで探す
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="例：N-BOX、プリウス、SUV など"
                className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
              />
            </div>

            {/* メーカー */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                メーカーから選ぶ
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {makers.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() =>
                      setSelectedMaker((prev) => (prev === m ? null : m))
                    }
                    className={`border rounded-lg px-3 py-2 text-sm md:text-base text-center transition ${
                      selectedMaker === m
                        ? 'bg-kacchau text-gray-900 border-kacchau'
                        : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* ボディタイプ */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                ボディタイプから選ぶ
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {bodyTypes.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() =>
                      setSelectedBody((prev) => (prev === b ? null : b))
                    }
                    className={`border rounded-lg px-3 py-2 text-sm md:text-base text-center transition ${
                      selectedBody === b
                        ? 'bg-kacchau text-gray-900 border-kacchau'
                        : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* 価格帯 */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2">
                価格帯で選ぶ
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {prices.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() =>
                      setSelectedPrice((prev) => (prev === p ? null : p))
                    }
                    className={`border rounded-lg px-3 py-2 text-sm md:text-base text-center transition ${
                      selectedPrice === p
                        ? 'bg-kacchau text-gray-900 border-kacchau'
                        : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleSearch}
                className="inline-block px-10 py-3 bg-kacchau text-gray-900 text-lg font-bold rounded-full hover:bg-kacchau-dark transition-colors shadow-lg"
              >
                この条件で検索する
              </button>
            </div>
          </div>

          {/* ▼ 検索結果表示エリア（今回追加） */}
          {searched && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">検索結果</h2>

              {results && results.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {results.map((car) => (
                    <div
                      key={car.id}
                      className="border rounded-lg p-6 shadow-sm bg-white"
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {car.name}
                      </h3>
                      <p className="text-gray-700">メーカー：{car.maker}</p>
                      <p className="text-gray-700">ボディタイプ：{car.body}</p>
                      <p className="text-gray-700">価格：{car.price}万円</p>
                      <p className="text-gray-700">区分：{car.type}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 text-lg">
                  該当の車は見つかりませんでした。
                </p>
              )}
            </div>
          )}

          {/* ▼ 以下は既存の文章（削除なし） */}
          <div className="mb-12 mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">新車</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              「カッチャウ」は、国内全メーカー全車種を取扱い、海外メーカーも取扱いございます。
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">中古車</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              全店合計100台を超える展示車が、あなたをお待ちしております。<br />
              欲しいクルマが店頭に無くても大丈夫！
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              「カッチャウ」は全国各地で行われているオートオークションに加盟しております。<br />
              全国からあなたにピッタリの1台を一緒に探しましょう。
            </p>
            
            <div className="bg-kacchau-yellow-50 border-l-4 border-kacchau p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                まずはご希望をお聞かせください！
              </h3>
              <p className="text-gray-700 leading-relaxed">
                車種が決まっていれば、直ぐにお探しします。<br />
                「こんな機能が付いた車が欲しい」「免許を取った子どもに車を買ってあげたい」「予算内で何とかしたい」などなど、何でもご相談ください。<br />
                専門スタッフが親身になって、お話をお聞きします。
              </p>
            </div>
          </div>

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
    </div>
  );
}
