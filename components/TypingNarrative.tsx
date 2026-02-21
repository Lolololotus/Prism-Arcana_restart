"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingNarrativeProps {
    text: string;
    onComplete?: () => void;
}

export default function TypingNarrative({ text, onComplete }: TypingNarrativeProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 30 + Math.random() * 40); // Slightly faster mystical typing
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, onComplete]);

    const paragraphs = displayedText.split('\n\n');

    return (
        <div className="w-full max-w-2xl text-center font-serif tracking-widest leading-loose relative">
            {/* Gold Particle Emitter (Simple CSS simulation) */}
            <AnimatePresence>
                {currentIndex < text.length && (
                    <motion.div
                        key="typing-effect"
                        className="absolute pointer-events-none"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-accent-gold rounded-full"
                                initial={{ x: 0, y: 0, opacity: 1 }}
                                animate={{
                                    x: (Math.random() - 0.5) * 100,
                                    y: (Math.random() - 0.5) * 100,
                                    opacity: 0,
                                    scale: 0
                                }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {paragraphs.map((p, i) => (
                <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 bloom-text text-lg text-[#F8F8F8] relative"
                >
                    {p}
                    {i === paragraphs.length - 1 && currentIndex < text.length && (
                        <span className="cursor" />
                    )}
                </motion.p>
            ))}
        </div>
    );
}
