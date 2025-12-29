import type { Metadata } from "next";
import ServiceContent from "./ServiceContent";

export const metadata: Metadata = {
    title: "事業内容・サービス",
    description: "Tensoryの生成AI導入支援サービス。AIエンパワーメント（AI業務活用）、セールスイネーブルメント（営業支援AI）、ナレッジトランスファー（知識継承AI）で企業の成長を支援します。",
    openGraph: {
        title: "事業内容・サービス | Tensory",
        description: "生成AI導入支援、営業支援AI、知識継承AIで企業の成長を支援",
    },
};

export default function ServicePage() {
    return <ServiceContent />;
}
