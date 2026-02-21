(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/GalacticBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalacticBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function GalacticBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalacticBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let w = canvas.width = window.innerWidth;
            let h = canvas.height = window.innerHeight;
            const stars = [];
            const starCount = 150;
            let mouse = {
                x: -100,
                y: -100
            };
            class Star {
                x;
                y;
                size;
                opacity;
                vx;
                vy;
                constructor(){
                    this.x = Math.random() * w;
                    this.y = Math.random() * h;
                    this.size = Math.random() * 1.5;
                    this.opacity = Math.random();
                    this.vx = (Math.random() - 0.5) * 0.2;
                    this.vy = (Math.random() - 0.5) * 0.2;
                }
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.x < 0) this.x = w;
                    if (this.x > w) this.x = 0;
                    if (this.y < 0) this.y = h;
                    if (this.y > h) this.y = 0;
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        this.x += dx * 0.01;
                        this.y += dy * 0.01;
                    }
                }
                draw() {
                    if (!ctx) return;
                    ctx.fillStyle = `rgba(248, 248, 248, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            for(let i = 0; i < starCount; i++){
                stars.push(new Star());
            }
            function animate() {
                if (!ctx) return;
                ctx.clearRect(0, 0, w, h);
                stars.forEach({
                    "GalacticBackground.useEffect.animate": (star)=>{
                        star.update();
                        star.draw();
                    }
                }["GalacticBackground.useEffect.animate"]);
                requestAnimationFrame(animate);
            }
            const handleResize = {
                "GalacticBackground.useEffect.handleResize": ()=>{
                    w = canvas.width = window.innerWidth;
                    h = canvas.height = window.innerHeight;
                }
            }["GalacticBackground.useEffect.handleResize"];
            const handleMouseMove = {
                "GalacticBackground.useEffect.handleMouseMove": (e)=>{
                    mouse.x = e.clientX;
                    mouse.y = e.clientY;
                }
            }["GalacticBackground.useEffect.handleMouseMove"];
            const handleTouchMove = {
                "GalacticBackground.useEffect.handleTouchMove": (e)=>{
                    if (e.touches.length > 0) {
                        mouse.x = e.touches[0].clientX;
                        mouse.y = e.touches[0].clientY;
                    }
                }
            }["GalacticBackground.useEffect.handleTouchMove"];
            window.addEventListener('resize', handleResize);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleTouchMove);
            animate();
            return ({
                "GalacticBackground.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('touchmove', handleTouchMove);
                }
            })["GalacticBackground.useEffect"];
        }
    }["GalacticBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed top-0 left-0 w-full h-full pointer-events-none",
        style: {
            background: 'transparent',
            zIndex: -1 // Explicitly set to negative to stay behind everything
        }
    }, void 0, false, {
        fileName: "[project]/components/GalacticBackground.tsx",
        lineNumber: 110,
        columnNumber: 9
    }, this);
}
_s(GalacticBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = GalacticBackground;
var _c;
__turbopack_context__.k.register(_c, "GalacticBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/tarot.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAJOR_ARCANA",
    ()=>MAJOR_ARCANA,
    "calculateSoulNumber",
    ()=>calculateSoulNumber
]);
const MAJOR_ARCANA = {
    0: {
        number: 0,
        title: "THE FOOL",
        name: "광대",
        symbol: "🃏"
    },
    1: {
        number: 1,
        title: "THE MAGICIAN",
        name: "마법사",
        symbol: "🪄"
    },
    2: {
        number: 2,
        title: "THE HIGH PRIESTESS",
        name: "고위 여사제",
        symbol: "🌙"
    },
    3: {
        number: 3,
        title: "THE EMPRESS",
        name: "여황제",
        symbol: "👑"
    },
    4: {
        number: 4,
        title: "THE EMPEROR",
        name: "황제",
        symbol: "🛡️"
    },
    5: {
        number: 5,
        title: "THE HIEROPHANT",
        name: "교황",
        symbol: "📜"
    },
    6: {
        number: 6,
        title: "THE LOVERS",
        name: "연인",
        symbol: "❤️"
    },
    7: {
        number: 7,
        title: "THE CHARIOT",
        name: "전차",
        symbol: "🛡️"
    },
    8: {
        number: 8,
        title: "STRENGTH",
        name: "힘",
        symbol: "🦁"
    },
    9: {
        number: 9,
        title: "THE HERMIT",
        name: "은둔자",
        symbol: "🏮"
    },
    10: {
        number: 10,
        title: "WHEEL OF FORTUNE",
        name: "운명의 수레바퀴",
        symbol: "🎡"
    },
    11: {
        number: 11,
        title: "JUSTICE",
        name: "정의",
        symbol: "⚖️"
    },
    12: {
        number: 12,
        title: "THE HANGED MAN",
        name: "매달린 사람",
        symbol: "⌛"
    },
    13: {
        number: 13,
        title: "DEATH",
        name: "죽음",
        symbol: "💀"
    },
    14: {
        number: 14,
        title: "TEMPERANCE",
        name: "절제",
        symbol: "🏺"
    },
    15: {
        number: 15,
        title: "THE DEVIL",
        name: "악마",
        symbol: "🔥"
    },
    16: {
        number: 16,
        title: "THE TOWER",
        name: "탑",
        symbol: "⚡"
    },
    17: {
        number: 17,
        title: "THE STAR",
        name: "별",
        symbol: "✨"
    },
    18: {
        number: 18,
        title: "THE MOON",
        name: "달",
        symbol: "🌙"
    },
    19: {
        number: 19,
        title: "THE SUN",
        name: "태양",
        symbol: "☀️"
    },
    20: {
        number: 20,
        title: "JUDGEMENT",
        name: "심판",
        symbol: "🎺"
    },
    21: {
        number: 21,
        title: "THE WORLD",
        name: "세계",
        symbol: "🌍"
    }
};
const calculateSoulNumber = (date)=>{
    const digits = date.replace(/\D/g, "");
    if (digits.length !== 8) return 0;
    const year = parseInt(digits.substring(0, 4));
    const month = parseInt(digits.substring(4, 6));
    const day = parseInt(digits.substring(6, 8));
    let sum = year + month + day;
    let soul = sum % 22;
    return soul;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ArcanaCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArcanaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tarot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tarot.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ArcanaCard({ soulNumber, image, intensity = 0, glowColor = "#d4af37" }) {
    const cardData = soulNumber !== null && soulNumber !== undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tarot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAJOR_ARCANA"][soulNumber] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "back-bloom",
                style: {
                    background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/ArcanaCard.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "sanctuary-arch relative overflow-hidden",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1.5,
                    ease: "easeOut"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-4 border border-gold-celestial/20 pointer-events-none rounded-t-[180px]"
                    }, void 0, false, {
                        fileName: "[project]/components/ArcanaCard.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-8 border border-gold-celestial/10 pointer-events-none rounded-t-[160px]"
                    }, void 0, false, {
                        fileName: "[project]/components/ArcanaCard.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-10 flex gap-4 opacity-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold-celestial",
                                children: "✨"
                            }, void 0, false, {
                                fileName: "[project]/components/ArcanaCard.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold-celestial",
                                children: "💠"
                            }, void 0, false, {
                                fileName: "[project]/components/ArcanaCard.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold-celestial",
                                children: "✨"
                            }, void 0, false, {
                                fileName: "[project]/components/ArcanaCard.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ArcanaCard.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center",
                        children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: image,
                            alt: "Arcana",
                            className: "w-full h-full object-cover rounded-md",
                            initial: {
                                scale: 0.8,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ArcanaCard.tsx",
                            lineNumber: 41,
                            columnNumber: 25
                        }, this) : cardData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "text-6xl mb-6 filter drop-shadow-[0_0_15px_white]",
                                    animate: {
                                        y: [
                                            0,
                                            -10,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity
                                    },
                                    children: cardData.symbol
                                }, void 0, false, {
                                    fileName: "[project]/components/ArcanaCard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "tracking-[0.5em] text-[#F8F8F8] text-2xl font-bold mb-4 bloom-text",
                                    children: cardData.title
                                }, void 0, false, {
                                    fileName: "[project]/components/ArcanaCard.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "tracking-widest text-gold-celestial/70 text-lg italic gold-engraved",
                                    children: cardData.name
                                }, void 0, false, {
                                    fileName: "[project]/components/ArcanaCard.tsx",
                                    lineNumber: 60,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ArcanaCard.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tracking-[0.8em] text-[#F8F8F8]/30 text-sm italic animate-pulse",
                            children: "DIVINING THE ARCHES..."
                        }, void 0, false, {
                            fileName: "[project]/components/ArcanaCard.tsx",
                            lineNumber: 65,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ArcanaCard.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 z-20 pointer-events-none",
                        style: {
                            background: `linear-gradient(45deg, rgba(74, 158, 255, 0.1), rgba(212, 175, 55, 0.1), rgba(74, 158, 255, 0.1))`,
                            opacity: intensity,
                            mixBlendMode: "screen"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ArcanaCard.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 w-12 h-12 border border-gold-celestial/30 rotate-45 rounded-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/ArcanaCard.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArcanaCard.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ArcanaCard.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = ArcanaCard;
var _c;
__turbopack_context__.k.register(_c, "ArcanaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TypingNarrative.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypingNarrative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TypingNarrative({ text, onComplete }) {
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingNarrative.useEffect": ()=>{
            if (currentIndex < text.length) {
                const timeout = setTimeout({
                    "TypingNarrative.useEffect.timeout": ()=>{
                        setDisplayedText({
                            "TypingNarrative.useEffect.timeout": (prev)=>prev + text[currentIndex]
                        }["TypingNarrative.useEffect.timeout"]);
                        setCurrentIndex({
                            "TypingNarrative.useEffect.timeout": (prev)=>prev + 1
                        }["TypingNarrative.useEffect.timeout"]);
                    }
                }["TypingNarrative.useEffect.timeout"], 50 + Math.random() * 50); // Natural typing speed
                return ({
                    "TypingNarrative.useEffect": ()=>clearTimeout(timeout)
                })["TypingNarrative.useEffect"];
            } else if (onComplete) {
                onComplete();
            }
        }
    }["TypingNarrative.useEffect"], [
        currentIndex,
        text,
        onComplete
    ]);
    // Split by paragraphs to maintain structure
    const paragraphs = displayedText.split('\n\n');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl text-center font-serif tracking-widest leading-loose",
        children: paragraphs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "mb-8 bloom-text text-lg text-[#F8F8F8]",
                children: [
                    p,
                    i === paragraphs.length - 1 && currentIndex < text.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cursor"
                    }, void 0, false, {
                        fileName: "[project]/components/TypingNarrative.tsx",
                        lineNumber: 41,
                        columnNumber: 25
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/components/TypingNarrative.tsx",
                lineNumber: 33,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/TypingNarrative.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(TypingNarrative, "0VZj2FpGL+Z+ba2xbDr3U87hfA0=");
_c = TypingNarrative;
var _c;
__turbopack_context__.k.register(_c, "TypingNarrative");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/JewelSlot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JewelSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function JewelSlot({ type, isActive, color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.95
        },
        onClick: onClick,
        className: `jewel-slot-crest ${type} ${isActive ? 'active' : ''} cursor-pointer relative group`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-1 border ${isActive ? 'border-accent-gold/40' : 'border-white/10'}`,
                style: {
                    borderRadius: type === 'circle' ? '50%' : '0'
                }
            }, void 0, false, {
                fileName: "[project]/components/JewelSlot.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: `spark-${type}-${color}`,
                className: "absolute inset-0 z-10",
                style: {
                    background: color ? `radial-gradient(circle, ${color}33 0%, transparent 70%)` : 'radial-gradient(circle, var(--accent-gold)33 0%, transparent 70%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-2 h-2 ${type === 'circle' ? 'rounded-full' : 'rotate-45'} bg-white bloom-text`,
                        style: {
                            backgroundColor: color || 'var(--accent-gold)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/JewelSlot.tsx",
                        lineNumber: 33,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/JewelSlot.tsx",
                    lineNumber: 32,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/JewelSlot.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full border border-celestial/30 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/components/JewelSlot.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/JewelSlot.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/JewelSlot.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_c = JewelSlot;
var _c;
__turbopack_context__.k.register(_c, "JewelSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GalacticBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GalacticBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArcanaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ArcanaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TypingNarrative$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TypingNarrative.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JewelSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/JewelSlot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tarot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tarot.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Home() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [rawName, setRawName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [birthDate, setBirthDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lifePath, setLifePath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [soulNumber, setSoulNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [narrative, setNarrative] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [objects, setObjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [colors, setColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bridgeProgress, setBridgeProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const calculateLifePath = (date)=>{
        const digits = date.replace(/\D/g, "");
        if (digits.length !== 8) return;
        let sum = digits.split("").reduce((acc, d)=>acc + parseInt(d), 0);
        while(sum > 9 && sum !== 11 && sum !== 22){
            sum = sum.toString().split("").reduce((acc, d)=>acc + parseInt(d), 0);
        }
        setLifePath(sum);
        setSoulNumber((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tarot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSoulNumber"])(date));
        setStep(3);
    };
    const startInterpretation = async ()=>{
        setStep(4);
        setIsTyping(true);
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: "나의 성좌를 비추고 근원을 보여라.",
                    rawName,
                    history: [],
                    tarotData: {
                        number: soulNumber,
                        name: soulNumber !== null ? (await __turbopack_context__.A("[project]/lib/tarot.ts [app-client] (ecmascript, async loader)")).MAJOR_ARCANA[soulNumber].name : "",
                        title: soulNumber !== null ? (await __turbopack_context__.A("[project]/lib/tarot.ts [app-client] (ecmascript, async loader)")).MAJOR_ARCANA[soulNumber].title : "",
                        symbol: soulNumber !== null ? (await __turbopack_context__.A("[project]/lib/tarot.ts [app-client] (ecmascript, async loader)")).MAJOR_ARCANA[soulNumber].symbol : ""
                    }
                })
            });
            const data = await response.json();
            setNarrative(data.text);
        } catch (error) {
            console.error(error);
            setNarrative("심연의 회로에 균열이 투과되었습니다. 다시 시도하십시오.");
        }
    };
    const handleObjectCollect = (id)=>{
        if (objects.length < 3 && !objects.includes(id)) setObjects([
            ...objects,
            id
        ]);
    };
    const handleColorCollect = (id)=>{
        if (colors.length < 2 && !colors.includes(id)) setColors([
            ...colors,
            id
        ]);
    };
    const startGeneration = ()=>{
        setStep(7);
        setTimeout(()=>setStep(8), 3000);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (step === 8) {
                const interval = setInterval({
                    "Home.useEffect.interval": ()=>{
                        setBridgeProgress({
                            "Home.useEffect.interval": (prev)=>{
                                if (prev >= 100) {
                                    clearInterval(interval);
                                    setStep(9);
                                    return 100;
                                }
                                return prev + 1;
                            }
                        }["Home.useEffect.interval"]);
                    }
                }["Home.useEffect.interval"], 50);
                return ({
                    "Home.useEffect": ()=>clearInterval(interval)
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        step
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "ritual-container overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GalacticBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 1.1
                        },
                        className: "fixed inset-0 z-10 text-center flex flex-col items-center justify-center p-4 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-blueprint w-full max-w-2xl flex flex-col items-center pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "tracking-widest text-lg font-bold bloom-text mb-10",
                                    children: "당신을 뭐라고 부르길 원하십니까?"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    autoFocus: true,
                                    value: rawName,
                                    onChange: (e)=>setRawName(e.target.value),
                                    className: "bg-transparent border-b border-gold-celestial/30 p-2 text-center text-3xl tracking-widest outline-none font-serif text-[#F8F8F8] bloom-text focus:border-accent-gold transition-colors w-full max-w-md",
                                    placeholder: "...",
                                    onKeyDown: (e)=>e.key === "Enter" && rawName && setStep(2)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 25
                        }, this)
                    }, "step1", false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 z-10 text-center flex flex-col items-center justify-center p-4 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-blueprint w-full max-w-2xl flex flex-col items-center pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "tracking-widest text-lg font-bold bloom-text mb-10",
                                    children: "당신의 우주가 열린 날짜를 알려주십시오."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    autoFocus: true,
                                    maxLength: 8,
                                    value: birthDate,
                                    onChange: (e)=>setBirthDate(e.target.value.replace(/\D/g, "")),
                                    className: "bg-transparent border-b border-gold-celestial/30 p-2 text-center text-3xl tracking-widest outline-none font-serif text-[#F8F8F8] bloom-text focus:border-accent-gold transition-colors w-full max-w-md",
                                    placeholder: "YYYYMMDD",
                                    onKeyDown: (e)=>e.key === "Enter" && birthDate.length === 8 && calculateLifePath(birthDate)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 130,
                            columnNumber: 25
                        }, this)
                    }, "step2", false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "z-10 flex flex-col items-center justify-center w-full max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArcanaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                soulNumber: soulNumber,
                                intensity: 1
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 156,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1
                                },
                                className: "text-center mt-12 w-full flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-blueprint mb-8 px-12 w-full max-w-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "tracking-[0.5em] text-xl opacity-80",
                                            children: [
                                                "SOUL NUMBER: ",
                                                soulNumber
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startInterpretation,
                                        className: "crystalline-crest",
                                        children: "당신의 인생 카드 읽어보기"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 158,
                                columnNumber: 25
                            }, this)
                        ]
                    }, "step3", true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 149,
                        columnNumber: 21
                    }, this),
                    step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "z-10 flex flex-col items-center justify-center w-full px-4 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 opacity-50 scale-75 origin-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArcanaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    soulNumber: soulNumber,
                                    intensity: 0.2
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 185,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-blueprint w-full max-w-3xl",
                                children: narrative ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TypingNarrative$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: narrative,
                                    onComplete: ()=>setIsTyping(false)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "tracking-widest animate-pulse italic text-center text-gold-celestial/50",
                                    children: "천상의 도면을 인양하는 중..."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, this),
                            !isTyping && narrative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                onClick: ()=>setStep(5),
                                className: "mt-8 crystalline-crest",
                                children: "나만의 인생카드 공방으로 진입하기"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 198,
                                columnNumber: 29
                            }, this)
                        ]
                    }, "step4", true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 178,
                        columnNumber: 21
                    }, this),
                    (step === 5 || step === 6) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "z-10 flex flex-col items-center justify-center w-full max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scale-75 origin-center mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArcanaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    soulNumber: soulNumber,
                                    intensity: objects.length * 0.2 + colors.length * 0.2
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 218,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-blueprint mt-4 text-center px-12 w-full max-w-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "tracking-widest mb-6 bloom-text",
                                        children: step === 5 ? "지미니: 운명의 청사진을 구성하십시오." : "지미니: 색채의 영혼을 투과하십시오."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-8 mb-6 justify-center",
                                        children: [
                                            [
                                                1,
                                                2,
                                                3
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JewelSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "diamond",
                                                    isActive: objects.length >= i,
                                                    onClick: ()=>step === 5 && handleObjectCollect(`obj-${i}`)
                                                }, `obj-${i}`, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 37
                                                }, this)),
                                            [
                                                1,
                                                2
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JewelSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "circle",
                                                    isActive: colors.length >= i,
                                                    color: i === 1 ? "#ff4d4d" : "#4d79ff",
                                                    onClick: ()=>step === 6 && handleColorCollect(`col-${i}`)
                                                }, `col-${i}`, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-12 flex items-center justify-center",
                                        children: [
                                            step === 5 && objects.length === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setStep(6),
                                                className: "text-accent-gold tracking-[0.4em] font-bold border-b border-accent-gold/40 hover:border-accent-gold transition-colors",
                                                children: "다음 투과로"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 37
                                            }, this),
                                            step === 6 && colors.length === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: startGeneration,
                                                className: "crystalline-crest",
                                                children: "아르카나 피어남"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 222,
                                columnNumber: 25
                            }, this)
                        ]
                    }, "workshop", true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 211,
                        columnNumber: 21
                    }, this),
                    step === 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "z-10 text-center flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArcanaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                soulNumber: soulNumber,
                                intensity: 1
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "tracking-widest mt-12 bloom-text animate-pulse italic text-gold-celestial/60",
                                children: "천상의 스테인드글라스를 도식화하는 중..."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 269,
                                columnNumber: 25
                            }, this)
                        ]
                    }, "step7", true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 261,
                        columnNumber: 21
                    }, this),
                    step === 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "z-10 w-full max-w-md text-center flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "tracking-widest mb-8 text-xl bloom-text gold-engraved",
                                children: "2026년의 궤적을 비추는 중..."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 283,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-0.5 bg-white/5 relative overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full bg-accent-gold shadow-[0_0_10px_var(--accent-gold)]",
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${bridgeProgress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 284,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-[10px] tracking-[0.5em] opacity-40 uppercase",
                                children: "Ethereal Connection Maintenance"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 291,
                                columnNumber: 25
                            }, this)
                        ]
                    }, "step8", true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 276,
                        columnNumber: 21
                    }, this),
                    step === 9 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: "z-10 flex flex-col items-center justify-center w-full max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArcanaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                soulNumber: soulNumber,
                                intensity: 1,
                                glowColor: "#ffcc00"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 302,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-blueprint text-center mt-12 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "tracking-[0.8em] text-4xl font-extrabold bloom-text mb-6 gold-engraved",
                                        children: "2026 ARCANUM"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "tracking-widest opacity-80 mb-12 italic",
                                        children: [
                                            '"',
                                            rawName,
                                            '" 님의 최종 형상이 투과되었습니다.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "crystalline-crest w-full",
                                        children: "운명의 도안 저장하기"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>window.location.reload(),
                                        className: "block mt-8 text-[10px] tracking-[0.6em] opacity-30 hover:opacity-100 transition-opacity uppercase",
                                        children: "새로운 리추얼 시작"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 304,
                                columnNumber: 25
                            }, this)
                        ]
                    }, "step9", true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 296,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: 0
                },
                transition: {
                    duration: 0.8
                },
                className: "fixed inset-0 bg-white z-50 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 324,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_s(Home, "IM9TuTWNsK5fUgBdfnTV9Oot6QM=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4bbe72ed._.js.map