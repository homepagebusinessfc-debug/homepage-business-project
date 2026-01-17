'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-red-600 hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">クルマを売る</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">

          {/* Title */}
          <h1 className="text-4xl font-bold text-red-600 mb-8 pb-4 border-b-4 border-red-600">
            クルマを売る
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            「車を手放したい」「乗り換えを考えている」「車庫に眠っている車がある」など、<br />
            おクルマの売却をご検討の際は、ぜひカッチャウにお任せください。
          </p>

          {/* Highlight Box */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-10">
            <p className="text-xl text-gray-800 font-semibold leading-relaxed">
              カッチャウ独自の査定システムで、あなたの愛車を高価買取いたします。<br />
              事故車・長距離走行車・古い年式でも大歓迎。まずはお気軽にご相談ください。
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100">
              <h3 className="text-xl font-bold text-red-600 mb-3">✓ 高価買取</h3>
              <p className="text-gray-700">市場データだけに頼らない、独自の査定基準でしっかり評価します。</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100">
              <h3 className="text-xl font-bold text-red-600 mb-3">✓ 幅広い対応</h3>
              <p className="text-gray-700">事故車・不動車・古い車でも買取可能です。</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100">
              <h3 className="text-xl font-bold text-red-600 mb-3">✓ 全国ネットワーク</h3>
              <p className="text-gray-700">全国の販売網・オークションを活用し、最適な売却先を確保します。</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100">
              <h3 className="text-xl font-bold text-red-600 mb-3">✓ スピード対応</h3>
              <p className="text-gray-700">査定から売却手続きまでスムーズに対応いたします。</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mt-12 space-y-4">
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              24時間いつでもオンライン査定申込
            </Link>

            <div className="text-sm text-gray-600">または</div>

            <Link 
              href="/shop"
              className="inline-block px-12 py-4 bg-white text-red-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg border-2 border-red-600"
            >
              お近くの店舗に相談する
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
