# GitHub Copilot Instructions

このプロジェクトでCopilotを使用する際の指示です。

## プロジェクト概要
- Next.js 14（App Router）
- TypeScript
- Tailwind CSS
- Cloudflare Pages（静的書き出し）

## コーディング規約

### TypeScript
- 厳密な型定義を使用
- `any`を避ける
- interface優先（typeは必要な場合のみ）

### React
- 関数コンポーネントのみ使用
- Server ComponentsとClient Componentsを適切に使い分け
- "use client"は必要な場合のみ

### スタイリング
- Tailwind CSSを使用
- カスタムCSSは最小限
- レスポンシブ対応必須（mobile-first）

### ファイル構成
```
app/               # ページ
components/        # 再利用可能コンポーネント
public/           # 静的ファイル
```

## 優先事項
1. パフォーマンス（画像最適化、コード分割）
2. アクセシビリティ（a11y）
3. SEO対応
4. レスポンシブデザイン

## 避けるべきこと
- 外部APIの直接呼び出し（静的書き出しのため）
- Dynamic Imports（必要な場合のみ）
- Server-Side Rendering（output: 'export'使用中）

## テスト
- 重要な関数にはユニットテスト
- コンポーネントには統合テスト

## 参考
- Next.js 14ドキュメント
- Tailwind CSS公式ドキュメント
