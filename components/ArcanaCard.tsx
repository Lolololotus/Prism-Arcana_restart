"use client";

import { motion } from "framer-motion";
import { MAJOR_ARCANA } from "@/lib/tarot";

interface ArcanaCardProps {
    soulNumber?: number | null;
    image?: string;
    intensity?: number; // 0 to 1 for prism effect
    glowColor?: string;
}

export default function ArcanaCard({ soulNumber, image, intensity = 0, glowColor = "#d4af37" }: ArcanaCardProps) {
    const cardData = soulNumber !== null && soulNumber !== undefined ? MAJOR_ARCANA[soulNumber] : null;

    return (
        <motion.div
            className="arcana-card relative overflow-hidden flex flex-col items-center justify-center border border-gold/30 rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
                boxShadow: `0 0 40px ${glowColor}20`,
                background: "linear-gradient(135deg, #0a0a0a 0%, #000000 100%)"
            }}
        >
            {/* Prism Overlay Layer */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    background: `linear-gradient(45deg, rgba(255,255,255,0.1), rgba(212,175,55,0.05), rgba(255,255,255,0.1))`,
                    opacity: intensity,
                    mixBlendMode: "overlay"
                }}
            />

            {/* Content Area */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center">
                {image ? (
                    <img src={image} alt="Arcana" className="w-full h-full object-cover" />
                ) : cardData ? (
                    <div className="flex flex-col items-center">
                        <span className="text-4xl mb-4 filter drop-shadow-[0_0_8px_white]">{cardData.symbol}</span>
                        <h3 className="tracking-[0.4em] text-[#F8F8F8] text-xl font-bold mb-2 bloom-text">
                            {cardData.title}
                        </h3>
                        <p className="tracking-widest text-gold/60 text-sm italic">
                            {cardData.name}
                        </p>
                    </div>
                ) : (
                    <div className="tracking-[0.6em] text-[#F8F8F8]/20 text-xs italic animate-pulse">
                        DIVINING...
                    </div>
                )}
            </div>

            {/* Card Frame Decoration */}
            <div className="absolute inset-2 border border-gold/10 pointer-events-none rounded" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40" />
        </motion.div>
    );
}
