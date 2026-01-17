'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function QuestionPage() {
  const faqs = [
    {
      question: '車を買う際に、必要な書類や準備する物はありますか？',
      answer: [
        {
          title: '普通車の場合',
          content: 'ご準備いただく物は「実印」「印鑑証明書」です。後ほど「委任状」や「車庫証明申請書」という書類も必要となりますが、それはこちらで準備しております。まずは上記2点をご準備ください。'
        },
        {
          title: '軽自動車の場合',
          content: 'ご準備いただく物は「認め印」「住民票」です。'
        }
      ]
    },
    {
      question: '支払いは、現金以外では何がありますか？',
      answer: [
        {
          content: 'クレジットローンをご準備しております。（各種クレジット会社完備）\nまた購入ではなく、カーリースという選択肢もございます。どちらも審査がある為、その点が心配という方は、自社ローンもございます。\nお支払方法について様々なご提案が出来ますので、まずはお気軽にご相談ください。'
        }
      ]
    },
    {
      question: '中古車が欲しいけど、走行距離やグレード等希望は聞いてもらえるの？',
      answer: [
        {
          content: 'もちろんです。まずはあなたのご希望をお聞かせください。\n店舗展示車にご希望の車種・グレードが無い場合は、全国で行われているオートオークションにてお探し致します。\n毎日1万台を超える中古車がオークションにて全国で取引されています。あなただけの1台を一緒に探しましょう。'
        }
      ]
    },
    {
      question: 'ナンバープレートを好きな番号にしたいんですが。',
      answer: [
        {
          content: '承っております。\n希望ナンバー制度というものを利用します。4桁以下のアラビア数字の部分をご指定下さい。\n希望する番号によっては抽選となります。（「･3-33」や「･7-77」等）\n詳しくは各店舗へお問合せください。'
        }
      ]
    },
    {
      question: '購入後の保証はありますか？',
      answer: [
        {
          content: '保証期間としては、\n・中古車は3ヶ月\n・新車は3年もしくは5年（メーカーや車種等によります）\n安心してお車のことはお任せください。'
        }
      ]
    },
    {
      question: '車検は数日間預ける必要がありますか。その日のうちに返却してもらうことはできますか。',
      answer: [
        {
          content: '当日中のご返却にも対応しております。\nお忙しいお客様でも、できる限り一度のご来店で完了できるよう配慮いたします。'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-red-600 hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">よくある質問</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-red-600 mb-12 pb-4 border-b-4 border-red-600">
            よくある質問
          </h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-600"
              >
                <h2 className="text-xl font-bold text-red-600 mb-4">
                  Q. {faq.question}
                </h2>
                <div className="space-y-4">
                  {faq.answer.map((ans, ansIndex) => (
                    <div key={ansIndex}>
                      {ans.title && (
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                          {ans.title}
                        </h3>
                      )}
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {ans.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* その他の質問 */}
          <div className="mt-12 bg-red-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              その他のご質問はありますか？
            </h2>
            <p className="text-gray-700 mb-6">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えします。
            </p>
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
