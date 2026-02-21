"use client";

import { motion } from "framer-motion";

interface JewelSlotProps {
    type: "diamond" | "circle";
    isActive: boolean;
    color?: string;
    onClick?: () => void;
}

export default function JewelSlot({ type, isActive, color, onClick }: JewelSlotProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`jewel-slot-crest ${type} ${isActive ? 'active' : ''} cursor-pointer relative group`}
        >
            {/* Internal Line Decoration */}
            <div className={`absolute inset-1 border ${isActive ? 'border-accent-gold/40' : 'border-white/10'}`}
                style={{ borderRadius: type === 'circle' ? '50%' : '0' }} />

            {isActive && (
                <motion.div
                    layoutId={`spark-${type}-${color}`}
                    className="absolute inset-0 z-10"
                    style={{
                        background: color ? `radial-gradient(circle, ${color}33 0%, transparent 70%)` : 'radial-gradient(circle, var(--accent-gold)33 0%, transparent 70%)'
                    }}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <div className={`w-2 h-2 ${type === 'circle' ? 'rounded-full' : 'rotate-45'} bg-white bloom-text`}
                            style={{ backgroundColor: color || 'var(--accent-gold)' }} />
                    </div>
                </motion.div>
            )}

            {/* Hover Sparkle */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="w-full h-full border border-celestial/30 animate-pulse" />
            </div>
        </motion.div>
    );
}
