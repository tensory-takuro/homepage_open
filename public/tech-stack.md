## 技術スタックガイドライン (Technology Stack Guideline)

### 1. 開発フレームワーク・基盤

* **Framework**: **Next.js (App Router)**
* 創業者の実装経験（Next.js/Supabase）に基づき、高速なページ遷移とSEOに強いApp Router構成を採用します 。




* **Language**: **TypeScript**
* 型安全性を確保し、将来的な機能拡張や大規模化に伴うバグを抑制します。


* **Package Manager**: **pnpm** または **npm**

### 2. スタイリング・UIコンポーネント

* **CSS Framework**: **Tailwind CSS**
* デザインガイドラインで定義した `Tensor Blue (#193665)` 等のカスタムカラーを `tailwind.config.ts` で一元管理します 。




* **UI Components**: **shadcn/ui**
* アクセシビリティに優れ、参考サイト（ACROS）のようなスタイリッシュなUIを、Tailwind CSSを用いて高度にカスタマイズ可能です。


* **Animation**: **Framer Motion**
* ヒーローセクションのフェードインや、Missionセクションのインフィニティマークの流動的な動きを実現するために活用します。


* **Icons**: **Lucide React**

### 3. お問い合わせシステム (Contact Form)

* **Form Management**: **React Hook Form** + **Zod**
* 入力バリデーションを強力に制御し、ユーザーエラーを最小化します。


* **Email Handling**:
* **送信先**: `info@tensory.co.jp`
* **実装方法**: Next.jsの **Route Handlers (API Routes)** を使用。
* **送信ライブラリ**: **Resend** または **SendGrid**（Vercelとの親和性が極めて高く、確実にメールを到達させます）。


* **セキュリティ**: **Google reCAPTCHA v3** 等の導入（スパム対策）。

### 4. 開発ツール・効率化

* **Editor**: **Cursor**
* 「バイブコーディング」を活用し、開発工数を圧倒的に短縮します 。




* **Prototyping**: **v0 (Vercel)**
* UIの初期案作成に `v0` を活用し、スタイリッシュなデザインを迅速にコードへ変換します 。





### 5. インフラ・デプロイメント

* **Platform**: **Vercel**
* GitHub連携によるCI/CDを構築し、マージと同時にプレビュー・デプロイを行う体制を整えます 。




* **Optimization**: **Next.js Image Optimization**
* ヒーローセクションで使用する高解像度の背景画像（透かし加工）を、デバイスに合わせて自動最適化して配信します。



---

## Tailwind CSS 設定例 (`tailwind.config.ts`)

```typescript
const config = {
  theme: {
    extend: {
      colors: {
        tensor: {
          [cite_start]blue: '#193665',    // Tensor Blue [cite: 936]
          [cite_start]sky: '#6CA7E5',     // Sky Blue [cite: 939]
          [cite_start]red: '#DC2363',     // Red [cite: 940]
        },
        gray: {
          [cite_start]100: '#EDEEEF',     // Gray 4 [cite: 947]
          [cite_start]500: '#ADB1B2',     // Gray 2 [cite: 945]
          [cite_start]800: '#535859',     // Gray 1 [cite: 944]
        }
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'var(--font-inter)'],
      },
    },
  },
}

```

---

この技術スタックにより、デザインガイドラインで定義した「洗練されたプロフェッショナル感」を、最高のパフォーマンスで実現することが可能です。