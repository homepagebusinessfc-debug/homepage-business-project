#!/bin/bash

echo "🚗 カッチャウウェブサイト セットアップ開始..."

# プロジェクトディレクトリ作成
mkdir -p kacchau-website
cd kacchau-website

# Next.jsプロジェクト初期化
echo "📦 Next.jsプロジェクトを初期化中..."
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# 必要なパッケージをインストール
echo "📚 依存パッケージをインストール中..."
npm install lucide-react

# ディレクトリ構造作成
echo "📁 ディレクトリ構造を作成中..."
mkdir -p app/search
mkdir -p app/sell
mkdir -p app/shop
mkdir -p app/about
mkdir -p app/rental
mkdir -p app/question
mkdir -p app/contact
mkdir -p components

echo "✅ セットアップ完了!"
echo ""
echo "次のステップ:"
echo "1. 各ファイルのコードをコピー＆ペーストしてください"
echo "2. 開発サーバーを起動: npm run dev"
echo "3. ブラウザで http://localhost:3000 を開いてください"
echo ""
echo "GitLabへのアップロード:"
echo "git init"
echo "git add ."
echo "git commit -m 'Initial commit'"
echo "git remote add origin <your-gitlab-repo-url>"
echo "git push -u origin main"