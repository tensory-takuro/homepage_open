"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export default function CoretechContent() {
    const circulationPoints = [
        {
            number: "01",
            title: "暗黙知の形式知化",
            subtitle: "表出化の加速",
            items: [
                "ベテランの経験・勘をAIが理解できる形で記録",
                "自然言語でのインタラクションにより、暗黙知の抽出が容易に"
            ]
        },
        {
            number: "02",
            title: "AIによる知識の増幅",
            subtitle: "連結化の強化",
            items: [
                "構造化された知識をAIが分析・統合",
                "人間には見えなかったパターンや関連性を発見"
            ]
        },
        {
            number: "03",
            title: "パーソナライズされた知識提供",
            subtitle: "内面化の促進",
            items: [
                "個人の状況に応じた知識の提示",
                "必要なときに必要な情報を適切な形で提供"
            ]
        },
        {
            number: "04",
            title: "継続的な学習と改善",
            subtitle: "自己強化ループ",
            items: [
                "AIの回答に対するフィードバックが新たな知識として蓄積",
                "利用されるほど精度が向上する自己強化ループ"
            ]
        }
    ];

    const implementationPatterns = [
        {
            title: "RAG",
            subtitle: "Retrieval-Augmented Generation",
            description: "ナレッジベースから関連情報を検索し、生成に活用"
        },
        {
            title: "Agent Memory",
            subtitle: "エージェントメモリ",
            description: "対話履歴や学習内容を蓄積し、パーソナライズされた応答を生成"
        },
        {
            title: "Multi-Agent System",
            subtitle: "マルチエージェントシステム",
            description: "専門性の異なる複数エージェントが協力して複雑なタスクを解決"
        }
    ];

    return (
        <>
            {/* Circulation Points */}
            <section className="container mx-auto px-6 mb-24">
                <ScrollFadeIn direction="up" delay={0}>
                    <h2 className="text-3xl md:text-4xl font-bold text-tensor-blue mb-4">循環のポイント</h2>
                    <p className="text-gray-500 mb-12">AI時代の知識創造を加速する4つの要素</p>
                </ScrollFadeIn>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {circulationPoints.map((point, index) => (
                        <ScrollFadeIn key={point.number} direction="up" delay={0.1 * (index + 1)}>
                            <div className="group bg-white border border-gray-3 rounded-xl p-8 hover:border-tensor-blue transition-all duration-300 hover:shadow-lg h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl font-bold text-tensor-blue/20 group-hover:text-tensor-blue transition-colors">{point.number}</span>
                                    <h3 className="text-lg font-bold text-gray-1">{point.title}</h3>
                                </div>
                                <p className="text-sm text-[#DC2363] font-medium mb-3">{point.subtitle}</p>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    {point.items.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>
            </section>

            {/* Two Pillars */}
            <section className="bg-gray-4 py-24 mb-24">
                <div className="container mx-auto px-6">
                    <ScrollFadeIn direction="up" delay={0}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-tensor-blue mb-4">2つの柱</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                ナレッジエンジニアリングを支える2つの技術的アプローチ
                            </p>
                        </div>
                    </ScrollFadeIn>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Pillar 1: Data Structuring */}
                        <ScrollFadeIn direction="left" delay={0.1}>
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-2 border-[#DC2363]/30 hover:border-[#DC2363] transition-colors h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[#DC2363] font-bold text-sm tracking-widest uppercase border border-[#DC2363] px-3 py-1 rounded-full">Pillar 01</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-1 mb-2">Data Structuring</h3>
                                <p className="text-[#DC2363] font-bold mb-6">データストラクチャリング</p>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    未加工の情報（ドキュメント、会話ログ、業務マニュアル、ベテランのノウハウなど）を整形・構造化し、AIが効果的に利活用できる「ナレッジ」へと加工するプロセス。
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-gray-1 mb-3">プロセス</h4>
                                        <div className="space-y-3">
                                            {[
                                                { step: "1", title: "収集（Collection）", desc: "多様なソースから情報を収集、インタビュー・観察" },
                                                { step: "2", title: "整形（Normalization）", desc: "フォーマット統一、ノイズ除去、重複整理" },
                                                { step: "3", title: "構造化（Structuring）", desc: "メタデータ付与、階層構造・関係性の定義" },
                                                { step: "4", title: "最適化（Optimization）", desc: "AIモデル向けチャンク分割、インデックス設計" },
                                            ].map((item) => (
                                                <div key={item.step} className="flex items-start gap-3">
                                                    <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">{item.step}</span>
                                                    <div>
                                                        <span className="font-medium text-gray-1">{item.title}</span>
                                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>

                        {/* Pillar 2: Context Engineering */}
                        <ScrollFadeIn direction="right" delay={0.2}>
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-2 border-[#DC2363]/30 hover:border-[#DC2363] transition-colors h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[#DC2363] font-bold text-sm tracking-widest uppercase border border-[#DC2363] px-3 py-1 rounded-full">Pillar 02</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-1 mb-2">Context Engineering</h3>
                                <p className="text-[#DC2363] font-bold mb-6">コンテキストエンジニアリング</p>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    構造化されたナレッジを最適に利活用するため、「どのように知識を蓄積し、AIエージェントに活用させるか」を設計・実装するプロセス。
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-gray-1 mb-3">主要コンポーネント</h4>
                                        <div className="space-y-3">
                                            {[
                                                { step: "1", title: "コンテキストウィンドウ設計", desc: "情報の選択・優先順位付け、動的コンテキスト生成" },
                                                { step: "2", title: "プロンプトアーキテクチャ", desc: "システムプロンプト設計、出力フォーマット制御" },
                                                { step: "3", title: "メモリマネジメント", desc: "短期・長期・作業記憶の統合管理" },
                                                { step: "4", title: "エージェントオーケストレーション", desc: "複数AIエージェントの協調・タスク分解" },
                                            ].map((item) => (
                                                <div key={item.step} className="flex items-start gap-3">
                                                    <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">{item.step}</span>
                                                    <div>
                                                        <span className="font-medium text-gray-1">{item.title}</span>
                                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* Implementation Patterns */}
            <section className="container mx-auto px-6 mb-24">
                <ScrollFadeIn direction="up" delay={0}>
                    <h2 className="text-3xl md:text-4xl font-bold text-tensor-blue mb-4">実装パターン</h2>
                    <p className="text-gray-500 mb-12">ナレッジエンジニアリングを具現化する技術アプローチ</p>
                </ScrollFadeIn>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {implementationPatterns.map((pattern, index) => (
                        <ScrollFadeIn key={pattern.title} direction="up" delay={0.1 * (index + 1)}>
                            <div className="bg-tensor-blue rounded-xl p-8 text-white h-full">
                                <h3 className="text-xl font-bold mb-4">{pattern.title}</h3>
                                <p className="text-sm text-white/70 mb-2">{pattern.subtitle}</p>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    {pattern.description}
                                </p>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>
            </section>

            {/* Summary */}
            <section className="container mx-auto px-6 mb-24">
                <ScrollFadeIn direction="up" delay={0}>
                    <div className="bg-gradient-to-br from-gray-4 to-white rounded-2xl p-8 md:p-12 border border-gray-3">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-xl md:text-2xl text-gray-1 leading-relaxed font-medium mb-8">
                                Tensoryのナレッジエンジニアリングは、単なるAI導入ではなく、<br className="hidden md:block" />
                                組織の知識を持続的に活用・発展させるための基盤技術です。
                            </p>
                            <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
                                <span className="bg-[#DC2363] text-white px-4 py-2 rounded-full font-medium">データストラクチャリング</span>
                                <span className="text-gray-400 py-2">で知識を整え</span>
                                <span className="bg-[#DC2363] text-white px-4 py-2 rounded-full font-medium">コンテキストエンジニアリング</span>
                                <span className="text-gray-400 py-2">で最適に活用し</span>
                                <span className="bg-tensor-blue text-white px-4 py-2 rounded-full font-medium">新しい知の循環</span>
                                <span className="text-gray-400 py-2">で人とAIが共に成長する</span>
                            </div>
                        </div>
                    </div>
                </ScrollFadeIn>
            </section>

            {/* CTA */}
            <section className="bg-tensor-blue py-20 text-center text-white">
                <div className="container mx-auto px-6">
                    <ScrollFadeIn direction="up" delay={0}>
                        <h2 className="text-3xl font-bold mb-6">技術詳細のご相談</h2>
                    </ScrollFadeIn>
                    <ScrollFadeIn direction="up" delay={0.1}>
                        <p className="mb-10 opacity-90">ナレッジエンジニアリングの導入について、お気軽にご相談ください。</p>
                    </ScrollFadeIn>
                    <ScrollFadeIn direction="up" delay={0.2}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block px-12 py-4 bg-white text-tensor-blue font-bold rounded-full hover:bg-sky-blue hover:text-white transition-all duration-300 shadow-lg"
                            >
                                お問い合わせ
                            </Link>
                            <Link
                                href="/service"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-tensor-blue transition-all duration-300"
                            >
                                サービス一覧 <ArrowRight className="ml-2" size={18} />
                            </Link>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
        </>
    );
}
