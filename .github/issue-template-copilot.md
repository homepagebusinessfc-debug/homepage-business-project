# Issueテンプレート：Copilot最適化版

## 概要
何を実現したいか（1-2文）

## 対象ファイル
- `app/page.tsx`
- `app/cars/page.tsx`
- `components/Button.tsx`

## 現状
現在のコードの状態や問題点

## 期待する動作
実装後にどう動作すべきか

## 技術的要件
- 使用するライブラリ
- UIコンポーネントの仕様
- API仕様

## 参考
- 既存の類似実装ファイル
- デザインモックアップのURL
- 関連するIssue/PR

---

## 実例：今回のタスク用

---

# Webサイトの5つの修正タスク

## 概要
車のWebサイトで発生している5つのUI/UX問題を修正します。

---

## タスク1：「詳細を見る」ボタンの削除

### 対象ファイル
- `app/page.tsx`
- `app/cars/page.tsx`

### 現状
車の情報カードに「詳細を見る」ボタンがあるが、クリックすると404エラーになる。

### 期待する動作
- 「詳細を見る」ボタンを完全に削除
- 「お問い合わせする」ボタンのみを残す
- レイアウトが崩れないように調整

### 技術的要件
- React / Next.js 14
- Tailwind CSSを使用

---

## タスク2：お問い合わせページにGoogleマップ埋め込み

### 対象ファイル
- `app/contact/page.tsx`

### 現状
住所がテキストのみ表示されている。

### 期待する動作
- インタラクティブなGoogleマップを埋め込む
- 拡大・縮小・ドラッグ可能
- レスポンシブ対応（スマホでも見やすい）

### 技術的要件
- Google Maps Embed API使用
- 住所：サイト内の`app/contact/page.tsx`に記載の住所を読み取る
- iFrame形式で埋め込み

### 実装例
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

---

## タスク3：TimeRex削除と日付選択UI置き換え

### 対象ファイル
- `app/contact/page.tsx`
- `app/sell/page.tsx`
- （他のページにあれば全て）

### 現状
TimeRex予約システムがiFrameで埋め込まれている。

### 期待する動作
- TimeRexのiFrameを完全削除
- 既存の日付選択UIコンポーネントを使用
- 既存実装の参考：（他ページのファイルパスを記載）

### 技術的要件
- React Hook Formまたは既存のフォームライブラリ
- カレンダーUI（既存コンポーネントを再利用）

---

## タスク4：トップページの車の写真サイズ修正

### 対象ファイル
- `app/page.tsx`

### 現状
トップページの車の写真サイズが`app/cars/page.tsx`と異なる。

### 期待する動作
- `app/cars/page.tsx`と同じサイズに統一
- アスペクト比を維持
- レスポンシブ対応

### 技術的要件
- Next.js `<Image>` コンポーネント使用
- Tailwind CSSでサイズ指定

### 参考
- 正しい実装：`app/cars/page.tsx`の画像表示部分

---

## タスク5：スマホ用お問い合わせバーをフローティングボタンに変更

### 対象ファイル
- `components/MobileContactBar.tsx`（推測）
- または該当するレイアウトコンポーネント

### 現状
画面下部に横長のバーが固定表示され、操作の邪魔になっている。

### 期待する動作
- 既存のバーを削除
- 右下に小さい円形のフローティングボタンを配置
- クリックで`/contact`ページに遷移
- スマホ表示時のみ表示（PC表示では非表示）

### 技術的要件
- Tailwind CSSで実装
- 位置：`fixed bottom-4 right-4`
- サイズ：直径56px程度
- アイコン：メールまたは電話アイコン（lucide-reactなど）
- z-index: 50以上

### デザイン仕様
```tsx
<button
  className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 md:hidden"
  onClick={() => router.push('/contact')}
>
  <Mail className="h-6 w-6 mx-auto" />
</button>
```

---

## 受け入れ基準
- [ ] 全てのタスクが実装されている
- [ ] レスポンシブ対応（スマホ・タブレット・PC）
- [ ] エラーやwarningが出ない
- [ ] 既存機能が壊れていない

## 備考
- Next.js 14 App Router使用
- TypeScript
- Tailwind CSS
