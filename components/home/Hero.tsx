"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
    const images = ["/chemical_plant_men_v2_05.webp", "/sales_meeting.webp"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative h-[88vh] w-full overflow-hidden flex items-center justify-center md:justify-start">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.0, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[index]}
                            alt="Hero Background"
                            fill
                            className="object-cover"
                            priority
                            quality={75}
                            sizes="100vw"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay - Tensor Blue Gradient (70% Opacity) */}
                <div className="absolute inset-0 bg-tensor-blue/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-tensor-blue/90 via-tensor-blue/50 to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-white pt-20">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-widest leading-tight mb-8 text-shadow"
                    >
                        <span className="whitespace-nowrap">企業の知識を『成果』に変える</span><br />
                        生成AIパートナー
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-base md:text-xl font-light opacity-90 max-w-2xl leading-relaxed"
                    >
                        Tensoryは企業の情報をAIによって成果に変える
                        <span className="md:block inline"> 「コンサルティング×AI」のスタートアップです。</span>
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 text-sm tracking-widest"
            >
                SCROLL
            </motion.div>
        </section>
    );
}
