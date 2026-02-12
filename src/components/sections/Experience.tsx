
"use client";

import { motion } from "framer-motion";
import { useEngineering } from "@/context/EngineeringContext";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
    const { data, mode } = useEngineering();

    return (
        <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
            <h2 className={cn(
                "text-4xl font-bold tracking-tight mb-16 text-center",
                mode === "disruptor" ? "text-neon-purple text-glow font-mono" : "text-slate-900"
            )}>
                {data.experience.title}
            </h2>

            <div className="relative border-l-2 border-muted pl-8 ml-4 md:ml-12 space-y-12">
                {data.experience.items.map((job, index) => (
                    <motion.div
                        key={job.company + mode}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <span className={cn(
                            "absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background",
                            mode === "disruptor" ? "border-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "border-slate-300"
                        )}>
                            <div className={cn("h-2 w-2 rounded-full", mode === "disruptor" ? "bg-neon-purple" : "bg-slate-400")} />
                        </span>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                            <h3 className="text-2xl font-bold">{job.company}</h3>
                            <span className="text-sm text-muted-foreground font-mono flex items-center gap-1">
                                <Calendar size={14} />
                                {job.period}
                            </span>
                        </div>

                        <h4 className={cn(
                            "text-lg font-medium mb-3",
                            mode === "disruptor" ? "text-neon-purple" : "text-primary/80"
                        )}>
                            {job.role}
                        </h4>

                        <p className="max-w-2xl text-muted-foreground leading-relaxed">
                            {job.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
