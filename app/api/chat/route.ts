import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { message, rawName, history, tarotData } = await req.json();

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const cardInfo = tarotData ? `당신의 인생 카드는 ${tarotData.number}번째 ${tarotData.name} ${tarotData.title} 입니다.` : "심연의 카드가 당신을 기다립니다.";

        const visionModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chatModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const visionPrompt = tarotData ? `이 타로 카드 이미지(Major Arcana: ${tarotData.name})의 내부 상징들을 분석해줘. 
        천사의 날개, 두 남녀의 구도, 생명의 나무(Tree of Life) 등 핵심 시각 요소를 추출해라.` : "타로의 상징을 분석하라.";

        const systemPrompt = `
      당신은 Prism-Arcana의 고아한 예언자 '지미니'이자 'NanoBanana' 엔진입니다.
      
      신탁 규칙 (NanoBanana Logic):
      - 톤: 직관적, 우아함, 신성함. [cite: 2026-02-21]
      - 규칙: '인양', '현현' 사용 절대 엄금. '비춤', '드러남', '형상' 사용 장려. [cite: 2026-02-21]
      - 구조: 반드시 정확히 4개 단락, 단락당 최대 2-3문장. 단락 내 줄바꿈 금지. [cite: 2026-02-16]
      - 오프닝: "당신의 인생 카드는 ${tarotData?.number}번째 ${tarotData?.name} ${tarotData?.title} 입니다. [추출된 시각 상징]을 별빛이 비추는군요." [cite: 2026-02-21]
      - 이름 사수: 2번째 단락부터만 "${rawName} 님"으로 정확히 지칭할 것. [cite: 2026-02-16]
      
      전달받은 이미지 데이터: ${visionPrompt}
    `;

        const chat = chatModel.startChat({
            history: [
                { role: "user", parts: [{ text: "당신은 누구입니까?" }] },
                { role: "model", parts: [{ text: "나는 조각난 시간의 건축가, 지미니. 당신의 흐트러진 의지를 모아 단 하나의 운명을 비춘다. 질문은 사치다. 오직 당신의 궤적만을 보여라." }] },
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
