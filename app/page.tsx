"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalacticBackground from "@/components/GalacticBackground";
import ArcanaCard from "@/components/ArcanaCard";
import TypingNarrative from "@/components/TypingNarrative";
import JewelSlot from "@/components/JewelSlot";

export default function Home() {
    const [step, setStep] = useState(1);
    const [rawName, setRawName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [lifePath, setLifePath] = useState<number | null>(null);
    const [narrative, setNarrative] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [objects, setObjects] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [bridgeProgress, setBridgeProgress] = useState(0);

    // Calculate Life Path Number
    const calculateLifePath = (date: string) => {
        const digits = date.replace(/\D/g, "");
        if (digits.length !== 8) return;

        let sum = digits.split("").reduce((acc, d) => acc + parseInt(d), 0);
        while (sum > 9 && sum !== 11 && sum !== 22) {
            sum = sum.toString().split("").reduce((acc, d) => acc + parseInt(d), 0);
        }
        setLifePath(sum);
        setStep(3); // Move to Step 3: Life Card reveal
    };

    const startInterpretation = async () => {
        setStep(4);
        setIsTyping(true);
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: `나의 인생 번호는 ${lifePath}이다. 나의 근원을 해석하라.`,
                    rawName,
                    history: []
                }),
            });
            const data = await response.json();
            setNarrative(data.text);
        } catch (error) {
            console.error(error);
            setNarrative("천상의 회로에 균열이 생겼다. 다시 시도하라.");
        }
    };

    const handleObjectCollect = (id: string) => {
        if (objects.length < 3 && !objects.includes(id)) {
            setObjects([...objects, id]);
        }
    };

    const handleColorCollect = (id: string) => {
        if (colors.length < 2 && !colors.includes(id)) {
            setColors([...colors, id]);
        }
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
                        className="z-10 text-center flex flex-col items-center"
                    >
                        <h1 className="tracking-widest mb-12 text-2xl font-bold bloom-text">
                            당신의 성명을 새겨넣으십시오.
                        </h1>
                        <input
                            type="text"
                            autoFocus
                            value={rawName}
                            onChange={(e) => setRawName(e.target.value)}
                            className="bg-transparent border-b border-white/20 p-2 text-center text-3xl tracking-widest outline-none font-serif text-[#F8F8F8] bloom-text"
                            placeholder="..."
                            onKeyDown={(e) => e.key === "Enter" && rawName && setStep(2)}
                        />
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 text-center flex flex-col items-center"
                    >
                        <h1 className="tracking-widest mb-12 text-2xl font-bold bloom-text">
                            탄생의 궤적을 입력하십시오 (8자리).
                        </h1>
                        <input
                            type="text"
                            autoFocus
                            maxLength={8}
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, ""))}
                            className="bg-transparent border-b border-white/20 p-2 text-center text-3xl tracking-widest outline-none font-serif text-[#F8F8F8] bloom-text"
                            placeholder="YYYYMMDD"
                            onKeyDown={(e) => e.key === "Enter" && birthDate.length === 8 && calculateLifePath(birthDate)}
                        />
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 flex flex-col items-center w-full max-w-lg"
                    >
                        <ArcanaCard intensity={0.2} />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-center mt-8"
                        >
                            <h2 className="tracking-widest text-xl opacity-60">인생 번호: {lifePath}</h2>
                            <button
                                onClick={startInterpretation}
                                className="mt-8 px-8 py-2 border border-accent/40 text-accent tracking-widest hover:bg-accent/10 transition-all font-serif"
                            >
                                의식 계속하기
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
                        className="z-10 flex flex-col items-center w-full px-4"
                    >
                        <div className="mb-12 opacity-40">
                            <ArcanaCard intensity={0.1} />
                        </div>
                        {narrative ? (
                            <TypingNarrative text={narrative} onComplete={() => setIsTyping(false)} />
                        ) : (
                            <p className="tracking-widest animate-pulse">심연의 서사를 길어올리는 중...</p>
                        )}

                        {!isTyping && narrative && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => setStep(5)}
                                className="mt-12 px-12 py-3 glass-effect text-accent tracking-widest border border-accent/20 hover:border-accent font-serif"
                            >
                                공방으로 진입하기
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
                        className="z-10 flex flex-col items-center w-full max-w-4xl"
                    >
                        <ArcanaCard intensity={objects.length * 0.2 + colors.length * 0.2} />

                        <div className="mt-12 text-center">
                            <p className="tracking-widest mb-8 bloom-text">
                                {step === 5 ? "지미니: 운명의 파편들을 선택하십시오." : "지미니: 색채의 영혼을 불어넣으십시오."}
                            </p>

                            <div className="flex gap-4 mb-8">
                                {[1, 2, 3].map(i => (
                                    <JewelSlot
                                        key={`obj-${i}`}
                                        type="diamond"
                                        isActive={objects.length >= i}
                                        onClick={() => {
                                            if (step === 5) handleObjectCollect(`obj-${i}`);
                                        }}
                                    />
                                ))}
                                {[1, 2].map(i => (
                                    <JewelSlot
                                        key={`col-${i}`}
                                        type="circle"
                                        isActive={colors.length >= i}
                                        color={i === 1 ? "#ff4d4d" : "#4d79ff"}
                                        onClick={() => {
                                            if (step === 6) handleColorCollect(`col-${i}`);
                                        }}
                                    />
                                ))}
                            </div>

                            {step === 5 && objects.length === 3 && (
                                <button onClick={() => setStep(6)} className="px-8 py-2 border border-accent/20 text-accent tracking-widest font-serif hover:bg-accent/10 transition-all">다음 단계로</button>
                            )}

                            {step === 6 && colors.length === 2 && (
                                <button onClick={startGeneration} className="px-8 py-2 border border-accent/20 text-accent tracking-widest font-serif hover:bg-accent/10 transition-all">아르카나 생성</button>
                            )}
                        </div>
                    </motion.div>
                )}

                {step === 7 && (
                    <motion.div
                        key="step7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 text-center"
                    >
                        <ArcanaCard intensity={1} />
                        <p className="tracking-widest mt-12 bloom-text animate-pulse">
                            심연의 스테인드글라스를 구워내는 중...
                        </p>
                    </motion.div>
                )}

                {step === 8 && (
                    <motion.div
                        key="step8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 w-full max-w-md text-center"
                    >
                        <h2 className="tracking-widest mb-8 text-xl bloom-text">2026년의 운명을 인양 중...</h2>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-accent"
                                initial={{ width: 0 }}
                                animate={{ width: `${bridgeProgress}%` }}
                            />
                        </div>
                        <p className="mt-4 text-xs tracking-widest opacity-40">성스러운 연결이 지속되고 있습니다.</p>
                    </motion.div>
                )}

                {step === 9 && (
                    <motion.div
                        key="step9"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="z-10 flex flex-col items-center w-full max-w-lg"
                    >
                        <ArcanaCard intensity={1} glowColor="#ffcc00" />
                        <div className="text-center mt-12">
                            <h1 className="tracking-widest text-3xl font-bold bloom-text mb-4">2026 ARCANUM</h1>
                            <p className="tracking-widest opacity-60 mb-12">"{rawName}" 님의 최종 운명이 확정되었습니다.</p>

                            <button className="px-12 py-3 border border-accent text-accent tracking-widest hover:bg-accent hover:text-black transition-all font-serif">
                                운명의 이미지 저장하기
                            </button>

                            <button
                                onClick={() => window.location.reload()}
                                className="block mt-8 text-xs tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                            >
                                새로운 리추얼 시작하기
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {step === 3 && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-white z-50 pointer-events-none"
                />
            )}
        </main>
    );
}
