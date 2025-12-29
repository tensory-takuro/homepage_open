import type { Metadata } from "next";
import CompanyContent from "./CompanyContent";

export const metadata: Metadata = {
    title: "会社概要",
    description: "株式会社Tensoryの会社概要。「知を循環し、組織の成長を促進する」をミッションに、生成AIを活用したナレッジマネジメントで企業の課題を解決します。代表：内野琢郎（キーエンス出身）",
    openGraph: {
        title: "会社概要 | Tensory",
        description: "「知を循環し、組織の成長を促進する」生成AIパートナー",
    },
};

export default function CompanyPage() {
    return <CompanyContent />;
}
