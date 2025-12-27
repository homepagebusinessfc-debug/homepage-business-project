import Link from 'next/link';
import { ChevronRight, Phone, MapPin } from 'lucide-react';

export default function ShopPage() {
  const shops = [
    {
      name: '本店',
      address: '〒849-0913　佐賀市兵庫町大字渕1557-1',
      tel: '0952-32-1550'
    },
    {
      name: 'みやき店',
      address: '〒840-1106　三養基郡みやき町大字市武1404-1',
      tel: '0942-96-2222'
    },
    {
      name: '諸富2号店',
      address: '〒840-2106　佐賀市諸富町大字山領805-2',
      tel: '0952-28-0392',
      note: '（株式会社ローリングキッズ）'
    },
    {
      name: '佐賀南3号店（FC店舗）',
      address: '〒840-0027　佐賀市本庄町大字本庄968-1',
      tel: '0952-27-0060'
    },
    {
      name: 'ななつ星店',
      address: '〒849-0913　佐賀市兵庫町下渕',
      tel: '0952-28-0392',
      note: '（株式会社ローリングキッズ）'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-red-600 hover:underline">ホーム</Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-600">店舗一覧</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-red-600 mb-12 pb-4 border-b-4 border-red-600">
            カッチャウ店舗一覧
          </h1>

          <div className="space-y-6">
            {shops.map((shop, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg border-l-4 border-red-600 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                  {shop.name}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">{shop.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-red-600 flex-shrink-0" size={20} />
                    <a 
                      href={`tel:${shop.tel}`}
                      className="text-lg font-semibold hover:text-red-600 transition-colors"
                    >
                      TEL {shop.tel}
                    </a>
                  </div>
                  {shop.note && (
                    <p className="text-sm text-gray-600 ml-8">{shop.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* お問い合わせボタン */}
          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              オンラインでお問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}