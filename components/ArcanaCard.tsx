"use client";

import { motion } from "framer-motion";
import { MAJOR_ARCANA } from "@/lib/tarot";
import MagicCircle from "./MagicCircle";

interface ArcanaCardProps {
    soulNumber?: number | null;
    image?: string;
    intensity?: number; // 0 to 1 for prism effect
    glowColor?: string;
    isRevealed?: boolean;
}

export default function ArcanaCard({
    soulNumber,
    image,
    intensity = 0,
    glowColor = "#d4af37",
    isRevealed = false
}: ArcanaCardProps) {
    const cardData = soulNumber !== null && soulNumber !== undefined ? MAJOR_ARCANA[soulNumber] : null;

    return (
        <div className="relative flex items-center justify-center w-full min-h-[500px]">
            {/* The Absolute Magic Circle frame */}
            <MagicCircle isRevealed={isRevealed} className="absolute inset-0" />

            {/* Light Burst Flare Effect */}
            <motion.div
                className="absolute w-[200%] h-[200%] pointer-events-none z-0"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isRevealed ? {
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2],
                    rotate: [0, 45]
                } : { opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(212, 175, 55, 0.2) 30%, transparent 70%)',
                    filter: 'blur(40px)'
                }}
            />

            <motion.div
                className="relative z-10 w-[280px] h-[450px] border border-gold-celestial/30 rounded-lg overflow-hidden glass-blueprint transition-shadow duration-700"
                style={{
                    boxShadow: isRevealed ? `0 0 60px ${glowColor}88` : '0 0 20px rgba(0,0,0,0.5)'
                }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Internal Decorative Frames */}
                <div className="absolute inset-2 border border-gold-celestial/10 rounded-sm pointer-events-none" />

                {/* Card Content */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-black/40">
                    {image ? (
                        <motion.img
                            src={image}
                            alt="Arcana"
                            className="w-full h-full object-cover rounded-sm"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        />
                    ) : cardData ? (
                        <div className="flex flex-col items-center">
                            <motion.span
                                className="text-7xl mb-8 filter drop-shadow-[0_0_20px_gold]"
                                animate={isRevealed ? {
                                    scale: [1, 1.2, 1],
                                    filter: ['drop-shadow(0 0 10px gold)', 'drop-shadow(0 0 30px white)', 'drop-shadow(0 0 10px gold)']
                                } : {}}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                {cardData.symbol}
                            </motion.span>

                            <h3 className="tracking-[0.6em] text-[#F8F8F8] text-xl font-bold mb-4 bloom-text uppercase">
                                {cardData.number}. {cardData.title}
                            </h3>

                            <p className="tracking-[0.8em] text-gold-celestial text-2xl font-black gold-engraved">
                                {cardData.name}
                            </p>
                        </div>
                    ) : (
                        <div className="tracking-[1em] text-[#F8F8F8]/20 text-xs italic animate-pulse">
                            DIVINING THE ARCHES...
                        </div>
                    )}
                </div>

                {/* Prism Overlay Effect */}
                <motion.div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, rgba(74, 158, 255, 0.1), rgba(212, 175, 55, 0.1), rgba(74, 158, 255, 0.1))`,
                        opacity: intensity,
                        mixBlendMode: "overlay"
                    }}
                />
            </motion.div>
        </div>
    );
}
