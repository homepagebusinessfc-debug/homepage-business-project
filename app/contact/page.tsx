'use client';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームデータを送信する処理を実装
    console.log('Form submitted:', formData);
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-kacchau hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">お問い合わせ</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-kacchau mb-8 pb-4 border-b-4 border-kacchau">
            お問い合わせ
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* お問い合わせフォーム */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                お問い合わせフォーム
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    お名前 <span className="text-kacchau">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    メールアドレス <span className="text-kacchau">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    電話番号 <span className="text-kacchau">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    お問い合わせ内容 <span className="text-kacchau">*</span>
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                  >
                    <option value="">選択してください</option>
                    <option value="purchase">車の購入について</option>
                    <option value="sell">車の売却について</option>
                    <option value="oil_change">オイル交換</option>
                    <option value="inspection">車検見積・予約</option>
                    <option value="rental">レンタカー（代車）について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    ご希望の来店日時 <span className="text-gray-500 text-sm">（任意）</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    >
                      <option value="">時間帯</option>
                      <option value="morning">午前（9:00-12:00）</option>
                      <option value="afternoon">午後（13:00-17:00）</option>
                      <option value="evening">夕方（17:00-19:00）</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    メッセージ <span className="text-kacchau">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    placeholder="お問い合わせ内容を詳しくお書きください"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-kacchau text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-kacchau-dark transition-colors shadow-lg"
                >
                  送信する
                </button>

                {/* 🆕 個人情報の取り扱いに関する注意書き */}
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  ※お客様からご提供頂いた個人情報は、お車の買取、販売など当社サービスのご案内（電話・メール等）及びご提供のために利用いたします。
                </p>
              </form>
            </div>

            {/* 店舗情報・カレンダー予約 */}
            <div className="space-y-8">
              {/* Timerex カレンダー統合エリア */}
              <div className="bg-kacchau-yellow-50 p-6 rounded-lg border-2 border-kacchau-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-kacchau" size={32} />
                  <h2 className="text-2xl font-bold text-gray-800">
                    オンライン予約 <span className="text-gray-500 text-base font-normal ml-2">（任意）</span>
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  ご来店の予約をオンラインで受け付けています。<br />
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

              {/* 電話でのお問い合わせ */}
              <div className="bg-gradient-to-br from-kacchau-yellow-50 to-white p-6 rounded-lg border border-kacchau-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-kacchau" size={32} />
                  <h2 className="text-2xl font-bold text-gray-800">
                    お電話でのお問い合わせ
                  </h2>
                </div>
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

              {/* 所在地 */}
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-kacchau" size={32} />
                  <h2 className="text-2xl font-bold text-gray-800">
                    所在地
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  〒840-0027<br />
                  佐賀市本庄町大字本庄968-1<br />
                  TEL: 0952-27-0060
                </p>
                <Link 
                  href="/shop"
                  className="inline-block mt-4 text-kacchau font-semibold hover:underline"
                >
                  全店舗を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}