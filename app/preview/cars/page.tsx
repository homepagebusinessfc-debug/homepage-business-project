'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// 車両データの型定義
interface CarData {
  name: string;
  id: number;
  type: 'new' | 'used';
  category: string;
  maker: string;
  image: string;
  year: string;
  mileage: string;
  repairHistory: string;
  transmission: string;
  drive: string;
  displacement: string;
  color: string;
  warranty: string;
  totalPrice: number;
  vehiclePrice: number;
  fees: number;
  published: boolean;
  updatedAt: string;
}

export default function CarPreviewPage() {
  const searchParams = useSearchParams();
  const [car, setCar] = useState<CarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // URLパラメータから車両IDを取得
  const carId = searchParams.get('id');

  useEffect(() => {
    // 車両データを取得
    async function fetchCarData() {
      if (!carId) {
        setError('車両IDが指定されていません');
        setLoading(false);
        return;
      }

      try {
        // APIから車両データを取得
        const response = await fetch(`/api/cars`);
        if (response.ok) {
          const data = await response.json();
          // 指定されたIDの車両を検索
          const foundCar = data.find((c: any) => c.id === parseInt(carId));
          if (foundCar) {
            setCar(foundCar);
          } else {
            setError('指定された車両が見つかりません');
          }
        } else {
          setError('車両データの取得に失敗しました');
        }
      } catch (error) {
        console.error('車両データの取得に失敗しました:', error);
        setError('車両データの取得中にエラーが発生しました');
      } finally {
        setLoading(false);
      }
    }

    fetchCarData();
  }, [carId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-kacchau"></div>
          <p className="mt-4 text-gray-600">車両情報を読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">エラー</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <Link
            href="/cars"
            className="inline-block px-6 py-3 bg-kacchau text-gray-900 rounded-full font-bold hover:bg-kacchau-dark transition-colors"
          >
            車両一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">車両が見つかりません</h2>
          <p className="text-gray-700 mb-6">指定された車両が見つかりませんでした。</p>
          <Link
            href="/cars"
            className="inline-block px-6 py-3 bg-kacchau text-gray-900 rounded-full font-bold hover:bg-kacchau-dark transition-colors"
          >
            車両一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 戻るボタン */}
        <div className="mb-8">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-kacchau hover:underline font-semibold"
          >
            ← 車両一覧に戻る
          </Link>
        </div>

        {/* プレビューヘッダー */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">車両プレビュー</h1>
          <p className="text-gray-600">CMS上で車両が実際のWebサイトでどのように表示されるか確認できます。</p>
        </div>

        {/* 車両カードプレビュー */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* 車両画像 */}
          <div className="h-56 relative bg-gray-200">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-contain"
            />
            {/* 保証バッジ（左上） */}
            <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              {car.warranty}
            </div>
            {/* 新車/中古車バッジ（右上） */}
            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
              car.type === 'new'
                ? 'bg-blue-600 text-white'
                : 'bg-orange-500 text-white'
            }`}>
              {car.type === 'new' ? '新車' : '中古車'}
            </div>
          </div>

          {/* 車両情報 */}
          <div className="p-6">
            {/* 車名 */}
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{car.name}</h2>

            {/* 価格情報 */}
            <div className="mb-6 pb-4 border-b-2 border-gray-200">
              <div className="text-3xl font-bold text-kacchau mb-2">
                支払総額 {car.totalPrice}万円
                <span className="text-sm text-gray-600 ml-1 font-normal">(税込)</span>
              </div>
              <div className="text-sm text-gray-600">
                車両本体 <span className="font-semibold text-gray-900">{car.vehiclePrice}万円</span> / 諸費用 <span className="font-semibold text-gray-900">{car.fees}万円</span>
              </div>
            </div>

            {/* 詳細情報 */}
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between py-1.5">
                <span className="text-gray-600">年式</span>
                <span className="font-semibold text-gray-900">{car.year}</span>
              </div>
              <div className="flex justify-between py-1.5 bg-gray-50 px-2 rounded">
                <span className="text-gray-600">走行距離</span>
                <span className="font-semibold text-gray-900">{car.mileage}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-600">修復歴</span>
                <span className="font-semibold text-green-600">{car.repairHistory}</span>
              </div>
              <div className="flex justify-between py-1.5 bg-gray-50 px-2 rounded">
                <span className="text-gray-600">シフト</span>
                <span className="font-semibold text-gray-900">{car.transmission}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-600">駆動</span>
                <span className="font-semibold text-gray-900">{car.drive}</span>
              </div>
              <div className="flex justify-between py-1.5 bg-gray-50 px-2 rounded">
                <span className="text-gray-600">排気量</span>
                <span className="font-semibold text-gray-900">{car.displacement}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-600">系統色</span>
                <span className="font-semibold text-gray-900">{car.color}</span>
              </div>
            </div>

            {/* プレビューノート */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-blue-800 mb-2">プレビューノート</h3>
              <p className="text-blue-700 text-sm">
                これはCMSプレビュー機能です。実際のWebサイトでの表示を確認できます。
                写真のサイズ調整は、実際のWebサイトと同じ方法で行われています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
