import Link from "next/link";

export default function Footer() {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Service", href: "/service" },
        { name: "Company", href: "/company" },
        { name: "Blog", href: "https://note.com/tensory", target: "_blank" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="bg-tensor-blue text-white py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <Link href="/" className="flex items-center gap-2 mx-auto md:mx-0 mb-4">
                            <span className="text-white text-3xl md:text-4xl font-light">∞</span>
                            <span className="text-white text-xl md:text-2xl font-medium tracking-wide">Tensory</span>
                        </Link>
                        <p className="text-sm opacity-70">企業の知識を『成果』に変える 生成AIパートナー</p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {navItems.map(item => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target={item.target}
                                className="text-sm font-bold hover:text-sky-blue transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs opacity-60">
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Tensory Inc. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
