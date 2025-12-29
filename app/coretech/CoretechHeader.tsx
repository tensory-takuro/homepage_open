"use client";

import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export default function CoretechHeader() {
    return (
        <>
            {/* Page Header */}
            <div className="container mx-auto px-6 mb-20">
                <ScrollFadeIn direction="up" delay={0}>
                    <h1 className="text-4xl md:text-5xl font-bold text-tensor-blue mb-4">Core Technology</h1>
                </ScrollFadeIn>
                <ScrollFadeIn direction="up" delay={0.1}>
                    <p className="text-gray-500 font-bold tracking-widest uppercase">ナレッジエンジニアリング</p>
                </ScrollFadeIn>
            </div>

            {/* Overview */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-4xl">
                    <ScrollFadeIn direction="up" delay={0.2}>
                        <p className="text-xl md:text-2xl text-gray-1 leading-relaxed font-medium">
                            Tensoryのコアテクノロジーである
                            <span className="text-tensor-blue font-bold">「ナレッジエンジニアリング」</span>
                            は、企業に眠る暗黙知を形式知へと変換し、AIと人間が共に成長する
                            <span className="text-tensor-blue font-bold">「知の循環」</span>
                            を実現する技術体系です。
                        </p>
                    </ScrollFadeIn>
                </div>
            </section>
        </>
    );
}

