import { describe, it, expect, vi, beforeEach } from "vitest";

import { getCharacterReply } from "../src/services/aiClient.js";
import { FinishReason } from "@google/generative-ai";

globalThis.fetch = vi.fn();

describe("aiClient.getCharacterReply", () => {
beforeEach(() => {
    fetch.mockClear();
});

it (`deberia llamar a /api/chat con POST y devolver el texto normalizado`, async () => {
    const fakeGeminiResponse = {
        candidates: [
            {
                content: { parts: [{ text: "Hola cara de torta asada" }] },
                finishReason: "STOP",
            }
        ],
        usageMetadata: { promptTokenCount: 10, candidatesTokenCount: 5 },
    };

    fetch.mockResolvedValueOnce ({
        ok: true,
        json: async () => fakeGeminiResponse,
    });

    const uiMessages = [{ role: "user", text: "Hola cara de torta asada"}];

    const text = await getCharacterReply(uiMessages);

    expect(text).toBe("Hola cara de torta asada");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("/api/chat", 
        expect.objectContaining({
            method: "POST",
            headers: { "Content-Type": "application/json" },
        }),
    );
  });
  it("deberia adjuntar retryAfterSeconds al error cuando la API responde 429", async () => {
    fetch.mockResolvedValueOnce({
        ok: false,
        status: 429,
        statusText: "Too ManyRequests",
        json: async () => ({
            error: "Rate Limit exceeded",
            retryAfterSeconds: 30,
        }), 
    });
const uiMessages = [{ role: "user", text: "spam"}];

await expect(getCharacterReply(uiMessages)).rejects.toMatchObject({
    status: 429,
    retryAfterSeconds: 30,
});
  });
});
