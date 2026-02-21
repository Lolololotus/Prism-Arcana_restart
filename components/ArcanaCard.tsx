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
        <div className="relative flex items-center justify-center w-full">
            {/* Powerful pulsing back-bloom */}
            <div className="back-bloom" style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }} />

            <motion.div
                className="sanctuary-arch relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {/* Intricate Line Art (Mocked with CSS Borders/Decorations) */}
                <div className="absolute inset-4 border border-gold-celestial/20 pointer-events-none rounded-t-[180px]" />
                <div className="absolute inset-8 border border-gold-celestial/10 pointer-events-none rounded-t-[160px]" />

                {/* Celestial Symbols (SVG Decorations) */}
                <div className="absolute top-10 flex gap-4 opacity-30">
                    <span className="text-gold-celestial">✨</span>
                    <span className="text-gold-celestial">💠</span>
                    <span className="text-gold-celestial">✨</span>
                </div>

                {/* Card Content Area */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    {image ? (
                        <motion.img
                            src={image}
                            alt="Arcana"
                            className="w-full h-full object-cover rounded-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        />
                    ) : cardData ? (
                        <div className="flex flex-col items-center">
                            <motion.span
                                className="text-6xl mb-6 filter drop-shadow-[0_0_15px_white]"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                {cardData.symbol}
                            </motion.span>
                            <h3 className="tracking-[0.5em] text-[#F8F8F8] text-2xl font-bold mb-4 bloom-text">
                                {cardData.title}
                            </h3>
                            <p className="tracking-widest text-gold-celestial/70 text-lg italic gold-engraved">
                                {cardData.name}
                            </p>
                        </div>
                    ) : (
                        <div className="tracking-[0.8em] text-[#F8F8F8]/30 text-sm italic animate-pulse">
                            DIVINING THE ARCHES...
                        </div>
                    )}
                </div>

                {/* Prism Overlay Effect */}
                <motion.div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        background: `linear-gradient(45deg, rgba(74, 158, 255, 0.1), rgba(212, 175, 55, 0.1), rgba(74, 158, 255, 0.1))`,
                        opacity: intensity,
                        mixBlendMode: "screen"
                    }}
                />

                {/* Bottom Mandala Base */}
                <div className="absolute bottom-4 w-12 h-12 border border-gold-celestial/30 rotate-45 rounded-sm" />
            </motion.div>
        </div>
    );
}
