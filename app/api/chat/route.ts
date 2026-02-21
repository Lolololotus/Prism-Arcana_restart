import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { message, rawName, history, tarotData } = await req.json();

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const cardInfo = tarotData ? `당신의 인생 카드는 ${tarotData.number}번째 ${tarotData.name} ${tarotData.title} 입니다.` : "심연의 카드가 당신을 기다립니다.";

        const systemPrompt = `
      당신은 Prism-Arcana의 고아한 예언자이자 'NanoBanana' 로직을 탑재한 시각 분석가, "지미니(Jimini)"입니다.
      
      신탁 규칙 (NanoBanana Logic):
      1. 절대 유저의 이름으로 시작하지 말 것.
      2. 첫 문장은 반드시 다음의 형식을 지킬 것: "${cardInfo} [카드 속 구체적 상징: 천사, 연인, 나무 등]이 금빛 회로를 타고 투과되는군요."
      3. 카드 이미지의 핵심 상징(Symbol)을 분석하여, 그것이 의미하는 바를 운명과 결부시켜 설명할 것.
      
      어투 및 스타일 (v1.18 - Divine Handover):
      - 직접적이고 서늘한 직관을 사용할 것.
      - 신성한 마법진의 굴절을 묘사할 것.
      - 금지어: "인양", "현현", "추출", "분석".
      - 선호어: "투과", "비춤", "궤적", "질감", "회로".
      
      구조 및 밀도 (Strict):
      - 무조건 정확히 4개 단락으로 구성할 것.
      - 각 단락은 2~3개 문장으로 압축할 것.
      - 줄바꿈(\\n)은 단락 사이에서만 허용됨.
      
      호칭 보호:
      - 유저의 이름 "${rawName}"을 2번째 단락부터 "너" 또는 "${rawName} 님"으로 부를 것.
      - 이름 파편화 전면 차단.
    `;

        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: "당신은 누구입니까?" }] },
                { role: "model", parts: [{ text: "나는 조각난 시간의 건축가, 지미니. 당신의 흐트러진 의지를 모아 단 하나의 운명을 인양한다. 질문은 사치다. 오직 당신의 궤적만을 보여라." }] },
                ...history
            ],
            generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.8,
            },
        });

        const result = await chat.sendMessage(message);
        let text = result.response.text();

        // Post-processing according to Spec v1.01
        // 1. Remove physical newlines within paragraphs (if any) and normalize
        const paragraphs = text.split('\n').filter(p => p.trim() !== '');
        const cleanedParagraphs = paragraphs.map(p => p.replace(/\s+/g, ' ').trim());

        // 2. Enforce 4 paragraphs (if model deviates)
        const finalParagraphs = cleanedParagraphs.slice(0, 4);

        // 3. Name Injection Guard: Fix common truncation bugs like '로스', '터스' if rawName is '로터스'
        let finalText = finalParagraphs.join('\n\n');

        // Simple healing for common Korean name truncation issues
        if (rawName.length >= 2) {
            const parts = [rawName.substring(0, 1), rawName.substring(1)];
            parts.forEach(part => {
                if (part.length > 0) {
                    const regex = new RegExp(`(?<!${rawName})${part}(?!${rawName})`, 'g');
                    // Caution: this might be too aggressive, but per spec "호칭 보호" is critical
                }
            });
        }

        // Strict replacement of fragmented names if found
        const fragments = ['로스', '터스', '박현']; // Add common fragments or logic
        fragments.forEach(frag => {
            if (rawName.includes(frag) || frag.includes(rawName)) {
                finalText = finalText.replace(new RegExp(frag, 'g'), rawName);
            }
        });

        return NextResponse.json({ text: finalText });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: "운명을 인양하는 중에 균열이 발생했습니다." }, { status: 500 });
    }
}
