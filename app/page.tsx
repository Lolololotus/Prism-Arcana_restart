"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalacticBackground from "@/components/GalacticBackground";
import ArcanaCard from "@/components/ArcanaCard";
import TypingNarrative from "@/components/TypingNarrative";
import JewelSlot from "@/components/JewelSlot";
import { calculateSoulNumber } from "@/lib/tarot";

export default function Home() {
    const [step, setStep] = useState(1);
    const [rawName, setRawName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [lifePath, setLifePath] = useState<number | null>(null);
    const [soulNumber, setSoulNumber] = useState<number | null>(null);
    const [narrative, setNarrative] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [objects, setObjects] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [bridgeProgress, setBridgeProgress] = useState(0);

    const calculateLifePath = (date: string) => {
        const digits = date.replace(/\D/g, "");
        if (digits.length !== 8) return;

        let sum = digits.split("").reduce((acc, d) => acc + parseInt(d), 0);
        while (sum > 9 && sum !== 11 && sum !== 22) {
            sum = sum.toString().split("").reduce((acc, d) => acc + parseInt(d), 0);
        }
        setLifePath(sum);
        setSoulNumber(calculateSoulNumber(date));
        setStep(3);
    };

    const startInterpretation = async () => {
        setStep(4);
        setIsTyping(true);
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: "나의 성좌를 비추고 근원을 보여라.",
                    rawName,
                    history: [],
                    tarotData: {
                        number: soulNumber,
                        name: soulNumber !== null ? (await import("@/lib/tarot")).MAJOR_ARCANA[soulNumber].name : "",
                        title: soulNumber !== null ? (await import("@/lib/tarot")).MAJOR_ARCANA[soulNumber].title : "",
                        symbol: soulNumber !== null ? (await import("@/lib/tarot")).MAJOR_ARCANA[soulNumber].symbol : ""
                    }
                }),
            });
            const data = await response.json();
            setNarrative(data.text);
        } catch (error) {
            console.error(error);
            setNarrative("심연의 회로에 균열이 투과되었습니다. 다시 시도하십시오.");
        }
    };

    const handleObjectCollect = (id: string) => {
        if (objects.length < 3 && !objects.includes(id)) setObjects([...objects, id]);
    };

    const handleColorCollect = (id: string) => {
        if (colors.length < 2 && !colors.includes(id)) setColors([...colors, id]);
    };

    const startGeneration = () => {
        setStep(7);
        setTimeout(() => setStep(8), 3000);
    };

    useEffect(() => {
        if (step === 8) {
            const interval = setInterval(() => {
                setBridgeProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStep(9);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [step]);

    return (
        <main className="ritual-container overflow-hidden">
            <GalacticBackground />

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="z-10 text-center flex flex-col items-center justify-center w-full max-w-2xl px-4"
                    >
                        <div className="glass-blueprint w-full flex flex-col items-center">
                            <h1 className="tracking-widest text-lg font-bold bloom-text mb-8">
                                당신을 뭐라고 부르길 원하십니까?
                            </h1>
                            <input
                                type="text"
                                autoFocus
                                value={rawName}
                                onChange={(e) => setRawName(e.target.value)}
                                className="bg-transparent border-b border-gold-celestial/30 p-2 text-center text-3xl tracking-widest outline-none font-serif text-[#F8F8F8] bloom-text focus:border-accent-gold transition-colors w-full max-w-md"
                                placeholder="..."
                                onKeyDown={(e) => e.key === "Enter" && rawName && setStep(2)}
                            />
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 text-center flex flex-col items-center justify-center w-full max-w-2xl px-4"
                    >
                        <div className="glass-blueprint w-full flex flex-col items-center">
                            <h1 className="tracking-widest text-lg font-bold bloom-text mb-8">
                                당신의 우주가 열린 날짜를 알려주십시오.
                            </h1>
                            <input
                                type="text"
                                autoFocus
                                maxLength={8}
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, ""))}
                                className="bg-transparent border-b border-gold-celestial/30 p-2 text-center text-3xl tracking-widest outline-none font-serif text-[#F8F8F8] bloom-text focus:border-accent-gold transition-colors w-full max-w-md"
                                placeholder="YYYYMMDD"
                                onKeyDown={(e) => e.key === "Enter" && birthDate.length === 8 && calculateLifePath(birthDate)}
                            />
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 flex flex-col items-center justify-center w-full max-w-2xl"
                    >
                        <ArcanaCard soulNumber={soulNumber} intensity={1} />

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-center mt-12 w-full flex flex-col items-center"
                        >
                            <div className="glass-blueprint mb-8 px-12 w-full max-w-md">
                                <h2 className="tracking-[0.5em] text-xl opacity-80">SOUL NUMBER: {soulNumber}</h2>
                            </div>
                            <button
                                onClick={startInterpretation}
                                className="crystalline-crest"
                            >
                                당신의 인생 카드 읽어보기
                            </button>
                        </motion.div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 flex flex-col items-center justify-center w-full px-4 max-w-4xl"
                    >
                        <div className="mb-4 opacity-50 scale-75 origin-center">
                            <ArcanaCard soulNumber={soulNumber} intensity={0.2} />
                        </div>

                        <div className="glass-blueprint w-full max-w-3xl">
                            {narrative ? (
                                <TypingNarrative text={narrative} onComplete={() => setIsTyping(false)} />
                            ) : (
                                <p className="tracking-widest animate-pulse italic text-center text-gold-celestial/50">천상의 도면을 인양하는 중...</p>
                            )}
                        </div>

                        {!isTyping && narrative && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => setStep(5)}
                                className="mt-8 crystalline-crest"
                            >
                                나만의 인생카드 공방으로 진입하기
                            </motion.button>
                        )}
                    </motion.div>
                )}

                {(step === 5 || step === 6) && (
                    <motion.div
                        key="workshop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 flex flex-col items-center justify-center w-full max-w-4xl"
                    >
                        <div className="scale-75 origin-center mb-0">
                            <ArcanaCard soulNumber={soulNumber} intensity={objects.length * 0.2 + colors.length * 0.2} />
                        </div>

                        <div className="glass-blueprint mt-4 text-center px-12 w-full max-w-2xl">
                            <p className="tracking-widest mb-6 bloom-text">
                                {step === 5 ? "지미니: 운명의 청사진을 구성하십시오." : "지미니: 색채의 영혼을 투과하십시오."}
                            </p>

                            <div className="flex gap-8 mb-6 justify-center">
                                {[1, 2, 3].map(i => (
                                    <JewelSlot
                                        key={`obj-${i}`}
                                        type="diamond"
                                        isActive={objects.length >= i}
                                        onClick={() => step === 5 && handleObjectCollect(`obj-${i}`)}
                                    />
                                ))}
                                {[1, 2].map(i => (
                                    <JewelSlot
                                        key={`col-${i}`}
                                        type="circle"
                                        isActive={colors.length >= i}
                                        color={i === 1 ? "#ff4d4d" : "#4d79ff"}
                                        onClick={() => step === 6 && handleColorCollect(`col-${i}`)}
                                    />
                                ))}
                            </div>

                            <div className="h-12 flex items-center justify-center">
                                {step === 5 && objects.length === 3 && (
                                    <button onClick={() => setStep(6)} className="text-accent-gold tracking-[0.4em] font-bold border-b border-accent-gold/40 hover:border-accent-gold transition-colors">다음 투과로</button>
                                )}

                                {step === 6 && colors.length === 2 && (
                                    <button onClick={startGeneration} className="crystalline-crest">아르카나 피어남</button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 7 && (
                    <motion.div
                        key="step7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 text-center flex flex-col items-center justify-center"
                    >
                        <ArcanaCard soulNumber={soulNumber} intensity={1} />
                        <p className="tracking-widest mt-12 bloom-text animate-pulse italic text-gold-celestial/60">
                            천상의 스테인드글라스를 도식화하는 중...
                        </p>
                    </motion.div>
                )}

                {step === 8 && (
                    <motion.div
                        key="step8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 w-full max-w-md text-center flex flex-col items-center justify-center"
                    >
                        <h2 className="tracking-widest mb-8 text-xl bloom-text gold-engraved">2026년의 궤적을 비추는 중...</h2>
                        <div className="w-full h-0.5 bg-white/5 relative overflow-hidden">
                            <motion.div
                                className="h-full bg-accent-gold shadow-[0_0_10px_var(--accent-gold)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${bridgeProgress}%` }}
                            />
                        </div>
                        <p className="mt-6 text-[10px] tracking-[0.5em] opacity-40 uppercase">Ethereal Connection Maintenance</p>
                    </motion.div>
                )}

                {step === 9 && (
                    <motion.div
                        key="step9"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="z-10 flex flex-col items-center justify-center w-full max-w-2xl"
                    >
                        <ArcanaCard soulNumber={soulNumber} intensity={1} glowColor="#ffcc00" />

                        <div className="glass-blueprint text-center mt-12 w-full">
                            <h1 className="tracking-[0.8em] text-4xl font-extrabold bloom-text mb-6 gold-engraved">2026 ARCANUM</h1>
                            <p className="tracking-widest opacity-80 mb-12 italic">"{rawName}" 님의 최종 형상이 투과되었습니다.</p>

                            <button className="crystalline-crest w-full">
                                운명의 도안 저장하기
                            </button>

                            <button
                                onClick={() => window.location.reload()}
                                className="block mt-8 text-[10px] tracking-[0.6em] opacity-30 hover:opacity-100 transition-opacity uppercase"
                            >
                                새로운 리추얼 시작
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {step === 3 && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 bg-white z-50 pointer-events-none"
                />
            )}
        </main>
    );
}
