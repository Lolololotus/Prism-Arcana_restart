"use client";

import { motion } from "framer-motion";

interface JewelSlotProps {
    type: "diamond" | "circle";
    isActive?: boolean;
    color?: string;
    onClick?: () => void;
}

export default function JewelSlot({ type, isActive, color, onClick }: JewelSlotProps) {
    return (
        <motion.div
            onClick={onClick}
            className={`jewel-slot ${type} cursor-pointer relative overflow-hidden`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* Active Color Fill */}
            {isActive && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 z-10"
                    style={{
                        background: color || "var(--accent)",
                        boxShadow: `inset 0 0 15px rgba(255,255,255,0.4), 0 0 20px ${color || "var(--accent)"}`
                    }}
                />
            )}

            {/* Particle burst placeholder - done via Framer Motion on parent trigger */}
            {isActive && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-x-0 inset-y-0 z-20 bg-white/20"
                />
            )}
        </motion.div>
    );
}
