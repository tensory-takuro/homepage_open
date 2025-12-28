"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Service", href: "/service" },
        { name: "Technology", href: "/coretech" },
        { name: "Company", href: "/company" },
        { name: "Blog", href: "https://note.com/tensory", target: "_blank" },
        { name: "Contact", href: "/contact", isButton: true },
    ];

    // Show header when scrolled or hovered
    const isVisible = isScrolled || isHovered;

    return (
        <>
            {/* Hover trigger zone at top of page */}
            <div 
                className="fixed top-0 left-0 right-0 h-24 z-40"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform",
                    isVisible
                        ? "bg-tensor-blue/95 backdrop-blur-sm py-3 shadow-lg opacity-100 translate-y-0"
                        : "bg-transparent py-6 opacity-0 -translate-y-full pointer-events-none"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    <Link href="/" className="relative z-50 flex items-center gap-2">
                        {/* Logo - Text-based for transparent background */}
                        <span className="text-white text-3xl md:text-4xl font-light">∞</span>
                        <span className="text-white text-xl md:text-2xl font-medium tracking-wide">Tensory</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target={item.target}
                                className={cn(
                                    "text-xl font-medium tracking-wide transition-all duration-300",
                                    item.isButton
                                        ? "px-6 py-2.5 bg-white text-tensor-blue rounded-full hover:bg-sky-blue hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                        : "text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-tensor-blue flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                target={item.target}
                                className={cn(
                                    "text-2xl font-bold tracking-widest",
                                    item.isButton
                                        ? "px-8 py-3 bg-white text-tensor-blue rounded-full"
                                        : "text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
