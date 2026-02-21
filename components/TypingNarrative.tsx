"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
            }, 50 + Math.random() * 50); // Natural typing speed
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, onComplete]);

    // Split by paragraphs to maintain structure
    const paragraphs = displayedText.split('\n\n');

    return (
        <div className="w-full max-w-2xl text-center font-serif tracking-widest leading-loose">
            {paragraphs.map((p, i) => (
                <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8 bloom-text text-lg text-[#F8F8F8]"
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
