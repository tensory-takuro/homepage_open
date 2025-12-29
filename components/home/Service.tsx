"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export default function Service() {
    const services = [
        {
            title: "AI Empowerment",
            subtitle: "AIエンパワーメント",
            description: "リテラシー研修からAI駆動開発まで、企業の付加価値を最大化。",
            image: "/servicesection/AIempowerment.webp",
            href: "/service#ai-empowerment",
        },
        {
            title: "Sales Enablement",
            subtitle: "セールスイネーブルメント",
            description: "キーエンス流の営業ノウハウをAIで組織全体に浸透。",
            image: "/servicesection/sales_enablement.webp",
            href: "/service#sales-enablement",
        },
        {
            title: "Knowledge Transfer",
            subtitle: "ナレッジトランスファー",
            description: "製造業の「匠の技」をAIで解析し、確実に次世代へ継承。",
            image: "/servicesection/knowledge_transfer.webp",
            href: "/service#knowledge-transfer",
        },
    ];

    return (
        <section className="py-24 md:py-36 bg-gray-4">
            <div className="container mx-auto px-6">
                <ScrollFadeIn direction="up" delay={0}>
                    <div className="text-center mb-20">
                        <h2 className="text-tensor-blue text-sm font-bold tracking-[0.2em] uppercase mb-4">Service</h2>
                        <p className="text-3xl md:text-5xl font-bold text-tensor-blue">Our Business</p>
                    </div>
                </ScrollFadeIn>

                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollFadeIn key={service.title} direction="up" delay={0.1 * (index + 1)}>
                            <Link
                                href={service.href}
                                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-3 hover:border-tensor-blue group flex flex-col items-center text-center relative overflow-hidden h-full"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-tensor-blue transition-colors duration-500" />

                                <div className="w-full h-48 mb-8 relative flex items-center justify-center">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={240}
                                        height={240}
                                        className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
                                        style={{
                                            maskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)',
                                            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)',
                                        }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-600 uppercase tracking-wider mb-1">{service.title}</h3>
                                <h4 className="text-xl font-bold text-tensor-blue mb-4">{service.subtitle}</h4>
                                <p className="text-gray-1 text-base leading-relaxed mb-8 flex-grow">{service.description}</p>

                                <div className="flex items-center text-tensor-blue font-bold group-hover:tracking-wider transition-all duration-300">
                                    <span>View More</span>
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                </div>
                            </Link>
                        </ScrollFadeIn>
                    ))}
                </div>

                <ScrollFadeIn direction="up" delay={0.4}>
                    <div className="mt-20 text-center">
                        <Link
                            href="/service"
                            className="inline-block px-12 py-4 bg-tensor-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            サービスの詳細を見る
                        </Link>
                    </div>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
