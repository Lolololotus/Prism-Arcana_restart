"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicCircleProps {
    className?: string;
    isRevealed?: boolean;
}

export default function MagicCircle({ className, isRevealed }: MagicCircleProps) {
    return (
        <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
            {/* 1. 최외곽 레이어: 고전적 문양과 성좌의 흐름 (느린 회전) */}
            <motion.svg
                viewBox="0 0 500 500"
                className="absolute w-[120%] h-[120%] opacity-30 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <circle cx="250" cy="250" r="240" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" strokeDasharray="5 10" />
                <path d="M250 10 L260 40 M490 250 L460 260 M250 490 L240 460 M10 250 L40 240" stroke="url(#goldGradient)" strokeWidth="1" />
                {/* 복잡한 라인 프레임 구현 */}
                {[...Array(12)].map((_, i) => (
                    <rect key={i} x="245" y="0" width="10" height="20" fill="url(#goldGradient)" transform={`rotate(${i * 30} 250 250)`} opacity="0.5" />
                ))}
            </motion.svg>

            {/* 2. 중간 레이어: 신성한 기하학 - 삼각형과 육각형의 교차 (역회전) */}
            <motion.svg
                viewBox="0 0 500 500"
                className="absolute w-[95%] h-[95%] opacity-50 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <polygon points="250,50 423,350 77,350" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
                <polygon points="250,450 77,150 423,150" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
                <circle cx="250" cy="250" r="180" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
            </motion.svg>

            {/* 3. 핵심 레이어: 빛의 중심부와 미세한 룬 문자 (빠른 회전 및 펄스) */}
            <motion.svg
                viewBox="0 0 500 500"
                className="absolute w-[75%] h-[75%] pointer-events-none"
                animate={{
                    rotate: 360,
                    scale: isRevealed ? [1, 1.05, 1] : 1
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="50%" stopColor="#F9E076" />
                        <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                    <filter id="bloom">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                <circle cx="250" cy="250" r="120" fill="none" stroke="url(#goldGradient)" strokeWidth="3" filter="url(#bloom)" />
                {[...Array(24)].map((_, i) => (
                    <line key={i} x1="250" y1="130" x2="250" y2="150" stroke="url(#goldGradient)" strokeWidth="2" transform={`rotate(${i * 15} 250 250)`} />
                ))}
            </motion.svg>

            {/* 4. 폭발적 후광 효과 (Bloom/Flare) */}
            <motion.div
                className="absolute w-full h-full rounded-full bg-radial-gradient from-amber-200/40 via-transparent to-transparent blur-3xl pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={isRevealed ? { scale: 1.5, opacity: 0.6 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                    background: 'radial-gradient(circle, rgba(255, 230, 0, 0.4) 0%, transparent 70%)'
                }}
            />
        </div>
    );
}
