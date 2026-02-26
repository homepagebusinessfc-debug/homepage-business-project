'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function SellPage() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setImages(files as File[]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-kacchau hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">クルマを売る</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kacchau to-kacchau-dark text-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-6xl font-bold">￥</span>
            <h1 className="text-4xl md:text-5xl font-bold">クルマを売る</h1>
          </div>
          <p className="text-lg md:text-xl mb-2">
            カッチャウの高額買取システムで、あなたの愛車を最高値で。
          </p>
          <p className="text-base md:text-lg">
            他店の見積もりよりも高く買い取る自信があります！
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-kacchau mb-8 pb-4 border-b-4 border-kacchau">
            無料査定お申し込み
          </h2>

          <form className="space-y-8">
            {/* お客様情報 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">お客様情報</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    お名前 <span className="text-kacchau">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    電話番号 <span className="text-kacchau">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  メールアドレス <span className="text-kacchau">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* 車両情報 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">車両情報</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    メーカー <span className="text-kacchau">*</span>
                  </label>
                  <select
                    required
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                  >
                    <option value="">選択してください</option>
                    <option value="toyota">トヨタ</option>
                    <option value="nissan">ニッサン</option>
                    <option value="honda">ホンダ</option>
                    <option value="mazda">マツダ</option>
                    <option value="subaru">スバル</option>
                    <option value="suzuki">スズキ</option>
                    <option value="daihatsu">ダイハツ</option>
                    <option value="mitsubishi">ミツビシ</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    車種名 <span className="text-kacchau">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                    placeholder="例: プリウス"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    年式
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                    placeholder="例: 2020年"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    走行距離
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                    placeholder="例: 5万km"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    カラー
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                    placeholder="例: ホワイト"
                  />
                </div>
              </div>

              {/* 車両写真アップロード */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  車両写真 <span className="text-gray-500 text-sm">（任意・最大5枚）</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                />
                {images.length > 0 && (
                  <p className="mt-2 text-sm text-gray-600">
                    {images.length}枚の画像が選択されています
                  </p>
                )}
              </div>

              {/* ご要望 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ご要望・ご質問など
                </label>
                <textarea
                  className="w-full border rounded-lg px-4 py-3 shadow-sm h-32 focus:outline-none focus:ring-2 focus:ring-kacchau"
                  placeholder="ご希望の査定方法（来店・出張など）やご相談事項があればご記入ください。"
                />
              </div>

              {/* タスク3: 日付選択UI（TimeRex削除） */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ご希望の査定日時 <span className="text-gray-500 text-sm">（任意）</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="preferredDate"
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                  />
                  <select
                    name="preferredTime"
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                  >
                    <option value="">時間帯</option>
                    <option value="morning">午前（9:00-12:00）</option>
                    <option value="afternoon">午後（13:00-17:00）</option>
                    <option value="evening">夕方（17:00-19:00）</option>
                  </select>
                </div>
              </div>

              {/* プライバシーポリシー同意チェックボックス */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 text-kacchau border-gray-300 rounded focus:ring-2 focus:ring-kacchau"
                  />
                  <span className="text-gray-700">
                    <a href="/privacy" target="_blank" className="text-kacchau hover:underline font-semibold">
                      プライバシーポリシー
                    </a>
                    に同意します
                  </span>
                </label>
              </div>
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full bg-kacchau text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-kacchau-dark transition-colors shadow-lg"
            >
              無料査定を申し込む
            </button>
          </form>

          {/* お問い合わせ情報 */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">お電話でのお問い合わせ</h3>
            <div className="bg-gradient-to-br from-kacchau-yellow-50 to-white p-6 rounded-lg border border-kacchau-yellow-200">
              <a 
                href="tel:0952-27-0060"
                className="text-3xl font-bold text-kacchau hover:text-kacchau-dark transition-colors"
              >
                0952-27-0060
              </a>
              <p className="text-gray-600 mt-2">
                受付時間: 9:00〜19:00（不定休）
              </p>
            </div>
          </div>
        </div>

        {/* 買取の流れ */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-kacchau mb-8 pb-4 border-b-4 border-kacchau">
            買取の流れ
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-kacchau rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">お申し込み</h3>
                <p className="text-gray-700">
                  上記フォームまたはお電話でお気軽にお申し込みください。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-kacchau rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">査定</h3>
                <p className="text-gray-700">
                  ご来店または出張にて、専門スタッフが丁寧に査定いたします。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-kacchau rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">ご契約</h3>
                <p className="text-gray-700">
                  査定額にご納得いただけましたら、その場でご契約。必要書類もご案内します。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-kacchau rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">お支払い</h3>
                <p className="text-gray-700">
                  手続き完了後、迅速にお支払いいたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
