"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export default function ServiceContent() {
    const services = [
        {
            id: "ai-empowerment",
            number: "01",
            title: "AI Empowerment",
            subtitle: "AIエンパワーメント事業",
            description: "AIを「魔法」ではなく「道具」として使いこなすためのリテラシー研修から、実際の業務課題を解決するシステム実装までを一気通貫で提供・支援し企業のAI活用を加速させます。",
            image: "/servicesection/AIempowerment.webp",
            features: [
                { title: "AIリテラシー研修", desc: "AIの基礎からRAGやエージェント企画まで習得" },
                { title: "AI最適化BPR支援", desc: "現状の業務フローをAIネイティブに再設計" },
                { title: "AI駆動型アジャイル開発", desc: "AIを活用して短期間で簡易プロダクトを開発。生成AIを活用したプロダクトを実現場に導入します。" },
            ],
            showCTA: true,
        },
        {
            id: "sales-enablement",
            number: "02",
            title: "Sales Enablement",
            subtitle: "セールスイネーブルメント事業",
            description: "キーエンス流の「科学的営業」のノウハウを、生成AIを活用して組織全体にインストール。トップセールスの知見を形式知化し、営業組織の底上げを図ります。",
            image: "/servicesection/sales_enablement.webp",
            features: [
                { title: "トップセールスのノウハウ共有支援", desc: "キーエンスでも実装されているトップセールスのノウハウ共有の仕組みを生成AIで実現" },
                { title: "生成AIによる顧客分析支援", desc: "複数の生成AIを活用して瞬時に顧客分析する手法を共有" },
                { title: "事務工数削減観点での生成AI利活用支援", desc: "メール作文・エージェント連携などでの事務工数を削減" },
            ],
            showCTA: false,
            reverse: true,
            bgColor: "bg-gray-50",
        },
        {
            id: "knowledge-transfer",
            number: "03",
            title: "Knowledge Transfer",
            subtitle: "ナレッジトランスファー事業",
            description: "現場のベテラン（熟練作業者）が持つ属人化された暗黙知をAIで解析・言語化。技術継承をスムーズにし、「匠の技」を企業の永続的な資産に変える支援を行います",
            image: "/servicesection/knowledge_transfer.webp",
            features: [
                { title: "暗黙知の解析・構造化支援", desc: "インタビューや動画をAI解析して暗黙知を形式知に変換" },
                { title: "標準化・資産化支援", desc: "形式知化されたナレッジを活用してSOPやデジタルマニュアルへ変換" },
                { title: "技術継承サポート", desc: "後継者教育のAIアシスタント化をサポートし、ベテランの退職前に後任者に引き継げる情報を準備" },
            ],
            showCTA: true,
        },
    ];

    return (
        <div className="pb-20">
            <div className="bg-tensor-blue pt-32 pb-16 mb-20">
                <div className="container mx-auto px-6">
                    <ScrollFadeIn direction="up" delay={0}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service</h1>
                    </ScrollFadeIn>
                    <ScrollFadeIn direction="up" delay={0.1}>
                        <p className="text-white/70 font-bold tracking-widest uppercase">事業内容</p>
                    </ScrollFadeIn>
                </div>
            </div>

            {services.map((service, serviceIndex) => (
                <section 
                    key={service.id}
                    id={service.id} 
                    className={`${service.bgColor ? `${service.bgColor} py-24` : 'container mx-auto px-6'} mb-32 scroll-mt-32`}
                >
                    <div className={service.bgColor ? "container mx-auto px-6" : ""}>
                        <div className={`flex flex-col md:flex-row gap-12 items-center`}>
                            <ScrollFadeIn 
                                direction={service.reverse ? "right" : "left"} 
                                delay={0.1}
                                className={`md:w-1/2 order-2 ${service.reverse ? 'md:order-2' : 'md:order-1'}`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-tensor-blue font-bold text-sm tracking-widest uppercase border border-tensor-blue px-3 py-1 rounded-full">Service {service.number}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-1 mb-6">{service.title}</h2>
                                <h3 className="text-xl font-bold text-sky-blue mb-6">{service.subtitle}</h3>
                                <p className="text-gray-600 leading-loose mb-8">
                                    {service.description}
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                            <span className="text-gray-700"><strong>{feature.title}</strong>：{feature.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                                {service.showCTA && (
                                    <Link href="/contact" className="inline-flex items-center text-tensor-blue font-bold hover:tracking-wide transition-all">
                                        ご相談はこちら <ArrowRight className="ml-2" size={18} />
                                    </Link>
                                )}
                            </ScrollFadeIn>
                            <ScrollFadeIn 
                                direction={service.reverse ? "left" : "right"} 
                                delay={0.2}
                                className={`md:w-1/2 flex justify-center order-1 ${service.reverse ? 'md:order-1' : 'md:order-2'}`}
                            >
                                <Image 
                                    src={service.image} 
                                    alt={service.title} 
                                    width={400} 
                                    height={400} 
                                    className="object-contain max-h-[400px]"
                                    style={{
                                        maskImage: 'radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%)',
                                        WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%)',
                                    }}
                                />
                            </ScrollFadeIn>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="bg-gray-100 py-20 text-center">
                <div className="container mx-auto px-6">
                    <ScrollFadeIn direction="up" delay={0}>
                        <h2 className="text-3xl font-bold text-tensor-blue mb-6">導入のご相談はこちら</h2>
                    </ScrollFadeIn>
                    <ScrollFadeIn direction="up" delay={0.1}>
                        <p className="mb-10 text-gray-600">貴社の課題に合わせたAI活用をご提案します。</p>
                    </ScrollFadeIn>
                    <ScrollFadeIn direction="up" delay={0.2}>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-4 bg-tensor-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 shadow-lg"
                        >
                            お問い合わせ
                        </Link>
                    </ScrollFadeIn>
                </div>
            </section>
        </div>
    );
}

