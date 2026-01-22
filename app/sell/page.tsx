'use client';

import Link from 'next/link';
import { ChevronRight, Calendar } from 'lucide-react';
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
            カッチャウの高額査定システムで高価買い取りが可能です。
          </p>
          <p className="text-base md:text-lg">
            あなたの愛車を、データだけにとらわれない独自査定で適正価格で買い取ります。
          </p>
        </div>
      </section>


      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              「車が不要になったから処分したい」「車庫に眠った車がある」<br />
              などなど要らないクルマの処分に困ったら、カッチャウにお声掛けください！
            </p>

            <div className="bg-kacchau-yellow-50 border-l-4 border-kacchau p-6">
              <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                あなたの愛車を、カッチャウ独自査定で高価買取させていただきます。<br />
                事故車や長走行距離車、古い年式でも大丈夫です。まずは一度お車を見せてください！
              </p>
            </div>

            {/* 特徴リスト */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-kacchau-yellow-50 to-white p-6 rounded-lg border border-kacchau-yellow-200">
                <h3 className="text-xl font-bold text-kacchau mb-3">✓ 高価買取</h3>
                <p className="text-gray-700">データだけにとらわれない、カッチャウオリジナルの高価査定システム</p>
              </div>
              <div className="bg-gradient-to-br from-kacchau-yellow-50 to-white p-6 rounded-lg border border-kacchau-yellow-200">
                <h3 className="text-xl font-bold text-kacchau mb-3">✓ 幅広い対応</h3>
                <p className="text-gray-700">事故車、長走行距離車、古い年式の車も大歓迎</p>
              </div>
              <div className="bg-gradient-to-br from-kacchau-yellow-50 to-white p-6 rounded-lg border border-kacchau-yellow-200">
                <h3 className="text-xl font-bold text-kacchau mb-3">✓ 全国ネットワーク</h3>
                <p className="text-gray-700">全国規模のネットワークで最適な売却先を確保</p>
              </div>
              <div className="bg-gradient-to-br from-kacchau-yellow-50 to-white p-6 rounded-lg border border-kacchau-yellow-200">
                <h3 className="text-xl font-bold text-kacchau mb-3">✓ スピード対応</h3>
                <p className="text-gray-700">迅速な査定と手続きで、スムーズな売却をサポート</p>
              </div>
            </div>
          </div>

          {/* 無料査定フォーム */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              無料査定お申し込み
            </h2>
            <p className="text-gray-700 mb-8">
              下記フォームに必要事項をご入力のうえ送信してください。担当スタッフより折り返しご連絡いたします。<br />
              おクルマのお写真は任意ですが、よりスムーズな査定のために可能であればご添付ください。
            </p>

            <form className="space-y-6">
              {/* お名前 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  お名前 <span className="text-kacchau text-sm">必須</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  メールアドレス <span className="text-gray-500 text-sm">任意</span>
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                />
              </div>


              {/* 電話番号 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  お電話番号 <span className="text-kacchau text-sm">必須</span>
                </label>
                <input
                  type="tel"
                  className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                />
              </div>

              {/* 車種・年式 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  車種・年式 <span className="text-kacchau text-sm">必須</span>
                </label>
                <input
                  type="text"
                  placeholder="例：トヨタ プリウス 2018年式"
                  className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                />
                {/* ★ 追加：注意書き */}
                <p className="mt-2 text-sm text-gray-600">
                  ※年式・車種が不明な方はお電話ください。（
                  <a href="tel:0952-27-0060" className="text-kacchau hover:underline font-semibold">
                    ℡0952-27-0060
                  </a>
                  ）
                </p>
              </div>

              {/* 走行距離 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  走行距離 <span className="text-kacchau text-sm">必須</span>
                </label>
                <input
                  type="text"
                  placeholder="例：50,000km"
                  className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                />
              </div>

              {/* 写真アップロード（任意） */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  おクルマの写真 <span className="text-gray-500 text-sm">任意</span>
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  外装（前・後ろ・側面）、内装、キズやヘコミがある箇所などのお写真があると、よりスムーズに査定できます。
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border rounded-lg px-4 py-3 shadow-sm bg-white"
                />
                {images.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        className="w-24 h-24 border rounded-lg overflow-hidden bg-gray-100"
                      >
                        <img
                          src={URL.createObjectURL(img)}
                          alt={`upload-${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
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

              {/* オンライン予約（任意） */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  オンライン予約 <span className="text-gray-500 text-sm">任意</span>
                </label>
                <p className="text-sm text-gray-600 mb-3">
                  ご来店またはオンライン査定のご希望日時がございましたら、ご選択ください。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">ご希望日</label>
                    <input
                      type="date"
                      className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">ご希望時間帯</label>
                    <select className="w-full border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau">
                      <option value="">選択してください</option>
                      <option value="morning">午前（9:00-12:00）</option>
                      <option value="afternoon">午後（13:00-17:00）</option>
                      <option value="evening">夕方（17:00-19:00）</option>
                    </select>
                  </div>
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
                      当社プライバシーポリシー
                    </a>
                    に同意する <span className="text-kacchau text-sm">必須</span>
                  </span>
                </label>
              </div>

              {/* 個人情報利用に関する注意書き */}
              <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                ※お客様からご提供頂いた個人情報は、買取のご案内（電話・メール等）及びサービス提供のために利用いたします。
              </p>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-block w-full md:w-auto px-12 py-4 bg-kacchau text-gray-900 text-lg font-bold rounded-full hover:bg-kacchau-dark transition-colors shadow-lg"
                >
                  無料査定を申し込む
                </button>
              </div>
            </form>
          </div>

          {/* ★ 新規追加：オンライン予約セクション */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <div className="bg-kacchau-yellow-50 p-6 rounded-lg border-2 border-kacchau-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-kacchau" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">
                  オンライン予約 <span className="text-gray-500 text-base font-normal ml-2">（任意）</span>
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                査定のご来店予約をオンラインで受け付けています。<br />
                以下のカレンダーからご都合の良い日時をお選びください。
              </p>
              
              {/* Timerex埋め込みエリア */}
              <div className="bg-white p-4 rounded-lg border-2 border-gray-300 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Calendar size={48} className="mx-auto mb-4" />
                  <p className="font-semibold mb-2">
                    Timerexカレンダーをここに埋め込みます
                  </p>
                  <p className="text-sm">
                    実装時には、Timerexの埋め込みコードを<br />
                    このエリアに挿入してください
                  </p>
                </div>
                {/* 
                実装例:
                <iframe 
                  src="YOUR_TIMEREX_EMBED_URL" 
                  width="100%" 
                  height="600" 
                  frameBorder="0"
                ></iframe>
                */}
              </div>
            </div>
          </div>

          {/* 既存のボタン群 */}
          <div className="text-center mt-12 space-y-4">
            <Link 
              href="/shop"
              className="inline-block px-12 py-4 bg-kacchau text-gray-900 text-lg font-bold rounded-full hover:bg-kacchau-dark transition-colors shadow-lg"
            >
              お問い合わせは各店舗まで
            </Link>
            <div className="text-sm text-gray-600">
              または
            </div>
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-white text-kacchau text-lg font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg border-2 border-kacchau"
            >
              オンラインで相談予約
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}