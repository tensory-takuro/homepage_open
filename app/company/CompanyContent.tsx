"use client";

import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export default function CompanyContent() {
    const values = [
        {
            title: "ありのままを伝える",
            eng: "Truth",
            desc: "虚偽なく事実と向き合うことで、信頼の基盤を築きます。"
        },
        {
            title: "クイックウイン",
            eng: "Quick Win",
            desc: "小さく早く成果を出し、着実に成功体験を積み重ねることでプロジェクトを加速させます。"
        },
        {
            title: "現場主義",
            eng: "Gemba First",
            desc: "机上の空論ではなく、現場の声・実課題を重視して判断を行います。"
        },
        {
            title: "最小の資本で最大の成果",
            eng: "Efficiency",
            desc: "本質だけに集中し、過剰な工数をかけずにインパクトを出すことを追求します。"
        },
    ];

    const profileItems = [
        { label: "会社名", value: "株式会社Tensory (Tensory Inc.)" },
        { label: "代表者", value: "代表取締役 CEO 内野 琢郎" },
        { label: "資本金", value: "200万円" },
    ];

    return (
        <div className="pt-32 pb-20">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-20">
                <ScrollFadeIn direction="up" delay={0}>
                    <h1 className="text-4xl md:text-5xl font-bold text-tensor-blue mb-4">Company</h1>
                </ScrollFadeIn>
                <ScrollFadeIn direction="up" delay={0.1}>
                    <p className="text-gray-500 font-bold tracking-widest uppercase">会社概要</p>
                </ScrollFadeIn>
            </div>

            {/* Mission & Vision Section */}
            <section className="bg-gray-4 py-20 mb-24">
                <div className="container mx-auto px-6">
                    {/* Mission */}
                    <ScrollFadeIn direction="up" delay={0}>
                        <div className="max-w-4xl mx-auto text-center mb-24">
                            <h2 className="text-tensor-blue text-sm font-bold tracking-[0.2em] uppercase mb-6">Mission</h2>
                            <p className="text-3xl font-bold leading-tight text-tensor-blue mb-6">
                                知を循環し、組織の成長を促進する
                            </p>
                            <p className="text-gray-1 leading-loose">
                                現場に眠る暗黙知や情熱を、AIとテクノロジーの力で形式知へと昇華させます。<br />
                                それは単なる効率化ではなく、組織全体のポテンシャルを解放する「知の循環」の創造です。
                            </p>
                        </div>
                    </ScrollFadeIn>

                    {/* Vision */}
                    <ScrollFadeIn direction="up" delay={0.2}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-tensor-blue text-sm font-bold tracking-[0.2em] uppercase mb-6">Vision</h2>
                            <p className="text-3xl font-bold leading-tight text-tensor-blue mb-6">
                                最善の判断を行える知性あふれる社会の実現
                            </p>
                            <p className="text-gray-1 leading-loose">
                                知見を構造化し工夫を加えて活用することにより、<br />
                                経営者、従業員が最善の意思決定ができる情報や示唆を出せるAI・環境を用意すること。
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* Values Section */}
            <div className="container mx-auto px-6 mb-24">
                <ScrollFadeIn direction="up" delay={0}>
                    <h2 className="text-3xl font-bold text-tensor-blue mb-12 text-center">Values</h2>
                </ScrollFadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                    {values.map((val, index) => (
                        <ScrollFadeIn key={val.title} direction="up" delay={0.1 * (index + 1)}>
                            <div className="bg-white p-8 rounded-xl border border-gray-2 shadow-sm hover:shadow-md transition-shadow h-full">
                                <span className="block text-sky-blue text-xs font-bold uppercase mb-2 tracking-widest">{val.eng}</span>
                                <h3 className="text-xl font-bold text-gray-1 mb-4">{val.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>

            {/* Corporate Profile Section */}
            <section className="bg-white py-20 mb-24">
                <div className="container mx-auto px-6">
                    <ScrollFadeIn direction="up" delay={0}>
                        <h2 className="text-3xl font-bold text-tensor-blue mb-12 border-b-2 border-tensor-blue pb-4 inline-block">Corporate Profile</h2>
                    </ScrollFadeIn>

                    <dl className="max-w-4xl divide-y divide-gray-200">
                        {profileItems.map((item, index) => (
                            <ScrollFadeIn key={item.label} direction="up" delay={0.1 * (index + 1)}>
                                <div className="grid grid-cols-1 md:grid-cols-3 py-6">
                                    <dt className="font-bold text-gray-1 md:col-span-1 mb-2 md:mb-0">{item.label}</dt>
                                    <dd className="text-gray-600 md:col-span-2">{item.value}</dd>
                                </div>
                            </ScrollFadeIn>
                        ))}
                        <ScrollFadeIn direction="up" delay={0.4}>
                            <div className="grid grid-cols-1 md:grid-cols-3 py-6">
                                <dt className="font-bold text-gray-1 md:col-span-1 mb-2 md:mb-0">所在地</dt>
                                <dd className="text-gray-600 md:col-span-2">
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <p className="mb-1">〒103-0022</p>
                                            <p>東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階</p>
                                        </div>
                                        <div className="w-full h-64 bg-gray-200 relative rounded-lg overflow-hidden border border-gray-300">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8256743452423!2d139.7744837!3d35.681297999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188959f2105555%3A0x2a0487042307870!2z44CSMTAzLTAwMjIg5p2x5Lqs6YO95Lit5aSu5Yy65pel5pys5qmL5a6k55S677yR5LiB55uu77yR77yR4oiS77yR77ySIOaXpeacrOaQm-awtOaZueODk-ODqyA36ZqO!5e0!3m2!1sja!2sjp!4v1709600000000!5m2!1sja!2sjp"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                        </ScrollFadeIn>
                    </dl>
                </div>
            </section>

            {/* CEO Profile Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-6">
                    <ScrollFadeIn direction="up" delay={0}>
                        <h2 className="text-3xl font-bold text-tensor-blue mb-12 text-center">CEO Profile</h2>
                    </ScrollFadeIn>
                    <div className="max-w-4xl mx-auto">
                        <ScrollFadeIn direction="up" delay={0.1}>
                            <h3 className="text-xl font-bold mb-6 text-center">内野 琢郎 (Takuro Uchino)</h3>
                        </ScrollFadeIn>
                        <ScrollFadeIn direction="up" delay={0.2}>
                            <p className="text-gray-600 leading-loose text-center">
                                キーエンスで9年間、法人営業として製造業の現場課題に向き合い、多数の表彰など確かな実績を残す。その後、ロボットメーカーにてロボットを活用した新規事業を企画・推進し、自ら企画した製品が「ロボット大賞」を受賞。その後、生成AIコンサルティング企業では、生成AI研修やAI内製化支援、業務アプリケーション導入（Next.js/Supabase/AWS）など、AIエージェントやRAG活用を含む多くのプロジェクトをリード。製造現場のリアリティ、ロボティクスによる物理的な自動化、そして最先端のAI技術を統合し、実効性の高いソリューションを提供している。
                            </p>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}

