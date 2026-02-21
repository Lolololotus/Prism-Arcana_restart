"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicCircleProps {
    className?: string;
    isRevealed?: boolean;
}

export default function MagicCircle({ isRevealed = false, className }: MagicCircleProps) {
    const goldColor = "rgba(212, 175, 55, 0.7)"; // image_7b07fd.jpg의 황금빛 재현 [cite: 2026-02-21]

    return (
        <div className={cn("relative flex items-center justify-center w-[500px] h-[500px]", className)}>
            {/* 레이어 1: 최외곽 성좌 프레임 (초박형 0.5px 라인) [cite: 2026-02-21] */}
            <motion.svg
                viewBox="0 0 400 400"
                className="absolute w-full h-full opacity-40 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
                <circle cx="200" cy="200" r="190" fill="none" stroke={goldColor} strokeWidth="0.5" strokeDasharray="2 6" />
                {[...Array(12)].map((_, i) => (
                    <circle key={i} cx="200" cy="10" r="1.5" fill={goldColor} transform={`rotate(${i * 30} 200 200)`} />
                ))}
            </motion.svg>

            {/* 레이어 2: 신성한 기하학 (역회전 및 시차 적용) */}
            <motion.svg
                viewBox="0 0 400 400"
                className="absolute w-[85%] h-[85%] opacity-60 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <path d="M200,30 L350,300 L50,300 Z" fill="none" stroke={goldColor} strokeWidth="0.8" />
                <path d="M200,370 L50,100 L350,100 Z" fill="none" stroke={goldColor} strokeWidth="0.4" />
            </motion.svg>

            {/* 레이어 3: 중앙 아르카나 후광 (Bloom & Flare) [cite: 2026-02-21] */}
            <motion.div
                className="absolute w-[220px] h-[330px] rounded-sm pointer-events-none"
                animate={isRevealed ? {
                    boxShadow: ["0 0 20px rgba(212, 175, 55, 0.2)", "0 0 60px rgba(212, 175, 55, 0.5)", "0 0 20px rgba(212, 175, 55, 0.2)"]
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    );
}
