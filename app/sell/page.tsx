'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function SellPage() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: any) => {
    const files = Array.from(e.target.files);
    setImages(files as File[]);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-red-600 hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">クルマを売る</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">

          <h1 className="text-4xl font-bold text-red-600 mb-8 pb-4 border-b-4 border-red-600">
            無料査定・クルマを売る
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            24時間いつでもオンライン査定を受付中。  
            おクルマの情報と写真を送るだけで、概算査定額をご案内いたします。
          </p>

          {/* 査定ステップ */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { step: 'STEP 1', text: '車両情報を入力' },
              { step: 'STEP 2', text: '写真をアップロード' },
              { step: 'STEP 3', text: '査定結果をご案内' },
            ].map((s) => (
              <div key={s.step} className="bg-red-50 p-6 rounded-lg border border-red-200 text-center">
                <p className="text-red-600 font-bold">{s.step}</p>
                <p className="text-gray-800 font-semibold mt-2">{s.text}</p>
              </div>
            ))}
          </div>

          {/* フォーム */}
          <form className="space-y-6">

            <div>
              <label className="font-semibold text-gray-700">お名前</label>
              <input type="text" className="w-full border rounded-lg px-4 py-3 mt-2" />
            </div>

            <div>
              <label className="font-semibold text-gray-700">メールアドレス</label>
              <input type="email" className="w-full border rounded-lg px-4 py-3 mt-2" />
            </div>

            <div>
              <label className="font-semibold text-gray-700">車種・年式</label>
              <input type="text" className="w-full border rounded-lg px-4 py-3 mt-2" />
            </div>

            <div>
              <label className="font-semibold text-gray-700">走行距離</label>
              <input type="text" className="w-full border rounded-lg px-4 py-3 mt-2" />
            </div>

            {/* 写真アップロード */}
            <div>
              <label className="font-semibold text-gray-700">車の写真（最大5枚）</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full border rounded-lg px-4 py-3 mt-2"
              />

              <div className="flex gap-4 mt-4">
                {images.map((img, i) => (
                  <div key={i} className="w-24 h-24 border rounded-lg overflow-hidden">
                    <img
                      src={URL.createObjectURL(img)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="font-semibold text-gray-700">ご要望・ご質問</label>
              <textarea className="w-full border rounded-lg px-4 py-3 mt-2 h-32" />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 shadow-lg"
            >
              無料査定を申し込む
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
