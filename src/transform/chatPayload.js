const MODEL_NAME = "gemini-flash-lite-latest";
const MAX_OUTPUT_TOKENS = 200;
const TEMPERATURE = 0.9;
const MAX_TURNS_HISTORY = 12;

export function toApiMessages(uiMessages){
    return uiMessages.map((msg)=> ({
        role: msg.role == "character" ? "model" : "user",
        parts: [{ text: msg.text }]
    }));
}

export function biuldPayload({ systemPrompt, uiMessages}) {
    return {
        model: MODEL_NAME,
        systemInstruction: {
            parts: [{ text: systemPrompt }],
        },
        contents: toApiMessages(uiMessages),
        generationConfig: {
            MAX_OUTPUT_TOKENS: MAX_OUTPUT_TOKENS,
            TEMPERATURE: TEMPERATURE,
        },
    };
}

export function normalizeAIResponse(raw) {
    const parts = raw?.candidates?.[0]?.content?.parts;
if (!Array.isArray(parts)) return "";

return parts
.filter((parts) => parts && typeof parts.text === "string")
.map((parts) => parts.text)
.join ("")
.trim();
}