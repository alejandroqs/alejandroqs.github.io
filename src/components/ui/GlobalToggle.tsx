
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEngineering } from "@/context/EngineeringContext";
import { cn } from "@/lib/utils"; // Wait, I might need utils first
import { Monitor, Terminal, Zap } from "lucide-react"; // Icons for context

export default function GlobalToggle() {
    const { mode, toggleMode } = useEngineering();

    return (
        <div className="flex items-center gap-3">
            {/* Label for Large Screens */}
            <span
                className={cn(
                    "text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-500 hidden lg:block",
                    mode === "corporate" ? "text-slate-500" : "text-neon-purple text-glow"
                )}
            >
                {mode === "corporate" ? "Business_Mode::ACTIVE" : "Protocol::INITIATED"}
            </span>

            {/* The Actual Switch Component */}
            <button
                onClick={toggleMode}
                className={cn(
                    "relative h-10 w-20 rounded-full p-1 transition-all duration-500 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
                    mode === "corporate"
                        ? "bg-slate-100 border-slate-300 shadow-neuorphism" // Added subtle shadow if possible later
                        : "bg-slate-900 border-neon-purple shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:ring-neon-purple"
                )}
                aria-label="Toggle Engineering Mode"
            >
                {/* Background Track Indicators */}
                <div className="absolute inset-0 flex justify-between px-2.5 items-center text-[10px] font-bold pointer-events-none">
                    <span className={cn("transition-opacity duration-300 text-slate-400 select-none", mode === "corporate" ? "opacity-0" : "opacity-100")}>WEB3</span>
                    <span className={cn("transition-opacity duration-300 text-slate-400 select-none", mode === "corporate" ? "opacity-100" : "opacity-0")}>CORP</span>
                </div>

                {/* The Toggle Thumb */}
                <motion.div
                    layout
                    className={cn(
                        "relative h-7 w-7 rounded-full flex items-center justify-center shadow-md",
                        mode === "corporate"
                            ? "bg-white text-slate-800"
                            : "bg-neon-purple text-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    )}
                    initial={false}
                    animate={{
                        x: mode === "corporate" ? "0%" : "140%",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                >
                    {mode === "corporate" ? (
                        <Monitor size={14} strokeWidth={2.5} />
                    ) : (
                        <Terminal size={14} strokeWidth={2.5} />
                    )}
                </motion.div>
            </button>
        </div>
    );
}
