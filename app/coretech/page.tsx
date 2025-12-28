import type { Metadata } from "next";
import SECIDiagram from "./SECIDiagram";
import CoretechContent from "./CoretechContent";

export const metadata: Metadata = {
    title: "Core Technology - Tensory",
    description: "Tensoryのコアテクノロジー「ナレッジエンジニアリング」- 暗黙知を形式知へ変換し、AIと人間が共に成長する知の循環を実現",
};

export default function CoretechPage() {
    return (
        <div className="pt-32">
            {/* Page Header */}
            <div className="container mx-auto px-6 mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-tensor-blue mb-4">Core Technology</h1>
                <p className="text-gray-500 font-bold tracking-widest uppercase">ナレッジエンジニアリング</p>
            </div>

            {/* Overview */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-4xl">
                    <p className="text-xl md:text-2xl text-gray-1 leading-relaxed font-medium">
                        Tensoryのコアテクノロジーである
                        <span className="text-tensor-blue font-bold">「ナレッジエンジニアリング」</span>
                        は、企業に眠る暗黙知を形式知へと変換し、AIと人間が共に成長する
                        <span className="text-tensor-blue font-bold">「知の循環」</span>
                        を実現する技術体系です。
                    </p>
                </div>
            </section>

            {/* SECI Model Section with Diagrams */}
            <section className="bg-tensor-blue py-24 mb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            新しい知の循環
                        </h2>
                        <p className="text-sky-blue text-lg mb-8 tracking-wide">
                            現代のSECIモデル
                        </p>

                        {/* Problem Statement */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-16 border border-white/20">
                            <p className="text-white/90 leading-relaxed">
                                従来のSECIモデルでは、暗黙知を形式知に変換するために<span className="text-[#DC2363] font-bold">膨大な手間と環境の整備</span>が必要でした。
                                インタビュー、観察、ドキュメント化、そして共有の仕組み構築には多大な時間とコストがかかります。
                                しかし、<span className="font-bold text-white">AIを活用することで、この知の循環は圧倒的に高速化</span>しました。
                            </p>
                        </div>

                        {/* SECI Diagrams */}
                        <SECIDiagram />
                    </div>
                </div>
            </section>

            {/* Rest of Content */}
            <CoretechContent />
        </div>
    );
}
