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
          <h1 className="text-4xl font-bold text-red-600 mb-8 pb-4 border-b-4 border-red-600">
            クルマを売る
          </h1>

          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              「車が不要になったから処分したい」「車庫に眠った車がある」<br />
              などなど要らないクルマの処分に困ったら、カッチャウにお声掛けください！
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                あなたの愛車を、カッチャウ独自査定で高価買取させていただきます。<br />
                事故車や長走行距離車、古い年式でも大丈夫です。まずは一度お車を見せてください！
              </p>
            </div>

            {/* 特徴リスト */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-3">✓ 高価買取</h3>
                <p className="text-gray-700">データだけにとらわれない、カッチャウオリジナルの高価査定システム</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-3">✓ 幅広い対応</h3>
                <p className="text-gray-700">事故車、長走行距離車、古い年式の車も大歓迎</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-3">✓ 全国ネットワーク</h3>
                <p className="text-gray-700">全国規模のネットワークで最適な売却先を確保</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-3">✓ スピード対応</h3>
                <p className="text-gray-700">迅速な査定と手続きで、スムーズな売却をサポート</p>
              </div>
            </div>
          </div>

          {/* お問い合わせボタン */}
          <div className="text-center mt-12 space-y-4">
            <Link 
              href="/shop"
              className="inline-block px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              お問い合わせは各店舗まで
            </Link>
            <div className="text-sm text-gray-600">
              または
            </div>
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-white text-red-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg border-2 border-red-600"
            >
              オンラインで相談予約
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}