
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEngineering } from "@/context/EngineeringContext";
import { cn } from "@/lib/utils";
import { Box, Code2, ShieldCheck, Zap } from "lucide-react";

export default function Projects() {
    const { data, mode } = useEngineering();

    // Animation Variant for Staggered List
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <h2 className={cn(
                    "text-4xl font-bold tracking-tight",
                    mode === "disruptor" ? "text-neon-purple text-glow font-mono" : "text-slate-900"
                )}>
                    {data.projects.title}
                </h2>

                {/* Decorative Protocol Line */}
                <div className={cn(
                    "h-px flex-1 mx-8 hidden md:block transition-colors duration-500",
                    mode === "corporate" ? "bg-slate-200" : "bg-gradient-to-r from-neon-purple/50 to-transparent"
                )} />

                <span className="text-sm text-muted-foreground uppercase tracking-widest font-mono">
                    {mode === "corporate" ? "Case Studies :: 2024" : "Protocol Deployments :: Mainnet"}
                </span>
            </div>

            <motion.div
                layout
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {data.projects.items.map((project) => (
                        <motion.article
                            layout
                            variants={item}
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                                layout: { type: "spring", stiffness: 300, damping: 25 },
                                opacity: { duration: 0.2 }
                            }}
                            className={cn(
                                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-sm transition-all duration-300 h-[420px]",
                                mode === "disruptor"
                                    ? "bg-slate-900/40 border-slate-800 hover:border-neon-purple/60 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] backdrop-blur-md"
                                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1",
                                project.highlight && mode === "disruptor" ? "ring-1 ring-neon-purple shadow-[0_0_20px_rgba(168,85,247,0.2)] bg-gradient-to-b from-slate-900 via-slate-900 to-fuchsia-950/20" : ""
                            )}
                        >
                            {/* Corner Accent for Dispensable Tech Feel */}
                            {mode === "disruptor" && (
                                <div className="absolute top-0 right-0 p-2 opacity-50">
                                    <div className="w-2 h-2 border-t border-r border-neon-purple"></div>
                                </div>
                            )}

                            <div className="space-y-6">
                                {/* Icon Header */}
                                <div className="flex justify-between items-start">
                                    <div className={cn(
                                        "p-3 rounded-xl transition-colors",
                                        mode === "disruptor"
                                            ? "bg-slate-800/50 text-neon-purple ring-1 ring-white/5"
                                            : "bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white"
                                    )}>
                                        {project.id === "oraculum" && <Zap size={24} />}
                                        {project.id === "numerology" && <Box size={24} />}
                                        {project.id === "nft-collection" && <ShieldCheck size={24} />}
                                    </div>
                                    {project.highlight && mode === "disruptor" && (
                                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-full animate-pulse">
                                            AUDITED
                                        </span>
                                    )}
                                </div>

                                {/* Title & Desc */}
                                <div>
                                    <h3 className={cn(
                                        "text-2xl font-bold mb-3 transition-colors",
                                        mode === "corporate" ? "text-slate-900" : "text-white"
                                    )}>
                                        {project.title}
                                    </h3>
                                    <p className={cn(
                                        "text-sm leading-relaxed line-clamp-3",
                                        mode === "corporate" ? "text-slate-500" : "text-slate-400"
                                    )}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className={cn(
                                                "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
                                                mode === "corporate"
                                                    ? "bg-slate-50 text-slate-600 ring-slate-200"
                                                    : "bg-slate-950 text-slate-300 ring-slate-700"
                                            )}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Metrics Footer */}
                            <div className={cn(
                                "mt-6 pt-6 border-t flex justify-between items-center text-xs font-mono font-medium",
                                mode === "disruptor" ? "border-slate-800 text-slate-500" : "border-slate-100 text-slate-400"
                            )}>
                                <div className="flex gap-4">
                                    {project.metrics.map((m, i) => (
                                        <span key={i} className="flex items-center gap-1.5 uppercase tracking-wider">
                                            <Code2 size={12} className={mode === "disruptor" ? "text-neon-purple" : "text-slate-900"} />
                                            {m}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
