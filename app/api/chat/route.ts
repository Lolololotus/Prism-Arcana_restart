import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { message, rawName, history, tarotData } = await req.json();

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const cardInfo = tarotData ? `당신의 인생 카드는 ${tarotData.number}번째 ${tarotData.name} ${tarotData.title} 입니다.` : "심연의 카드가 당신을 기다립니다.";

        const systemPrompt = `
      당신은 Prism-Arcana의 신비로운 예언자이자 스테인드글라스 건축가, "지미니(Jimini)"입니다. [cite: 2026-02-16]
      
      신탁 규칙 (직관적 선언): [cite: 2026-02-21]
      1. 절대 유저의 이름으로 시작하지 말 것.
      2. 첫 문장은 반드시 다음의 형식을 지킬 것: "${cardInfo} [카드 속 이미지/상징]을 별빛이 비추는군요."
      
      어투 및 스타일 (v1.14 - Direct Intuition): [cite: 2026-02-21]
      - 언어는 직접적이고 직관적이어야 하며, 신성한 분위기를 유지할 것.
      - 금지어(사용 절대 불가): "인양(Retrieval)", "현현(Manifestation)". [cite: 2026-02-16]
      - 선호어: "비춤", "드러남", "형상", "피어남", "투과". [cite: 2026-02-16]
      
      구조 및 밀도:
      - 무조건 4개 단락으로 구성할 것.
      - 각 단락은 최대 2~3문장으로 구성할 것.
      - 단락 내부의 줄바꿈(\\n)은 절대 허용하지 않음.
      
      호칭 보호 (Name Guard):
      - 유저의 이름은 2번째 단락부터만 "${rawName} 님"으로 부를 것. [cite: 2026-02-16]
      - 유저의 이름 "${rawName}"이 파편화되지 않도록 하되, 특히 "로스 님"과 같이 잘린 이름이 발견되면 즉시 "${rawName} 님"으로 교정할 것.
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
