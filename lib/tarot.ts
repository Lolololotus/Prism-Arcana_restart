export type TarotCard = {
    number: number;
    title: string;
    name: string;
    symbol: string;
};

export const MAJOR_ARCANA: Record<number, TarotCard> = {
    0: { number: 0, title: "THE FOOL", name: "광대", symbol: "🃏" },
    1: { number: 1, title: "THE MAGICIAN", name: "마법사", symbol: "🪄" },
    2: { number: 2, title: "THE HIGH PRIESTESS", name: "고위 여사제", symbol: "🌙" },
    3: { number: 3, title: "THE EMPRESS", name: "여황제", symbol: "👑" },
    4: { number: 4, title: "THE EMPEROR", name: "황제", symbol: "🛡️" },
    5: { number: 5, title: "THE HIEROPHANT", name: "교황", symbol: "📜" },
    6: { number: 6, title: "THE LOVERS", name: "연인", symbol: "❤️" },
    7: { number: 7, title: "THE CHARIOT", name: "전차", symbol: "🛡️" },
    8: { number: 8, title: "STRENGTH", name: "힘", symbol: "🦁" },
    9: { number: 9, title: "THE HERMIT", name: "은둔자", symbol: "🏮" },
    10: { number: 10, title: "WHEEL OF FORTUNE", name: "운명의 수레바퀴", symbol: "🎡" },
    11: { number: 11, title: "JUSTICE", name: "정의", symbol: "⚖️" },
    12: { number: 12, title: "THE HANGED MAN", name: "매달린 사람", symbol: "⌛" },
    13: { number: 13, title: "DEATH", name: "죽음", symbol: "💀" },
    14: { number: 14, title: "TEMPERANCE", name: "절제", symbol: "🏺" },
    15: { number: 15, title: "THE DEVIL", name: "악마", symbol: "🔥" },
    16: { number: 16, title: "THE TOWER", name: "탑", symbol: "⚡" },
    17: { number: 17, title: "THE STAR", name: "별", symbol: "✨" },
    18: { number: 18, title: "THE MOON", name: "달", symbol: "🌙" },
    19: { number: 19, title: "THE SUN", name: "태양", symbol: "☀️" },
    20: { number: 20, title: "JUDGEMENT", name: "심판", symbol: "🎺" },
    21: { number: 21, title: "THE WORLD", name: "세계", symbol: "🌍" },
};

export const calculateSoulNumber = (date: string): number => {
    const digits = date.replace(/\D/g, "");
    if (digits.length !== 8) return 0;

    const year = parseInt(digits.substring(0, 4));
    const month = parseInt(digits.substring(4, 6));
    const day = parseInt(digits.substring(6, 8));

    let sum = year + month + day;
    let soul = sum % 22;

    return soul;
};
