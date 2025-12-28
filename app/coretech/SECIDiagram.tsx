"use client";

import { useEffect, useState } from "react";

export default function SECIDiagram() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="space-y-16">
            {/* Traditional SECI Model */}
            <div>
                <h3 className="text-xl font-bold text-white/90 mb-8 border-l-4 border-sky-blue pl-4">
                    従来のSECIモデル
                </h3>
                <p className="text-white/70 mb-8">野中郁次郎が提唱した知識創造プロセス — <span className="text-white/50">従来では知識創造の流れが遅く、知識の循環が停滞することが多かった</span></p>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/10 relative overflow-hidden">
                    {/* SECI Cycle - Circular Layout */}
                    <div className="relative max-w-3xl mx-auto" style={{ minHeight: '450px' }}>
                        
                        {/* Connection Paths */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                            {/* S → E (top) */}
                            <path d="M 100 80 L 300 80" stroke="rgba(108, 167, 229, 0.4)" strokeWidth="3" strokeDasharray="8,6" fill="none" />
                            <polygon points="295,75 305,80 295,85" fill="rgba(108, 167, 229, 0.6)" />
                            
                            {/* E → C (right) */}
                            <path d="M 320 100 L 320 300" stroke="rgba(108, 167, 229, 0.4)" strokeWidth="3" strokeDasharray="8,6" fill="none" />
                            <polygon points="315,295 320,305 325,295" fill="rgba(108, 167, 229, 0.6)" />
                            
                            {/* C → I (bottom) */}
                            <path d="M 300 320 L 100 320" stroke="rgba(108, 167, 229, 0.4)" strokeWidth="3" strokeDasharray="8,6" fill="none" />
                            <polygon points="105,315 95,320 105,325" fill="rgba(108, 167, 229, 0.6)" />
                            
                            {/* I → S (left) */}
                            <path d="M 80 300 L 80 100" stroke="rgba(108, 167, 229, 0.4)" strokeWidth="3" strokeDasharray="8,6" fill="none" />
                            <polygon points="75,105 80,95 85,105" fill="rgba(108, 167, 229, 0.6)" />
                            
                            {/* Slow Moving Dots */}
                            {mounted && (
                                <>
                                    <circle r="6" fill="#6CA7E5" filter="drop-shadow(0 0 4px #6CA7E5)">
                                        <animateMotion dur="6s" repeatCount="indefinite" path="M 100 80 L 300 80" />
                                    </circle>
                                    <circle r="6" fill="#6CA7E5" filter="drop-shadow(0 0 4px #6CA7E5)">
                                        <animateMotion dur="6s" repeatCount="indefinite" begin="1.5s" path="M 320 100 L 320 300" />
                                    </circle>
                                    <circle r="6" fill="#6CA7E5" filter="drop-shadow(0 0 4px #6CA7E5)">
                                        <animateMotion dur="6s" repeatCount="indefinite" begin="3s" path="M 300 320 L 100 320" />
                                    </circle>
                                    <circle r="6" fill="#6CA7E5" filter="drop-shadow(0 0 4px #6CA7E5)">
                                        <animateMotion dur="6s" repeatCount="indefinite" begin="4.5s" path="M 80 300 L 80 100" />
                                    </circle>
                                </>
                            )}
                        </svg>

                        {/* Corner Cards */}
                        <div className="absolute top-0 left-0 w-[45%]">
                            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 border border-white/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-bold text-sky-blue">S</span>
                                    <div>
                                        <span className="text-white font-medium text-sm block">Socialization</span>
                                        <span className="text-white/50 text-xs">共同化</span>
                                    </div>
                                </div>
                                <p className="text-sky-blue text-xs font-medium mb-1">暗黙知 → 暗黙知</p>
                                <p className="text-white/50 text-xs">共有体験を通じて、暗黙知を他者に伝達する</p>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-[45%]">
                            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 border border-white/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-bold text-sky-blue">E</span>
                                    <div>
                                        <span className="text-white font-medium text-sm block">Externalization</span>
                                        <span className="text-white/50 text-xs">表出化</span>
                                    </div>
                                </div>
                                <p className="text-sky-blue text-xs font-medium mb-1">暗黙知 → 形式知</p>
                                <p className="text-white/50 text-xs">暗黙知を言語化・概念化して形式知に変換する</p>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-[45%]">
                            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 border border-white/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-bold text-sky-blue">I</span>
                                    <div>
                                        <span className="text-white font-medium text-sm block">Internalization</span>
                                        <span className="text-white/50 text-xs">内面化</span>
                                    </div>
                                </div>
                                <p className="text-sky-blue text-xs font-medium mb-1">形式知 → 暗黙知</p>
                                <p className="text-white/50 text-xs">形式知を実践を通じて暗黙知として体得する</p>
                            </div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-[45%]">
                            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 border border-white/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-bold text-sky-blue">C</span>
                                    <div>
                                        <span className="text-white font-medium text-sm block">Combination</span>
                                        <span className="text-white/50 text-xs">連結化</span>
                                    </div>
                                </div>
                                <p className="text-sky-blue text-xs font-medium mb-1">形式知 → 形式知</p>
                                <p className="text-white/50 text-xs">異なる形式知を組み合わせて新たな形式知を創造する</p>
                            </div>
                        </div>

                        {/* Center Label */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center">
                                <span className="text-white/30 text-sm">循環速度</span>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-2 h-2 bg-sky-blue/50 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
                                    <span className="text-white/50 text-lg font-light">遅い</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[#DC2363] font-bold text-lg">AI活用による加速</span>
                    <svg className="w-8 h-12 text-[#DC2363]" fill="none" viewBox="0 0 24 48" stroke="currentColor" strokeWidth="2">
                        <path d="M12 4v36M4 32l8 12 8-12" />
                    </svg>
                </div>
            </div>

            {/* AI Era SECI Model */}
            <div>
                <h3 className="text-xl font-bold text-white/90 mb-8 border-l-4 border-[#DC2363] pl-4">
                    Tensoryが提唱する「AI時代の知の循環」
                </h3>
                <p className="text-white/70 mb-8">
                    <span className="text-sky-blue font-bold">データストラクチャリング</span>と
                    <span className="text-sky-blue font-bold">コンテキストエンジニアリング</span>により高速循環
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[#DC2363]/30 relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DC2363]/10 to-transparent pointer-events-none" />

                    {/* SECI Cycle - Circular Layout */}
                    <div className="relative max-w-3xl mx-auto" style={{ minHeight: '500px' }}>
                        
                        {/* Connection Paths */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                            {/* S → E (top) */}
                            <path d="M 100 80 L 300 80" stroke="rgba(220, 35, 99, 0.6)" strokeWidth="4" fill="none" />
                            <polygon points="295,72 310,80 295,88" fill="#DC2363" />
                            
                            {/* E → C (right) */}
                            <path d="M 320 100 L 320 300" stroke="rgba(220, 35, 99, 0.6)" strokeWidth="4" fill="none" />
                            <polygon points="312,295 320,310 328,295" fill="#DC2363" />
                            
                            {/* C → I (bottom) */}
                            <path d="M 300 320 L 100 320" stroke="rgba(220, 35, 99, 0.6)" strokeWidth="4" fill="none" />
                            <polygon points="105,312 90,320 105,328" fill="#DC2363" />
                            
                            {/* I → S (left) */}
                            <path d="M 80 300 L 80 100" stroke="rgba(220, 35, 99, 0.6)" strokeWidth="4" fill="none" />
                            <polygon points="72,105 80,90 88,105" fill="#DC2363" />
                            
                            {/* Fast Moving Dots - Multiple dots per path */}
                            {mounted && (
                                <>
                                    {/* Top path - S to E */}
                                    {[0, 0.25, 0.5, 0.75].map((delay, i) => (
                                        <circle key={`top-${i}`} r="5" fill="#DC2363" filter="drop-shadow(0 0 6px #DC2363)">
                                            <animateMotion dur="1.5s" repeatCount="indefinite" begin={`${delay}s`} path="M 100 80 L 300 80" />
                                        </circle>
                                    ))}
                                    {/* Right path - E to C */}
                                    {[0, 0.25, 0.5, 0.75].map((delay, i) => (
                                        <circle key={`right-${i}`} r="5" fill="#DC2363" filter="drop-shadow(0 0 6px #DC2363)">
                                            <animateMotion dur="1.5s" repeatCount="indefinite" begin={`${delay + 0.375}s`} path="M 320 100 L 320 300" />
                                        </circle>
                                    ))}
                                    {/* Bottom path - C to I */}
                                    {[0, 0.25, 0.5, 0.75].map((delay, i) => (
                                        <circle key={`bottom-${i}`} r="5" fill="#DC2363" filter="drop-shadow(0 0 6px #DC2363)">
                                            <animateMotion dur="1.5s" repeatCount="indefinite" begin={`${delay + 0.75}s`} path="M 300 320 L 100 320" />
                                        </circle>
                                    ))}
                                    {/* Left path - I to S */}
                                    {[0, 0.25, 0.5, 0.75].map((delay, i) => (
                                        <circle key={`left-${i}`} r="5" fill="#DC2363" filter="drop-shadow(0 0 6px #DC2363)">
                                            <animateMotion dur="1.5s" repeatCount="indefinite" begin={`${delay + 1.125}s`} path="M 80 300 L 80 100" />
                                        </circle>
                                    ))}
                                </>
                            )}
                        </svg>

                        {/* Corner Cards */}
                        <div className="absolute top-0 left-0 w-[45%]">
                            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 border border-[#DC2363]/30 hover:border-[#DC2363] transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-bold text-[#DC2363]">S</span>
                                    <div>
                                        <span className="text-white font-medium text-sm block">Socialization</span>
                                        <span className="text-white/50 text-xs">共同化</span>
                                    </div>
                                </div>
                                <h4 className="text-white font-bold text-sm mb-1">暗黙知（人間）</h4>
                                <p className="text-white/60 text-xs">現場のベテランの経験・勘・ノウハウの共有</p>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-[45%]">
                            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 border border-[#DC2363]/30 hover:border-[#DC2363] transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-bold text-[#DC2363]">E</span>
                                    <div>
                                        <span className="text-white font-medium text-sm block">Externalization</span>
                                        <span className="text-white/50 text-xs">表出化</span>
                                    </div>
                                </div>
                                <h4 className="text-white font-bold text-sm mb-1">構造化された形式知（AI）</h4>
                                <p className="text-white/60 text-xs mb-1">現場の勘や属人的な情報を<span className="text-sky-blue font-bold">データストラクチャリング</span>により集約・構造化し、有効活用可能なナレッジを創出</p>
                            </div>
                        </div>

                        <div className="absolute bottom-12 left-0 w-[45%]">
                            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 border border-[#DC2363]/30 hover:border-[#DC2363] transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-bold text-[#DC2363]">I</span>
                                    <div>
                                        <span className="text-white font-medium text-sm block">Internalization</span>
                                        <span className="text-white/50 text-xs">内面化</span>
                                    </div>
                                </div>
                                <h4 className="text-white font-bold text-sm mb-1">新たな暗黙知（人間）</h4>
                                <p className="text-white/60 text-xs">AIによる示唆や分析を人が活用することにより新たな暗黙知やフィードバックを取得し、改善</p>
                            </div>
                        </div>

                        <div className="absolute bottom-12 right-0 w-[45%]">
                            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 border border-[#DC2363]/30 hover:border-[#DC2363] transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-bold text-[#DC2363]">C</span>
                                    <div>
                                        <span className="text-white font-medium text-sm block">Combination</span>
                                        <span className="text-white/50 text-xs">連結化</span>
                                    </div>
                                </div>
                                <h4 className="text-white font-bold text-sm mb-1">AIによる知識活用・生成</h4>
                                <p className="text-white/60 text-xs"><span className="text-sky-blue font-bold">コンテキストエンジニアリング</span>により構造化した情報を連結し、新たな気づきを示唆し、高次の知識を創造</p>
                            </div>
                        </div>

                        {/* Center Label */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center">
                                <span className="text-white/30 text-sm">循環速度</span>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-2 h-2 bg-[#DC2363] rounded-full animate-ping" />
                                    <span className="w-2 h-2 bg-[#DC2363] rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                                    <span className="w-2 h-2 bg-[#DC2363] rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                                    <span className="text-[#DC2363] text-lg font-bold">超高速</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cycle Arrow Indicator */}
                    <div className="text-center mt-4">
                        <div className="inline-flex items-center gap-4 bg-[#DC2363]/20 rounded-full px-8 py-4 border border-[#DC2363]/30">
                            <span className="text-4xl font-light" 
                                  style={{ 
                                      color: 'transparent',
                                      WebkitTextStroke: '2px white',
                                  }}>∞</span>
                            <span className="text-white font-medium">循環するごとに、人もAIもどんどん賢くなる</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
