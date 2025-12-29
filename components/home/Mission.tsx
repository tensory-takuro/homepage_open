"use client";

import Image from "next/image";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export default function Mission() {
    return (
        <section className="relative py-24 md:py-36 overflow-hidden bg-tensor-blue text-white">
            {/* Background Image - Infinity Mark Full Width */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/infinity_mark.webp"
                    alt="Mission Background"
                    fill
                    className="object-cover opacity-20"
                    quality={100}
                />
                {/* Subtle gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-tensor-blue/80 to-tensor-blue/40 mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <ScrollFadeIn direction="up" delay={0}>
                        <h2 className="text-sky-blue text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6">Mission</h2>
                    </ScrollFadeIn>
                    <ScrollFadeIn direction="up" delay={0.1}>
                        <p className="text-3xl md:text-5xl font-bold leading-tight mb-10">
                            知を循環し、<br className="md:hidden" />
                            組織の成長を促進する
                        </p>
                    </ScrollFadeIn>
                    <ScrollFadeIn direction="up" delay={0.2}>
                        <p className="text-white/90 text-base md:text-lg leading-loose mb-12 max-w-2xl">
                            私たちは、現場に眠る暗黙知や情熱を、<br className="hidden md:block" />
                            AIとテクノロジーの力で形式知へと昇華させます。<br />
                            それは単なる効率化ではなく、<br className="hidden md:block" />
                            組織全体のポテンシャルを解放する「知の循環」の創造です。
                        </p>
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    );
}
