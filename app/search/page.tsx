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

          {/* Title */}
          <h1 className="text-4xl font-bold text-red-600 mb-8 pb-4 border-b-4 border-red-600">
            クルマを探す・買う
          </h1>

          <p className="text-xl text-gray-700 mb-10 font-semibold">
            ご希望の条件から、あなたにピッタリの1台をお探しします。
          </p>

          {/* Search Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">キーワードで探す</h2>
            <input
              type="text"
              placeholder="例：N-BOX、プリウス、SUV など"
              className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Condition Search */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">条件から探す</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">価格帯で選ぶ</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>〜50万円</li>
                  <li>50〜100万円</li>
                  <li>100〜150万円</li>
                  <li>150〜200万円</li>
                  <li>200万円以上</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">ボディタイプで選ぶ</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>軽自動車</li>
                  <li>コンパクト</li>
                  <li>セダン</li>
                  <li>SUV</li>
                  <li>ミニバン</li>
                </ul>
              </div>
            </div>
          </div>

          {/* New Car Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">新車</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              「カッチャウ」では、国内全メーカー・全車種に対応。<br />
              グレード・カラー・オプションなど、細かなご要望にもお応えします。
            </p>
          </div>

          {/* Used Car Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">中古車</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              全店で100台以上の展示車をご用意。<br />
              店頭にない車両も、全国のオートオークションからお探しします。
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                まずはご希望をお聞かせください
              </h3>
              <p className="text-gray-700 leading-relaxed">
                「この車種が欲しい」「予算内で探したい」「子ども用の車を探している」など、<br />
                どんなご相談でも大歓迎です。専門スタッフが丁寧にサポートいたします。
              </p>
            </div>
          </div>

          {/* Contact Button */}
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
