import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="py-24 md:py-36 bg-gray-4 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-tensor-blue text-sm font-bold tracking-[0.2em] uppercase mb-6">Contact</h2>
                <p className="text-3xl md:text-5xl font-bold text-gray-1 mb-8">
                    AI導入・活用のご相談
                </p>
                <p className="text-gray-1 text-base md:text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
                    AIリテラシー研修、システム開発、営業支援など、<br className="hidden md:block" />
                    Tensoryのサービスに関するご質問・ご相談はお気軽にお問い合わせください。
                </p>

                <Link
                    href="/contact"
                    className="inline-block px-16 py-5 bg-tensor-blue text-white text-lg font-bold rounded-full hover:bg-sky-blue transition-all duration-300 shadow-xl hover:-translate-y-1 transform"
                >
                    お問い合わせはこちら
                </Link>
            </div>
        </section>
    );
}
