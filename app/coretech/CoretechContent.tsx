import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoretechContent() {
    return (
        <>
            {/* Circulation Points */}
            <section className="container mx-auto px-6 mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-tensor-blue mb-4">循環のポイント</h2>
                <p className="text-gray-500 mb-12">AI時代の知識創造を加速する4つの要素</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group bg-white border border-gray-3 rounded-xl p-8 hover:border-tensor-blue transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl font-bold text-tensor-blue/20 group-hover:text-tensor-blue transition-colors">01</span>
                            <h3 className="text-lg font-bold text-gray-1">暗黙知の形式知化</h3>
                        </div>
                        <p className="text-sm text-[#DC2363] font-medium mb-3">表出化の加速</p>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>• ベテランの経験・勘をAIが理解できる形で記録</li>
                            <li>• 自然言語でのインタラクションにより、暗黙知の抽出が容易に</li>
                        </ul>
                    </div>
                    
                    <div className="group bg-white border border-gray-3 rounded-xl p-8 hover:border-tensor-blue transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl font-bold text-tensor-blue/20 group-hover:text-tensor-blue transition-colors">02</span>
                            <h3 className="text-lg font-bold text-gray-1">AIによる知識の増幅</h3>
                        </div>
                        <p className="text-sm text-[#DC2363] font-medium mb-3">連結化の強化</p>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>• 構造化された知識をAIが分析・統合</li>
                            <li>• 人間には見えなかったパターンや関連性を発見</li>
                        </ul>
                    </div>
                    
                    <div className="group bg-white border border-gray-3 rounded-xl p-8 hover:border-tensor-blue transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl font-bold text-tensor-blue/20 group-hover:text-tensor-blue transition-colors">03</span>
                            <h3 className="text-lg font-bold text-gray-1">パーソナライズされた知識提供</h3>
                        </div>
                        <p className="text-sm text-[#DC2363] font-medium mb-3">内面化の促進</p>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>• 個人の状況に応じた知識の提示</li>
                            <li>• 必要なときに必要な情報を適切な形で提供</li>
                        </ul>
                    </div>
                    
                    <div className="group bg-white border border-gray-3 rounded-xl p-8 hover:border-tensor-blue transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl font-bold text-tensor-blue/20 group-hover:text-tensor-blue transition-colors">04</span>
                            <h3 className="text-lg font-bold text-gray-1">継続的な学習と改善</h3>
                        </div>
                        <p className="text-sm text-[#DC2363] font-medium mb-3">自己強化ループ</p>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>• AIの回答に対するフィードバックが新たな知識として蓄積</li>
                            <li>• 利用されるほど精度が向上する自己強化ループ</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Two Pillars */}
            <section className="bg-gray-4 py-24 mb-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-tensor-blue mb-4">2つの柱</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            ナレッジエンジニアリングを支える2つの技術的アプローチ
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Pillar 1: Data Structuring */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-2 border-[#DC2363]/30 hover:border-[#DC2363] transition-colors">
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
                                        <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">1</span>
                                            <div>
                                                <span className="font-medium text-gray-1">収集（Collection）</span>
                                                <p className="text-sm text-gray-600">多様なソースから情報を収集、インタビュー・観察</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">2</span>
                                            <div>
                                                <span className="font-medium text-gray-1">整形（Normalization）</span>
                                                <p className="text-sm text-gray-600">フォーマット統一、ノイズ除去、重複整理</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">3</span>
                                            <div>
                                                <span className="font-medium text-gray-1">構造化（Structuring）</span>
                                                <p className="text-sm text-gray-600">メタデータ付与、階層構造・関係性の定義</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">4</span>
                                            <div>
                                                <span className="font-medium text-gray-1">最適化（Optimization）</span>
                                                <p className="text-sm text-gray-600">AIモデル向けチャンク分割、インデックス設計</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 2: Context Engineering */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-2 border-[#DC2363]/30 hover:border-[#DC2363] transition-colors">
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
                                        <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">1</span>
                                            <div>
                                                <span className="font-medium text-gray-1">コンテキストウィンドウ設計</span>
                                                <p className="text-sm text-gray-600">情報の選択・優先順位付け、動的コンテキスト生成</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">2</span>
                                            <div>
                                                <span className="font-medium text-gray-1">プロンプトアーキテクチャ</span>
                                                <p className="text-sm text-gray-600">システムプロンプト設計、出力フォーマット制御</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">3</span>
                                            <div>
                                                <span className="font-medium text-gray-1">メモリマネジメント</span>
                                                <p className="text-sm text-gray-600">短期・長期・作業記憶の統合管理</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-[#DC2363]/10 rounded-full flex items-center justify-center text-[#DC2363] text-xs font-bold flex-shrink-0">4</span>
                                            <div>
                                                <span className="font-medium text-gray-1">エージェントオーケストレーション</span>
                                                <p className="text-sm text-gray-600">複数AIエージェントの協調・タスク分解</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Patterns */}
            <section className="container mx-auto px-6 mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-tensor-blue mb-4">実装パターン</h2>
                <p className="text-gray-500 mb-12">ナレッジエンジニアリングを具現化する技術アプローチ</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-tensor-blue rounded-xl p-8 text-white">
                        <h3 className="text-xl font-bold mb-4">RAG</h3>
                        <p className="text-sm text-white/70 mb-2">Retrieval-Augmented Generation</p>
                        <p className="text-white/90 text-sm leading-relaxed">
                            ナレッジベースから関連情報を検索し、生成に活用
                        </p>
                    </div>
                    <div className="bg-tensor-blue rounded-xl p-8 text-white">
                        <h3 className="text-xl font-bold mb-4">Agent Memory</h3>
                        <p className="text-sm text-white/70 mb-2">エージェントメモリ</p>
                        <p className="text-white/90 text-sm leading-relaxed">
                            対話履歴や学習内容を蓄積し、パーソナライズされた応答を生成
                        </p>
                    </div>
                    <div className="bg-tensor-blue rounded-xl p-8 text-white">
                        <h3 className="text-xl font-bold mb-4">Multi-Agent System</h3>
                        <p className="text-sm text-white/70 mb-2">マルチエージェントシステム</p>
                        <p className="text-white/90 text-sm leading-relaxed">
                            専門性の異なる複数エージェントが協力して複雑なタスクを解決
                        </p>
                    </div>
                </div>
            </section>

            {/* Summary */}
            <section className="container mx-auto px-6 mb-24">
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
            </section>

            {/* CTA */}
            <section className="bg-tensor-blue py-20 text-center text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">技術詳細のご相談</h2>
                    <p className="mb-10 opacity-90">ナレッジエンジニアリングの導入について、お気軽にご相談ください。</p>
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
                </div>
            </section>
        </>
    );
}

