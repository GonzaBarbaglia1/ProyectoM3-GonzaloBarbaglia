export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {
        const { contents, systemInstruction, generationConfig } = req.body ?? {};

        if (!Array.isArray(contents) || contents.length === 0) {
            return res.status(400).json({
                error: "contents required and must be non-empty"
            });
        }

        const replyText = "Hola, te estoy respondiendo desde el backend.";
        const inputTokens = 10;
        const outputTokens = Math.ceil(replyText.length / 4);

        return res.status(200).json({
            candidates: [{
                content: {
                    parts: [{ text: replyText }],
                    role: "model",
                },
                finishReason: "STOP",
            }],
            usageMetadata: {
                promptTokenCount: inputTokens,
                candidatesTokenCount: outputTokens,
                totalTokenCount: inputTokens + outputTokens
            },
        });

    } catch (error) {
        console.error("Error en /api/chat:", error);

        return res.status(500).json({
            error: "Internal server error"
        });
    }
}