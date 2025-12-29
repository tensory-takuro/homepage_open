export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社Tensory",
    alternateName: "Tensory Inc.",
    url: "https://tensory.co.jp",
    logo: "https://tensory.co.jp/Tensory_logo.png",
    description:
      "企業に眠る暗黙知をAIで形式知に変換し、ナレッジエンジニアリングで組織の成長を加速させる生成AIパートナー",
    address: {
      "@type": "PostalAddress",
      streetAddress: "日本橋室町1丁目11番12号 日本橋水野ビル7階",
      addressLocality: "中央区",
      addressRegion: "東京都",
      postalCode: "103-0022",
      addressCountry: "JP",
    },
    founder: {
      "@type": "Person",
      name: "内野琢郎",
      jobTitle: "代表取締役CEO",
    },
    foundingDate: "2025",
    sameAs: ["https://note.com/tensory"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://tensory.co.jp/contact",
      availableLanguage: "Japanese",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tensory",
    alternateName: "株式会社Tensory",
    url: "https://tensory.co.jp",
    description:
      "企業の知識を成果に変える生成AIパートナー。ナレッジエンジニアリングで暗黙知を形式知に変換。",
    publisher: {
      "@type": "Organization",
      name: "株式会社Tensory",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tensory.co.jp/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "株式会社Tensory",
    image: "https://tensory.co.jp/Tensory_logo.png",
    "@id": "https://tensory.co.jp",
    url: "https://tensory.co.jp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "日本橋室町1丁目11番12号 日本橋水野ビル7階",
      addressLocality: "中央区",
      addressRegion: "東京都",
      postalCode: "103-0022",
      addressCountry: "JP",
    },
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    serviceType: [
      "生成AI導入支援",
      "AIコンサルティング",
      "ナレッジマネジメント",
      "業務効率化",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}

