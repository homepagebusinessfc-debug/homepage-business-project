'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [selectedMaker, setSelectedMaker] = useState<string | null>(null);
  const [selectedBody, setSelectedBody] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

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

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.set('keyword', keyword);
    if (selectedMaker) params.set('maker', selectedMaker);
    if (selectedBody) params.set('body', selectedBody);
    if (selectedPrice) params.set('price', selectedPrice);

    // 必要に応じて検索結果ページを実装
    window.location.href = `/search/result?${params.toString()}`;
  };

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

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-red-600 mb-8 pb-4 border-b-4 border-red-600">
            クルマを探す・買う
          </h1>

          <p className="text-2xl text-gray-700 mb-12 font-semibold">
            あなたが欲しいのは新車？中古車？
          </p>

          {/* ▼ ここから追加：検索UIブロック ▼ */}
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
                className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
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
                        ? 'bg-red-600 text-white border-red-600'
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
                        ? 'bg-red-600 text-white border-red-600'
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
                        ? 'bg-red-600 text-white border-red-600'
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
                className="inline-block px-10 py-3 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
              >
                この条件で検索する
              </button>
            </div>
          </div>
          {/* ▲ 追加ここまで ▲ */}

          {/* 新車セクション（元の文章そのまま） */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">新車</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              「カッチャウ」は、国内全メーカー全車種を取扱い、海外メーカーも取扱いございます。
            </p>
          </div>

          {/* 中古車セクション（元の文章そのまま） */}
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
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
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

          {/* お問い合わせボタン（元のまま） */}
          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
