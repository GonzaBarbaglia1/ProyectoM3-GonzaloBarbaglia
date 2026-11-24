import { PEPEARGENTO_SYSTEM_PROMPT } from "./prompts.js";

const CANNED_REPLIES =[
    "Uyyyy que boludo",
    "En esta casa nunca hay nada para comer Monicaa",
    "Si sos Dardo pasa, si sos la cara de torta asada, volve a tu madriguera"
]

function pickReply(){
    return CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)]
}

function buildOkResponse(replyText, inputTokens){
    const outputTokens = Math.ceil(replyText.length / 4);

    return {
        candidates: [{
            content: {
                parts:[{ text: replyText }],
                role: "model",
            },
            finishReason: "STOP",
        }],
        usageMetadata: {
            promptTokencount: inputTokens,
            candidatesTokencount: outputTokens,
            totalTokenCount: inputTokens + outputTokens
        },
    };
}

function estimateInputTokens(payload){
    const systemText = payload.systemInstruction?.parts?.[0]?.text ?? "";
    const messagesText = (payload.contents ?? [])
    .flatMap ((c) => c.parts ?? [])
    .map((p) => p.text ?? "").join(" ");

    return Math.ceil ((systemText.length + messagesText.length) / 4 );
}

export function send(payload) {
return new Promise((resolve) => {
    const delay = 600 + Math.random() * 1000;

  setTimeout(() => {
    const inputTokens = estimateInputTokens(payload);
    const reply = pickReply();
    resolve(buildOkResponse(reply, inputTokens));    
}, delay);
});
}