import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像最適化設定
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30日間キャッシュ
  },

  // 圧縮有効化
  compress: true,
};

export default nextConfig;
