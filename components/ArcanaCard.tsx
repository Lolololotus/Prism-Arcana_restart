"use client";

import { motion } from "framer-motion";

interface ArcanaCardProps {
    image?: string;
    intensity?: number; // 0 to 1 for prism effect
    glowColor?: string;
}

export default function ArcanaCard({ image, intensity = 0, glowColor = "#d4af37" }: ArcanaCardProps) {
    return (
        <motion.div
            className="arcana-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {/* Prism Overlay Layer */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    background: `linear-gradient(45deg, rgba(255,0,0,0.1), rgba(0,255,0,0.1), rgba(0,0,255,0.1))`,
                    opacity: intensity,
                    mixBlendMode: "overlay"
                }}
            />

            {/* Content Area */}
            <div className="w-full h-full flex items-center justify-center bg-black/40">
                {image ? (
                    <img src={image} alt="Arcana" className="w-full h-full object-cover" />
                ) : (
                    <div className="tracking-widest text-[#F8F8F8]/20 text-xs italic">
                        DIVINING...
                    </div>
                )}
            </div>

            {/* Internal Border Glow */}
            <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
        </motion.div>
    );
}
