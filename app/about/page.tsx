import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-red-600 hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">カッチャウについて</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-red-600 mb-8 pb-4 border-b-4 border-red-600">
            カッチャウについて
          </h1>

          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              「カッチャウ」は、佐賀県下に5店舗を構えるクルマの販売・買取専門店です。
            </p>

            {/* サービス紹介 */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border-2 border-red-200">
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                  クルマを買いたい！
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  そんな時は「カッチャウ」におまかせください！<br />
                  きっとあなただけの素敵な1台をご提供します。
                </p>
                <Link 
                  href="/search"
                  className="inline-block mt-4 text-red-600 font-semibold hover:underline"
                >
                  クルマを探す →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border-2 border-red-200">
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                  クルマを売りたい！
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  そんな時は「カッチャウ」におまかせください！<br />
                  きっとあなたの満足のいく査定をいたします。
                </p>
                <Link 
                  href="/sell"
                  className="inline-block mt-4 text-red-600 font-semibold hover:underline"
                >
                  クルマを売る →
                </Link>
              </div>
            </div>

            {/* 強調メッセージ */}
            <div className="bg-red-600 text-white p-8 rounded-lg text-center mt-12">
              <p className="text-2xl font-bold">
                クルマで迷ったなら「カッチャウ」にご相談ください！
              </p>
            </div>

            {/* カッチャウの特徴 */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">カッチャウの特徴</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🚗</div>
                  <h3 className="text-xl font-bold mb-2">豊富な在庫</h3>
                  <p className="text-gray-600">全店合計100台以上の展示車</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-2">高価買取</h3>
                  <p className="text-gray-600">独自査定システムで高額査定</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🏪</div>
                  <h3 className="text-xl font-bold mb-2">県内5店舗</h3>
                  <p className="text-gray-600">アクセスしやすい立地</p>
                </div>
              </div>
            </div>

            {/* 運営会社情報 */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
              <p className="text-sm text-gray-600">
                ※「カッチャウ」は、株式会社ローリングキッズが運営・管理しております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}