'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { ChevronRight, Phone, Mail, Calendar, CheckCircle, FileText, Wrench, CreditCard } from 'lucide-react';
import { useState } from 'react';


export default function InspectionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    carYear: '',
    inspectionExpiry: '',
    preferredDate: '',
    preferredTime: '',
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

  const inspectionSteps = [
    {
      number: '1',
      title: '入庫予約・事前見積り',
      icon: Calendar,
      description: '店頭・お電話・WEBフォームから、車検のお見積り・ご入庫予約を承ります。',
      details: [
        'ご希望の日時をお伺いし、工場の空き状況を確認したうえで入庫日を確定いたします。',
        'ご来店時には、簡単なヒアリングと実車チェックを行い、必要な整備内容をわかりやすくご説明します。'
      ]
    },
    {
      number: '2',
      title: '車検ご入庫・お預かり',
      icon: FileText,
      description: 'ご予約いただいた日時に、おクルマを店頭までお持ち込みください。',
      details: [
        '必要書類を確認後、車両をお預かりいたします。'
      ],
      requiredItems: [
        '車検証（自動車検査証）',
        '自賠責保険証明書'
      ]
    },
    {
      number: '3',
      title: '車検整備',
      icon: Wrench,
      description: '国家資格を持つ整備士が、おクルマの状態を丁寧に点検・整備します。',
      details: []
    },
    {
      number: '4',
      title: 'お支払い・ご返却',
      icon: CreditCard,
      description: '整備内容のご説明後、料金をお支払いいただき、おクルマをご返却いたします。',
      details: [
        '今後のメンテナンスのポイントも、わかりやすくご案内いたします。',
        '※各種クレジットカード・電子マネーに対応しています。'
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
          <span className="text-gray-600">車検見積・予約</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kacchau to-kacchau-dark text-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">車検見積・予約</h1>
          <p className="text-lg md:text-xl mb-2">
            おクルマの状態に合わせて、安心・納得の車検をご案内します。
          </p>
          <p className="text-base md:text-lg">
            店頭・お電話・WEBフォームから、いつでもお気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* 車検の流れ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-kacchau">
            車検の流れ
          </h2>
          <div className="space-y-8">
            {inspectionSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6">
                  {/* ステップ番号 */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-kacchau rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                      {step.number}
                    </div>
                  </div>
                  {/* コンテンツ */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <step.icon size={32} className="text-kacchau" />
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">{step.description}</p>
                    {step.details.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={20} className="text-kacchau flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.requiredItems && (
                      <div className="bg-white rounded-lg p-4 border-2 border-kacchau">
                        <h4 className="font-bold text-gray-900 mb-3">当日お持ちいただくもの</h4>
                        <ul className="space-y-2">
                          {step.requiredItems.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-kacchau rounded-full"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold text-kacchau mb-4 pb-4 border-b-4 border-kacchau">
              車検のお問い合わせ・見積りフォーム
            </h2>
            <p className="text-gray-700 mb-8">
              車検に関するご相談・お見積りは、下記フォームよりお気軽にお問い合わせください。
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

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  車検満了日 <span className="text-kacchau">*</span>
                </label>
                <input
                  type="date"
                  name="inspectionExpiry"
                  required
                  value={formData.inspectionExpiry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-kacchau focus:outline-none"
                />
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

              {/* ★ Timerexカレンダーセクションを追加 */}
              <div>
                <div className="bg-kacchau-yellow-50 p-6 rounded-lg border-2 border-kacchau-yellow-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-kacchau" size={32} />
                    <h3 className="text-xl font-bold text-gray-800">
                      オンライン予約 <span className="text-gray-500 text-base font-normal ml-2">（任意）</span>
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    車検のご入庫予約をオンラインで受け付けています。<br />
                    以下のカレンダーからご都合の良い日時をお選びください。
                  </p>
                  
                  {/* Timerex埋め込みエリア */}
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-300 min-h-[400px]">
                    {/* Begin TimeRex Widget */}
                    <div 
                      id="timerex_calendar" 
                      data-url="https://timerex.net/s/homepage.business.fc_8d0c/0b297a94"
                    ></div>
                    
                    <Script 
                      id="timerex_embed" 
                      src="https://asset.timerex.net/js/embed.js"
                      strategy="lazyOnload"
                      onLoad={() => {
                        if (typeof window !== 'undefined' && (window as any).TimerexCalendar) {
                          (window as any).TimerexCalendar();
                        }
                      }}
                    />
                    {/* End TimeRex Widget */}
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
                ※お客様からご提供頂いた個人情報は、車検のご案内（電話・メール等）及びサービス提供のために利用いたします。
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">お電話でのお問い合わせ</h2>
          <p className="text-gray-700 mb-8">
            車検に関するご質問は、お電話でも承っております。
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
          <p className="text-gray-600 mt-4">受付時間: 9:00〜19:00(不定休)</p>
        </div>
      </section>

      {/* Page Top Button */}
      <section className="py-12 pb-32 sm:pb-12 text-center bg-gray-50">
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