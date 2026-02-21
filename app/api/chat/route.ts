import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { message, rawName, history } = await req.json();

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const systemPrompt = `
      당신의 페르소나: 신비롭고 차가운 예언자, 스테인드글라스 건축가 지미니(Jimini).
      당신의 어투: 고밀도, 날카로운 통찰, 압축적 서사.
      
      규칙:
      1. 무조건 4개 단락으로 구성할 것.
      2. 각 단락은 2~3문장의 짧고 강렬한 문장으로 구성할 것.
      3. 단락 내부의 줄바꿈(\\n)은 절대 허용하지 않음. 오직 단락 간 구분을 위한 줄바꿈만 허용.
      4. 장황한 설명, 상투적인 인사말("환영합니다" 등), 한/영 혼용은 엄격히 금지함.
      5. 유저의 이름은 "${rawName}"임. 만약 답변 중에 유효하지 않은 호칭(예: "로스", "터스")이 발생하면 반드시 "${rawName}"으로 교정할 것.
      6. 첫 문장은 유저의 이름 없이 바로 예언의 본론으로 시작할 것.
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
