'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Phone, Mail, Calendar, CheckCircle, Droplet, Wrench, DollarSign, Clock } from 'lucide-react';
import { useState } from 'react';

export default function OilChangePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    carYear: '',
    preferredDate: '',
    preferredTime: '',
    serviceType: 'オイル交換',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const oilChangePoints = [
    {
      title: '交換目安',
      icon: Clock,
      items: [
        '走行距離：5,000kmごと',
        'または半年に1回が目安です',
        'おクルマの使用状況により、最適な交換タイミングをご案内します。'
      ]
    },
    {
      title: '作業内容',
      icon: Wrench,
      items: [
        'エンジンオイル交換',
        'オイル量・汚れのチェック',
        'オイルフィルター交換（ご希望の場合）',
        '簡易点検（タイヤ・バッテリー・ライト類など）'
      ]
    },
    {
      title: '料金',
      icon: DollarSign,
      items: [
        '車種・オイルの種類により異なります。',
        'お気軽にお問い合わせください。'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-kacchau hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">オイル交換</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kacchau to-kacchau-dark text-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Droplet size={48} className="text-gray-900" />
            <h1 className="text-4xl md:text-5xl font-bold">オイル交換</h1>
          </div>
          <p className="text-lg md:text-xl mb-2">
            エンジンを長く良い状態に保つためには、定期的なオイル交換が欠かせません。
          </p>
          <p className="text-base md:text-lg">
            当店では、おクルマに合わせた最適なオイルをご提案し、短時間でスムーズに交換いたします。
          </p>
        </div>
      </section>

      {/* オイル交換のポイント */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-kacchau">
            オイル交換のポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {oilChangePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-kacchau rounded-full flex items-center justify-center">
                    <point.icon size={24} className="text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{point.title}</h3>
                </div>
                <ul className="space-y-3">
                  {point.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-kacchau flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* オイル交換のメリット */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-kacchau">
            定期的なオイル交換のメリット
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'エンジン性能の維持',
                description: '新しいオイルでエンジンの動きをスムーズに保ちます。',
                icon: '⚙️'
              },
              {
                title: '燃費の向上',
                description: 'エンジンの摩擦を減らし、燃費を改善します。',
                icon: '⛽'
              },
              {
                title: 'エンジン寿命の延長',
                description: '定期的な交換で、エンジンを長持ちさせます。',
                icon: '🔧'
              },
              {
                title: 'トラブル予防',
                description: 'オイルの劣化による故障を未然に防ぎます。',
                icon: '✅'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-2 border-gray-200">
            <h2 className="text-4xl font-bold text-kacchau mb-4 pb-4 border-b-4 border-kacchau">
              オイル交換のご予約
            </h2>
            <p className="text-gray-700 mb-8">
              店頭・お電話・WEBフォームからご予約いただけます。<br />
              下記フォームよりお気軽にお問い合わせください。
            </p>

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

              <div className="grid md:grid-cols-2 gap-6">
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
                    メールアドレス <span className="text-gray-500">任意</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ご希望メニュー <span className="text-kacchau">*</span>
                </label>
                <select
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                >
                  <option value="オイル交換">オイル交換</option>
                  <option value="オイル交換 + フィルター交換">オイル交換 + フィルター交換</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    車種 <span className="text-kacchau">*</span>
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    required
                    value={formData.carModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    placeholder="例: トヨタ プリウス"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    年式 <span className="text-kacchau">*</span>
                  </label>
                  <input
                    type="text"
                    name="carYear"
                    required
                    value={formData.carYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    placeholder="例: 2020年"
                  />
                </div>
              </div>

              {/* ご質問・ご要望 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ご質問・ご要望
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                  placeholder="ご質問やご要望がございましたらご記入ください"
                ></textarea>
              </div>

              {/* オンライン予約（任意） */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  オンライン予約 <span className="text-gray-500 text-sm">任意</span>
                </label>
                <p className="text-sm text-gray-600 mb-3">
                  ご希望の入庫日時がございましたら、ご選択ください。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">ご希望日</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">ご希望時間帯</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                    >
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

              <button
                type="submit"
                className="w-full bg-kacchau text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-kacchau-dark transition-colors shadow-lg"
              >
                送信する
              </button>


              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                ※お客様からご提供頂いた個人情報は、オイル交換のご案内（電話・メール等）及びサービス提供のために利用いたします。
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">お電話でのお問い合わせ</h2>
          <p className="text-gray-700 mb-8">
            オイル交換に関するご質問は、お電話でも承っております。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0952-27-0060"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-kacchau text-gray-900 rounded-full font-bold text-lg hover:bg-kacchau-dark transition-colors shadow-md"
            >
              <Phone size={24} />
              <span>0952-27-0060</span>
            </a>
          </div>
          <p className="text-gray-600 mt-4">受付時間: 9:00〜19:00</p>
        </div>
      </section>

      {/* Page Top Button */}
      <section className="py-12 pb-32 sm:pb-12 text-center bg-white">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-8 py-4 bg-kacchau text-gray-900 rounded-full font-bold text-lg hover:bg-kacchau-dark transition-colors"
        >
          ページトップへ
        </button>
      </section>
    </div>
  );
}