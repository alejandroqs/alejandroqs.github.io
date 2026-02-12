
"use client";

import { motion } from "framer-motion";
import { useEngineering } from "@/context/EngineeringContext";
import { cn } from "@/lib/utils";
import { Cloud, Coins, Cpu, Database, Globe, Smartphone } from "lucide-react";

export default function Skills() {
    const { data, mode } = useEngineering();

    return (
        <section className={cn(
            "py-24 px-6 lg:px-20 relative overflow-hidden transition-colors duration-500",
            mode === "corporate" ? "bg-slate-50" : "bg-slate-950"
        )}>
            {/* Background Grid Pattern - Better Implementation */}
            <div className={cn(
                "absolute inset-0 z-0 opacity-[0.15] pointer-events-none transition-opacity duration-500",
                mode === "corporate"
                    ? "bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:24px_24px]"
                    : "bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"
            )} />

            <div className="relative z-10 mx-auto max-w-7xl">
                <h2 className={cn(
                    "text-4xl font-bold tracking-tight mb-16",
                    mode === "disruptor" ? "text-neon-purple text-glow font-mono" : "text-slate-900"
                )}>
                    {data.skills.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    {/* Cluster 1: Mobile & Web */}
                    <motion.div
                        layout
                        className={cn(
                            "rounded-2xl border p-8 transition-all duration-500",
                            mode === "corporate"
                                ? "bg-white shadow-xl scale-100 ring-1 ring-slate-100"
                                : "bg-transparent border-slate-800/50 scale-95 opacity-50 grayscale hover:grayscale-0 hover:opacity-100"
                        )}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className={cn("p-2 rounded-lg", mode === "corporate" ? "bg-blue-50 text-blue-600" : "bg-slate-800 text-slate-500")}>
                                <Smartphone className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">{data.skills.mobileWeb.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {data.skills.mobileWeb.items.map((skill) => (
                                <SkillBadge key={skill} skill={skill} mode={mode} active={mode === "corporate"} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Cluster 2: Blockchain */}
                    <motion.div
                        layout
                        className={cn(
                            "rounded-2xl border p-8 transition-all duration-500 relative",
                            mode === "disruptor"
                                ? "bg-slate-900/60 backdrop-blur-md shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)] scale-100 border-neon-purple/50"
                                : "bg-slate-50 border-dashed border-slate-300 scale-95 opacity-60 hover:opacity-100"
                        )}
                    >
                        {mode === "disruptor" && (
                            <div className="absolute inset-0 bg-neon-purple/5 rounded-2xl animate-pulse-slow pointer-events-none" />
                        )}

                        <div className="flex items-center gap-3 mb-8">
                            <div className={cn("p-2 rounded-lg", mode === "disruptor" ? "bg-neon-purple/20 text-neon-purple" : "bg-slate-200 text-slate-500")}>
                                <Coins className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">{data.skills.blockchain.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-3 relative z-10">
                            {data.skills.blockchain.items.map((skill) => (
                                <SkillBadge key={skill} skill={skill} mode={mode} active={mode === "disruptor"} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SkillBadge({ skill, mode, active }: { skill: string; mode: string, active: boolean }) {
    return (
        <div className="group relative">
            <div
                className={cn(
                    "flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-all cursor-default select-none border",
                    active
                        ? (mode === "corporate"
                            ? "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm"
                            : "bg-slate-950 text-neon-purple border-neon-purple/30 hover:border-neon-purple hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]")
                        : "bg-transparent text-muted-foreground border-transparent opacity-70"
                )}
            >
                {skill === "React" && <Globe size={14} />}
                {skill === "AWS" && <Cloud size={14} />}
                {skill === "Solidity" && <Cpu size={14} />}
                {skill === "IPFS" && <Database size={14} />}
                {skill}
            </div>
        </div>
    );
}
