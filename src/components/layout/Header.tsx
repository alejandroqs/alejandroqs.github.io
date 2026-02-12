
"use client";

import Link from "next/link";
import GlobalToggle from "@/components/ui/GlobalToggle";
import { useEngineering } from "@/context/EngineeringContext";
import { motion } from "framer-motion";

export default function Header() {
    const { mode } = useEngineering();

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-40 h-16 border-b backdrop-blur-md transition-colors duration-500 ${mode === "corporate"
                    ? "bg-white/80 border-slate-200 text-slate-800"
                    : "bg-slate-950/80 border-slate-800 text-slate-200"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg transition-colors ${mode === "corporate"
                            ? "bg-slate-900 text-white"
                            : "bg-neon-purple text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                        }`}>
                        {mode === "corporate" ? "E" : "Ξ"}
                    </div>
                    <span className={`font-bold tracking-tight text-lg hidden sm:block ${mode === "disruptor" && "text-neon-purple text-glow font-mono"
                        }`}>
                        Engineering Switch
                    </span>
                </div>

                {/* Navigation & Toggle */}
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {["Projects", "Skills", "Experience", "Contact"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`transition-colors hover:text-primary ${mode === "corporate" ? "text-slate-600" : "text-slate-400 hover:text-neon-purple"
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="pl-6 border-l border-border h-8 flex items-center">
                        <GlobalToggle />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
