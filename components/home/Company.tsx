"use client";

import Link from "next/link";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export default function Company() {
    const companyInfo = [
        { label: "会社名", value: "株式会社Tensory (Tensory Inc.)" },
        { label: "代表者", value: "代表取締役 CEO 内野 琢郎" },
        { label: "資本金", value: "2,000,000円" },
    ];

    return (
        <section className="py-24 md:py-36 bg-white relative">
            <div className="container mx-auto px-6">
                <ScrollFadeIn direction="up" delay={0}>
                    <div className="text-center mb-16">
                        <h2 className="text-tensor-blue text-sm font-bold tracking-[0.2em] uppercase mb-4">Company</h2>
                        <p className="text-3xl md:text-5xl font-bold text-gray-1">Corporate Profile</p>
                    </div>
                </ScrollFadeIn>

                <div className="w-full border-t border-gray-200">
                    <dl className="divide-y divide-gray-200">
                        {companyInfo.map((item, index) => (
                            <ScrollFadeIn key={item.label} direction="up" delay={0.1 * (index + 1)}>
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-gray-200">
                                    <dt className="font-bold text-tensor-blue md:col-span-3 lg:col-span-2 text-lg">{item.label}</dt>
                                    <dd className="text-gray-700 md:col-span-9 lg:col-span-10 text-lg font-medium">{item.value}</dd>
                                </div>
                            </ScrollFadeIn>
                        ))}
                        <ScrollFadeIn direction="up" delay={0.4}>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-gray-200">
                                <dt className="font-bold text-tensor-blue md:col-span-3 lg:col-span-2 text-lg">所在地</dt>
                                <dd className="text-gray-700 md:col-span-9 lg:col-span-10">
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <p className="mb-2 font-medium text-lg">〒103-0022</p>
                                            <p className="font-medium text-lg">東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階</p>
                                        </div>
                                        <div className="w-full h-[400px] bg-gray-100 relative rounded-sm overflow-hidden border border-gray-200">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8256743452423!2d139.7744837!3d35.681297999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188959f2105555%3A0x2a0487042307870!2z44CSMTAzLTAwMjIg5p2x5Lqs6YO95Lit5aSu5Yy65pel5pys5qmL5a6k55S677yR5LiB55uu77yR77yR4oiS77yR77ySIOaXpeacrOaQm-awtOaZueODk-ODqyA36ZqO!5e0!3m2!1sja!2sjp!4v1709600000000!5m2!1sja!2sjp"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                className="grayscale hover:grayscale-0 transition-all duration-500"
                                            ></iframe>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                        </ScrollFadeIn>
                    </dl>
                </div>

                <ScrollFadeIn direction="up" delay={0.5}>
                    <div className="mt-16 text-center">
                        <Link
                            href="/company"
                            className="inline-block px-12 py-3 border border-tensor-blue text-tensor-blue font-bold rounded-full hover:bg-tensor-blue hover:text-white transition-all duration-300"
                        >
                            会社概要詳細を見る
                        </Link>
                    </div>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
