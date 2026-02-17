
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEngineering } from "@/context/EngineeringContext";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

// Typerwriter Component for Web3 Mode
const TypewriterText = ({ text, className }: { text: string; className?: string }) => {
    // Split text into lines if it contains breaks, but here we handle raw string
    const characters = text.split("");

    return (
        <motion.span
            className={className}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0, display: "none" },
                        visible: { opacity: 1, display: "inline" },
                    }}
                >
                    {char}
                </motion.span>
            ))}
            {/* Blinking Cursor */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="text-neon-purple inline-block ml-1 w-3 h-12 align-middle bg-neon-purple"
            />
        </motion.span>
    );
};

export default function Hero() {
    const { data, mode } = useEngineering();
    const [key, setKey] = useState(0);

    // Force re-render of typewriter when mode changes to disruptor
    useEffect(() => {
        if (mode === "disruptor") {
            setKey((prev) => prev + 1);
        }
    }, [mode]);

    return (
        <section id="hero" className={cn(
            "relative flex min-h-[90vh] flex-col justify-center px-6 lg:px-20 max-w-7xl mx-auto pt-24", // Added padding-top for header
            mode === "corporate" ? "text-slate-900" : "text-slate-100"
        )}>
            {/* Background Decor - Replaced Gradient with CSS Pattern for robust loading */}
            {mode === "corporate" ? (
                <div className="absolute inset-0 -z-10 bg-slate-50 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
            ) : (
                <div className="absolute inset-0 -z-10 bg-slate-950 [background-image:radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
            )}

            <div className="max-w-4xl space-y-10 relative z-10 opacity-100">
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <span className={cn(
                        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 border",
                        mode === "corporate"
                            ? "bg-white text-slate-800 border-slate-200 shadow-sm"
                            : "bg-slate-900 text-neon-purple border-neon-purple/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                    )}>
                        {mode === 'corporate' ? '● Available for Hire' : '● Protocol Status: Available'}
                    </span>

                    {/* Main Title - Removed clip-text for now to ensure visibility */}
                    <h1 className={cn(
                        "text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] min-h-[160px] sm:min-h-[220px]", // Min-height prevents layout jump
                        mode === "corporate" ? "text-slate-900 drop-shadow-sm" : "text-white"
                    )}>
                        {mode === 'corporate' ? (
                            <motion.div
                                key="corp-title"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                Full Stack <br />
                                <span className="text-slate-500">Engineer.</span>
                            </motion.div>
                        ) : (
                            <div className="font-mono text-glow">
                                <span className="text-neon-purple block mb-2">
                                    <TypewriterText key={`l1-${key}`} text="Blockchain" />
                                </span>
                                <span className="block text-white/90">
                                    <TypewriterText key={`l2-${key}`} text="Architect." />
                                </span>
                            </div>
                        )}
                    </h1>

                    {/* Subtitle with better contrast */}
                    <p className={cn(
                        "mt-8 text-xl sm:text-2xl max-w-2xl text-pretty leading-relaxed font-medium transition-colors duration-500",
                        mode === "corporate" ? "text-slate-600" : "text-slate-400 font-mono"
                    )}>
                        {mode === 'disruptor' && <span className="text-neon-purple mr-2">{">"}</span>}
                        {data.hero.subtitle}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    layout
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                            "h-14 px-8 rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg cursor-pointer",
                            mode === "corporate"
                                ? "bg-slate-900 text-white hover:bg-slate-800"
                                : "bg-neon-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                        )}
                    >
                        {data.hero.ctaPrimary}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.a>

                    <motion.a
                        href={mode === "corporate"
                            ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv/alejandro_quesada_cv_corp.pdf`
                            : `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv/alejandro_quesada_cv_web3.pdf`}
                        download={mode === "corporate" ? "Alejandro_Quesada_FullStack_CV.pdf" : "Alejandro_Quesada_Web3_Architect_CV.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                            "h-14 px-8 rounded-full font-bold text-lg flex items-center justify-center border-2 transition-all cursor-pointer",
                            mode === "corporate"
                                ? "border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50"
                                : "border-slate-700 text-slate-300 bg-transparent hover:border-neon-purple hover:text-neon-purple"
                        )}
                    >
                        {data.hero.ctaSecondary}
                        <Download className="ml-2 w-5 h-5" />
                    </motion.a>
                </motion.div>

                {/* Bottom Tagline */}
                <div className={cn(
                    "pt-8 text-sm font-semibold tracking-wide flex items-center gap-2 uppercase",
                    mode === "corporate" ? "text-slate-400" : "text-slate-600 font-mono"
                )}>
                    {mode === 'disruptor' && <Terminal size={14} className="text-neon-purple animate-pulse" />}
                    {data.hero.tagline}
                </div>
            </div>
        </section>
    );
}
