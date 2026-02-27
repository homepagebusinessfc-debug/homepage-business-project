# カッチャウ ウェブサイト

自動車販売・買取専門店「カッチャウ」の公式ウェブサイトです。

## 🚀 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **ライブラリ**: React
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **CMS**: Netlify CMS
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
│   ├── preview/              # プレビュー機能
│   │   └── cars/             # 車両プレビュー
│   │       └── page.tsx      # 車両プレビューページ
│   ├── layout.tsx            # 共通レイアウト
│   └── globals.css           # グローバルスタイル
├── components/
│   ├── Header.tsx            # ヘッダーコンポーネント
│   └── Footer.tsx            # フッターコンポーネント
├── public/                   # 静的ファイル
│   └── admin/                # CMS設定
│       ├── config.yml        # Netlify CMS設定
│       └── index.html        # CMSエントリーポイント
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

## 📱 CMS管理方式

このプロジェクトでは、Netlify CMSを使用してコンテンツを管理しています。

### CMSのセットアップ

1. `public/admin/config.yml` ファイルを編集して、CMSの設定をカスタマイズします
2. `public/admin/index.html` ファイルを編集して、CMSのエントリーポイントをカスタマイズします
3. CMSにアクセスするには、`/admin` にアクセスします

### CMSの機能

- 車両情報の管理（新車・中古車）
- ページ情報の管理
- ブログ投稿の管理
- メディアファイルの管理

### CMSの使用方法

1. `/admin` にアクセスします
2. GitLabアカウントでログインします
3. コンテンツを編集します
4. 変更を保存します

## 🎨 カラースキーム

サイトはカッチャウのカラースキームを使用しています:

- **メインカラー**: Yellow (#FFC107)
- **アクセントカラー**: Yellow shades (#FFD54F, #FFB300)
- **テキストカラー**: Dark Gray (#333333)
- **背景**: White (#FFFFFF)
- **ボーダー**: Light Gray (#E0E0E0)

## 📱 レスポンシブ対応

全ページがモバイル、タブレット、デスクトップに対応しています。

## 🖼️ 車両写真機能

### 車両写真のサイズ調整
- 車両ページでは、`object-contain` を使用して写真を表示しています
- これにより、車両写真がWebサイトの表示枠に完全に収まるようになります
- 写真全体が表示されるため、縦長の写真でも上下が切れることがありません

### CMSプレビュー機能
- CMS上で車両が実際のWebサイトでどのように表示されるか確認できます
- プレビューページでは、実際のWebサイトと同じ表示方法を使用しています
- プレビュー機能は、CMSの車両編集画面に「🔍 プレビュー機能」として表示されます

## 🔗 ページ一覧

- `/` - トップページ
- `/search` - クルマを探す
- `/sell` - クルマを売る
- `/shop` - 店舗一覧
- `/about` - カッチャウについて
- `/rental` - レンタカー
- `/question` - よくある質問
- `/contact` - お問い合わせ

## 📄 ライセンス

© Kacchau All Rights Reserved.

