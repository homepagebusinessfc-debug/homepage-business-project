import Link from 'next/link';
import { ChevronRight, Clock, DollarSign, Car, Truck } from 'lucide-react';

export default function RentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-red-600 hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">レンタカー</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-red-600 mb-8 pb-4 border-b-4 border-red-600">
            レンタカー
          </h1>

          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              レンタカーもご用意しております。
            </p>

            {/* 料金情報 */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-red-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">料金</h2>
              </div>
              <div className="space-y-2 text-lg text-gray-700">
                <p className="font-semibold">10分100円～ / 1時間600円～</p>
                <p>1時間から貸し出し可能です。</p>
              </div>
            </div>

            {/* 車両タイプ */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="text-blue-600" size={32} />
                  <h3 className="text-xl font-bold text-gray-800">普通車</h3>
                </div>
                <p className="text-gray-700">
                  お出掛けやドライブに最適な普通車を多数ご用意しております。
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="text-orange-600" size={32} />
                  <h3 className="text-xl font-bold text-gray-800">トラック</h3>
                </div>
                <p className="text-gray-700">
                  荷物運びや引っ越しに便利なトラックもご準備しております。
                </p>
              </div>
            </div>

            {/* 利用シーン */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                こんなシーンでご利用ください
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center">
                  <div className="text-3xl mb-2">🚗</div>
                  <p className="font-semibold">お出掛け</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <p className="font-semibold">荷物運び</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center">
                  <div className="text-3xl mb-2">🏠</div>
                  <p className="font-semibold">引っ越し</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center">
                  <div className="text-3xl mb-2">🛒</div>
                  <p className="font-semibold">買い物</p>
                </div>
              </div>
            </div>

            {/* ご利用の流れ */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                ご利用の流れ
              </h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h3 className="font-bold text-lg">お電話または店舗でご予約</h3>
                    <p className="text-gray-600">利用日時と車種をお伝えください</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h3 className="font-bold text-lg">ご来店・手続き</h3>
                    <p className="text-gray-600">運転免許証をお持ちください</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h3 className="font-bold text-lg">ご出発</h3>
                    <p className="text-gray-600">安全運転でお楽しみください</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <h3 className="font-bold text-lg">ご返却・精算</h3>
                    <p className="text-gray-600">ご利用時間に応じて精算いたします</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* お問い合わせボタン */}
          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              ご予約・お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}