
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { content, Content, Mode } from "@/data/content";

interface EngineeringContextType {
    mode: Mode;
    toggleMode: () => void;
    data: Content;
}

const EngineeringContext = createContext<EngineeringContextType | undefined>(undefined);

export const EngineeringProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<Mode>("corporate");

    useEffect(() => {
        // Update data-theme attribute on body for global CSS variables
        document.body.dataset.theme = mode;
    }, [mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === "corporate" ? "disruptor" : "corporate"));
    };

    const data = content[mode];

    return (
        <EngineeringContext.Provider value={{ mode, toggleMode, data }}>
            {children}
        </EngineeringContext.Provider>
    );
};

export const useEngineering = () => {
    const context = useContext(EngineeringContext);
    if (context === undefined) {
        throw new Error("useEngineering must be used within an EngineeringProvider");
    }
    return context;
};
