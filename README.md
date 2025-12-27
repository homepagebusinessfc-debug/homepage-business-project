# カッチャウ ウェブサイト

佐賀県の自動車販売・買取専門店「カッチャウ」の公式ウェブサイトです。

## 🚀 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **デプロイ**: GitLab Pages / Vercel

## 📁 プロジェクト構造

```
kacchau-website/
├── app/
│   ├── page.tsx              # トップページ
│   ├── search/page.tsx       # クルマを探す
│   ├── sell/page.tsx         # クルマを売る
│   ├── shop/page.tsx         # 店舗一覧
│   ├── about/page.tsx        # カッチャウについて
│   ├── rental/page.tsx       # レンタカー
│   ├── question/page.tsx     # よくある質問
│   ├── contact/page.tsx      # お問い合わせ
│   ├── layout.tsx            # 共通レイアウト
│   └── globals.css           # グローバルスタイル
├── components/
│   ├── Header.tsx            # ヘッダーコンポーネント
│   └── Footer.tsx            # フッターコンポーネント
├── public/                   # 静的ファイル
├── .gitlab-ci.yml            # CI/CD設定
├── tailwind.config.ts        # Tailwind設定
├── package.json              # 依存関係
└── README.md                 # このファイル
```

## 🛠️ セットアップ

### 1. リポジトリをクローン

```bash
git clone <your-repository-url>
cd kacchau-website
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 🌐 デプロイ

### GitLab Pagesへのデプロイ

1. GitLabリポジトリにコードをプッシュ
2. `.gitlab-ci.yml` が自動的にビルド＆デプロイを実行
3. `Settings > Pages` でデプロイされたURLを確認

### Vercelへのデプロイ

```bash
npm install -g vercel
vercel
```

## 📝 Timerex統合

`app/contact/page.tsx` のコメント部分にTimerexの埋め込みコードを追加してください:

```tsx
<iframe 
  src="YOUR_TIMEREX_EMBED_URL" 
  width="100%" 
  height="600" 
  frameBorder="0"
></iframe>
```

## 🎨 カラースキーム

サイトは元のカッチャウサイトのカラースキームを再現しています:

- **メインカラー**: Red (#dc2626)
- **アクセントカラー**: Red shades
- **背景**: White / Gray tones

## 📱 レスポンシブ対応

全ページがモバイル、タブレット、デスクトップに対応しています。

## 🔗 ページ一覧

- `/` - トップページ
- `/search` - クルマを探す
- `/sell` - クルマを売る
- `/shop` - 店舗一覧
- `/about` - カッチャウについて
- `/rental` - レンタカー
- `/question` - よくある質問
- `/contact` - お問い合わせ

## 📞 お問い合わせ

- 電話: 0952-28-0392
- 住所: 〒849-0913 佐賀市兵庫町大字渕1347-1

## 📄 ライセンス

© Kacchau All Rights Reserved.