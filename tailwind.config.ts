import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // カッチャウのカラーパレット
        'kacchau': {
          DEFAULT: '#FFC107',      // メインカラー
          light: '#FFD54F',        // アクセントカラー
          dark: '#FFB300',         // 濃い黄色
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        'kacchau-text': '#333333',     // テキストカラー
        'kacchau-bg': '#FFFFFF',       // 背景カラー
        'kacchau-border': '#E0E0E0',   // ボーダーカラー
      },
      fontFamily: {
        sans: [
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;