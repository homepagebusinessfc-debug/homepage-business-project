'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function SearchPage() {
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

          {/* 新車セクション */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">新車</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              「カッチャウ」は、国内全メーカー全車種を取扱い、海外メーカーも取扱いございます。
            </p>
          </div>

          {/* 中古車セクション */}
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

          {/* お問い合わせボタン */}
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