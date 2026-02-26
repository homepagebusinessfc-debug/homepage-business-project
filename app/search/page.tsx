'use client';

import Link from 'next/link';
import { ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchPage() {
  const [selectedMaker, setSelectedMaker] = useState<string>('');
  const [selectedCarModel, setSelectedCarModel] = useState<string>('');
  const [selectedBody, setSelectedBody] = useState<string | null>(null);
  const [priceMin, setPriceMin] = useState<string>('');
  const [priceMax, setPriceMax] = useState<string>('');
  const [tradein, setTradein] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [requirements, setRequirements] = useState<string>('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const makers = [
    'トヨタ',
    '日産',
    'ホンダ',
    'スズキ',
    'ダイハツ',
    'マツダ',
    'スバル',
    '三菱',
    'レクサス',
    'いすゞ',
    '日野',
    'BMW',
    'メルセデス・ベンツ',
    'アウディ',
    'フォルクスワーゲン',
    'ポルシェ',
    'ボルボ',
    'プジョー',
    'ルノー',
    'シトロエン',
    'フィアット',
    'アルファロメオ',
    'ジープ',
    'フォード',
    'シボレー',
    'キャデラック',
    'テスラ',
    'ミニ',
    'ランドローバー',
    'ジャガー',
  ];

  const bodyTypes = [
    '軽自動車',
    'コンパクト',
    'セダン',
    'SUV',
    'ミニバン',
    'ワゴン',
    'クーペ',
    'オープンカー',
    'ハッチバック',
    'ステーションワゴン',
    '商用車',
    'トラック',
  ];

  const priceOptions = [
    '下限なし',
    '60万円',
    '90万円',
    '120万円',
    '150万円',
    '200万円',
    '300万円',
    '400万円',
    '500万円',
    '600万円',
    '700万円',
    '800万円',
    '900万円',
    '1000万円',
  ];

  // ▼ フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション
    if (!customerName.trim()) {
      alert('お名前（かな）を入力してください。');
      return;
    }
    if (!phoneNumber.trim()) {
      alert('電話番号を入力してください。');
      return;
    }
    if (!priceMin) {
      alert('予算の下限を選択してください。');
      return;
    }
    if (!priceMax) {
      alert('予算の上限を選択してください。');
      return;
    }
    if (!tradein) {
      alert('下取り車の有無を選択してください。');
      return;
    }
    if (!agreedToPrivacy) {
      alert('プライバシーポリシーに同意してください。');
      return;
    }

    setIsSubmitting(true);

    // フォームデータを整形
    const formData = {
      メーカー名: selectedMaker || '未選択',
      車種名: selectedCarModel || '未入力',
      ボディタイプ: selectedBody || '未選択',
      予算下限: priceMin,
      予算上限: priceMax,
      下取り車: tradein,
      お名前: customerName,
      電話番号: phoneNumber,
      メールアドレス: email || '未入力',
      ご要望: requirements || '未入力',
    };

    try {
      // ここで実際のメール送信APIを呼び出す
      // 例: await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) });
      
      // デモ用: コンソールに出力
      console.log('送信データ:', formData);
      
      // 仮の送信処理（2秒待機）
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      
      // フォームをリセット
      setSelectedMaker('');
      setSelectedCarModel('');
      setSelectedBody(null);
      setPriceMin('');
      setPriceMax('');
      setTradein('');
      setCustomerName('');
      setPhoneNumber('');
      setEmail('');
      setRequirements('');
      setAgreedToPrivacy(false);

      // 成功メッセージを表示後、トップにスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-kacchau hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">クルマを探す</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kacchau to-kacchau-dark text-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Search size={48} className="text-gray-900" />
            <h1 className="text-4xl md:text-5xl font-bold">クルマを探す</h1>
          </div>
          <p className="text-lg md:text-xl mb-2">
            直販システムで、いい車をお安く販売します。
          </p>
          <p className="text-base md:text-lg">
            全店合計100台を超える展示車から、あなたにピッタリの1台を見つけましょう。
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-2xl text-gray-700 mb-12 font-semibold">
            中古車を探す　カッチャウが車探しをサポート
          </p>

          {/* 送信成功メッセージ */}
          {submitSuccess && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-2">
                送信が完了しました！
              </h3>
              <p className="text-green-700">
                お問い合わせありがとうございます。<br />
                担当者より折り返しご連絡させていただきます。
              </p>
            </div>
          )}

          {/* ▼ 検索UIブロック */}
          <form onSubmit={handleSubmit}>
            <div className="mb-12 border border-gray-200 rounded-lg p-6 md:p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                条件からクルマを探す
              </h2>

              {/* お車について */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-kacchau">
                  お車について
                </h3>

                {/* メーカー名 */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    メーカー名
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {makers.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setSelectedMaker(m === selectedMaker ? '' : m)}
                        className={`border rounded-lg px-3 py-2 text-sm text-center transition ${
                          selectedMaker === m
                            ? 'bg-kacchau text-gray-900 border-kacchau font-semibold'
                            : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-300'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 車種名 */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    車種名
                  </label>
                  <input
                    type="text"
                    value={selectedCarModel}
                    onChange={(e) => setSelectedCarModel(e.target.value)}
                    placeholder="車種名を入力してください。"
                    className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                  />
                </div>

                {/* ボディタイプ */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    ボディタイプから選ぶ
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {bodyTypes.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() =>
                          setSelectedBody((prev) => (prev === b ? null : b))
                        }
                        className={`border rounded-lg px-3 py-2 text-sm md:text-base text-center transition ${
                          selectedBody === b
                            ? 'bg-kacchau text-gray-900 border-kacchau'
                            : 'bg-white text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 予算（価格） */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    予算（価格） <span className="text-red-600 font-bold">必須</span>
                  </label>
                  <div className="flex flex-col md:flex-row gap-3 items-center">
                    <select
                      value={priceMin}
                      onChange={(e) => setPriceMin(e.target.value)}
                      required
                      className="w-full md:w-auto flex-1 border rounded-lg px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau bg-white"
                    >
                      <option value="">選択してください</option>
                      {priceOptions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    <span className="text-gray-700 font-semibold">〜</span>
                    <select
                      value={priceMax}
                      onChange={(e) => setPriceMax(e.target.value)}
                      required
                      className="w-full md:w-auto flex-1 border rounded-lg px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau bg-white"
                    >
                      <option value="">選択してください</option>
                      <option value="上限なし">上限なし</option>
                      {priceOptions.slice(1).map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 下取り車 */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    下取り車 <span className="text-red-600 font-bold">必須</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="tradein"
                        value="有"
                        checked={tradein === '有'}
                        onChange={(e) => setTradein(e.target.value)}
                        required
                        className="mr-2 w-4 h-4 text-kacchau focus:ring-kacchau"
                      />
                      <span className="text-gray-700">有</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="tradein"
                        value="無"
                        checked={tradein === '無'}
                        onChange={(e) => setTradein(e.target.value)}
                        required
                        className="mr-2 w-4 h-4 text-kacchau focus:ring-kacchau"
                      />
                      <span className="text-gray-700">無</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* お客様について */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-kacchau">
                  お客様について
                </h3>

                {/* お名前（かな） */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    お名前（かな） <span className="text-red-600 font-bold">必須</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="例：やまだ たろう"
                    required
                    className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                  />
                </div>

                {/* 電話番号 */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    電話番号（半角数字） <span className="text-red-600 font-bold">必須</span>
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="例：09012345678"
                    required
                    pattern="[0-9]{10,11}"
                    className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                  />
                </div>

                {/* メールアドレス */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    メールアドレス <span className="text-gray-500 text-sm">（任意）</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="例：example@example.com"
                    className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau"
                  />
                </div>
                
                {/* ご要望・ご質問など */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    ご要望・ご質問など
                  </label>
                  <textarea
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="ご質問やご要望がございましたらご記入ください。"
                    rows={5}
                    className="w-full border rounded-lg px-4 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-kacchau resize-none"
                  />
                </div>

                {/* プライバシーポリシー同意 */}
                <div className="mb-6">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToPrivacy}
                      onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                      required
                      className="mr-3 mt-1 w-5 h-5 text-kacchau focus:ring-kacchau rounded"
                    />
                    <span className="text-gray-700">
                      <Link href="/privacy" className="text-kacchau hover:underline font-semibold">
                        当社プライバシーポリシー
                      </Link>
                      に同意する <span className="text-red-600 font-bold">必須</span>
                    </span>
                  </label>
                  <p className="text-sm text-gray-600 mt-2 ml-8">
                    ※お客様からご提供頂いた個人情報は、販売のご案内（電話・メール等）及びサービス提供のために利用いたします。
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !agreedToPrivacy}
                  className={`inline-block px-10 py-3 text-lg font-bold rounded-full transition-colors shadow-lg ${
                    !isSubmitting && agreedToPrivacy
                      ? 'bg-kacchau text-gray-900 hover:bg-kacchau-dark cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? '送信中...' : '車探しを依頼する'}
                </button>
              </div>
            </div>
          </form>

          {/* ▼ 以下は既存の文章 */}
          <div className="mb-12 mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">新車</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              「カッチャウ」は、国内全メーカー全車種を取扱い、海外メーカーも取扱いございます。
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">中古車</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              全店合計100台を超える展示車が、あなたをお待ちしております。<br />
              欲しいクルマが店頭に無くても大丈夫!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              「カッチャウ」は全国各地で行われているオートオークションに加盟しております。<br />
              全国からあなたにピッタリの1台を一緒に探しましょう。
            </p>
            
            <div className="bg-kacchau-yellow-50 border-l-4 border-kacchau p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                まずはご希望をお聞かせください!
              </h3>
              <p className="text-gray-700 leading-relaxed">
                車種が決まっていれば、直ぐにお探しします。<br />
                「こんな機能が付いた車が欲しい」「免許を取った子どもに車を買ってあげたい」「予算内で何とかしたい」などなど、何でもご相談ください。<br />
                専門スタッフが親身になって、お話をお聞きします。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-kacchau text-gray-900 text-lg font-bold rounded-full hover:bg-kacchau-dark transition-colors shadow-lg"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

}

