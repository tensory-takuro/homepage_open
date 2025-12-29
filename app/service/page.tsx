import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "事業内容・サービス",
    description: "Tensoryの生成AI導入支援サービス。AIエンパワーメント（AI業務活用）、セールスイネーブルメント（営業支援AI）、ナレッジトランスファー（知識継承AI）で企業の成長を支援します。",
    openGraph: {
        title: "事業内容・サービス | Tensory",
        description: "生成AI導入支援、営業支援AI、知識継承AIで企業の成長を支援",
    },
};

export default function ServicePage() {
    return (
        <div className="pb-20">
            <div className="bg-tensor-blue pt-32 pb-16 mb-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service</h1>
                    <p className="text-white/70 font-bold tracking-widest uppercase">事業内容</p>
                </div>
            </div>


            {/* Service 1: AI Empowerment */}
            <section id="ai-empowerment" className="container mx-auto px-6 mb-32 scroll-mt-32">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-tensor-blue font-bold text-sm tracking-widest uppercase border border-tensor-blue px-3 py-1 rounded-full">Service 01</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-1 mb-6">AI Empowerment</h2>
                        <h3 className="text-xl font-bold text-sky-blue mb-6">AIエンパワーメント事業</h3>
                        <p className="text-gray-600 leading-loose mb-8">
                            AIを「魔法」ではなく「道具」として使いこなすためのリテラシー研修から、
                            実際の業務課題を解決するシステム実装までを一気通貫で提供・支援し企業のAI活用を加速させます。
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                <span className="text-gray-700"><strong>AIリテラシー研修</strong>：AIの基礎からRAGやエージェント企画まで習得</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                <span className="text-gray-700"><strong>AI最適化BPR支援</strong>：現状の業務フローをAIネイティブに再設計</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                <span className="text-gray-700"><strong>AI駆動型アジャイル開発</strong>：AIを活用して短期間で簡易プロダクトを開発。生成AIを活用したプロダクトを実現場に導入します。</span>
                            </li>
                        </ul>
                        <Link href="/contact" className="inline-flex items-center text-tensor-blue font-bold hover:tracking-wide transition-all">
                            ご相談はこちら <ArrowRight className="ml-2" size={18} />
                        </Link>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                        <Image 
                            src="/servicesection/AIempowerment.webp" 
                            alt="AI Empowerment" 
                            width={400} 
                            height={400} 
                            className="object-contain max-h-[400px]"
                            style={{
                                maskImage: 'radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%)',
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Service 2: Sales Enablement */}
            <section id="sales-enablement" className="bg-gray-50 py-24 mb-32 scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 flex justify-center">
                            <Image 
                            src="/servicesection/sales_enablement.webp" 
                            alt="Sales Enablement" 
                            width={400} 
                            height={400} 
                            className="object-contain max-h-[400px]"
                            style={{
                                maskImage: 'radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%)',
                            }}
                        />
                        </div>
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-tensor-blue font-bold text-sm tracking-widest uppercase border border-tensor-blue px-3 py-1 rounded-full">Service 02</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-1 mb-6">Sales Enablement</h2>
                            <h3 className="text-xl font-bold text-sky-blue mb-6">セールスイネーブルメント事業</h3>
                            <p className="text-gray-600 leading-loose mb-8">
                                キーエンス流の「科学的営業」のノウハウを、生成AIを活用して組織全体にインストール。
                                トップセールスの知見を形式知化し、営業組織の底上げを図ります。
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                    <span className="text-gray-700"><strong>トップセールスのノウハウ共有支援</strong>：キーエンスでも実装されているトップセールスのノウハウ共有の仕組みを生成AIで実現</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                    <span className="text-gray-700"><strong>生成AIによる顧客分析支援</strong>：複数の生成AIを活用して瞬時に顧客分析する手法を共有</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                    <span className="text-gray-700"><strong>事務工数削減観点での生成AI利活用支援</strong>：メール作文・エージェント連携などでの事務工数を削減</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: Knowledge Transfer */}
            <section id="knowledge-transfer" className="container mx-auto px-6 mb-32 scroll-mt-32">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-tensor-blue font-bold text-sm tracking-widest uppercase border border-tensor-blue px-3 py-1 rounded-full">Service 03</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-1 mb-6">Knowledge Transfer</h2>
                        <h3 className="text-xl font-bold text-sky-blue mb-6">ナレッジトランスファー事業</h3>
                        <p className="text-gray-600 leading-loose mb-8">
                            現場のベテラン（熟練作業者）が持つ属人化された暗黙知をAIで解析・言語化。
                            技術継承をスムーズにし、「匠の技」を企業の永続的な資産に変える支援を行います
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                <span className="text-gray-700"><strong>暗黙知の解析・構造化支援</strong>：インタビューや動画をAI解析して暗黙知を形式知に変換</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                <span className="text-gray-700"><strong>標準化・資産化支援</strong>：形式知化されたナレッジを活用してSOPやデジタルマニュアルへ変換</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2.5 flex-shrink-0" />
                                <span className="text-gray-700"><strong>技術継承サポート</strong>：後継者教育のAIアシスタント化をサポートし、ベテランの退職前に後任者に引き継げる情報を準備</span>
                            </li>
                        </ul>
                        <Link href="/contact" className="inline-flex items-center text-tensor-blue font-bold hover:tracking-wide transition-all">
                            ご相談はこちら <ArrowRight className="ml-2" size={18} />
                        </Link>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                        <Image 
                            src="/servicesection/knowledge_transfer.webp" 
                            alt="Knowledge Transfer" 
                            width={400} 
                            height={400} 
                            className="object-contain max-h-[400px]"
                            style={{
                                maskImage: 'radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%)',
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-100 py-20 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-tensor-blue mb-6">導入のご相談はこちら</h2>
                    <p className="mb-10 text-gray-600">貴社の課題に合わせたAI活用をご提案します。</p>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 bg-tensor-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 shadow-lg"
                    >
                        お問い合わせ
                    </Link>
                </div>
            </section>
        </div>
    );
}
