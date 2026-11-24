import { biuldPayload, getTrimmedHistory, normalizeAIResponse } from "../transform/chatPayload.js";
import { PEPEARGENTO_SYSTEM_PROMPT } from "./prompts.js";
import {send as sendToMock} from "./mockGeminiApi.js";

export async function getCharacterReply(uiMessages){
    const trimmed = getTrimmedHistory(uiMessages);

    const payload = biuldPayload({
        systemPrompt: PEPEARGENTO_SYSTEM_PROMPT,
        uiMessages: trimmed,
    });
    const rawRensponse = await sendToMock(payload);

    const text = normalizeAIResponse(rawRensponse);

    const usage = rawRensponse?.usageMetadata;

  if (usage){
    console.log("[Tokens] input: ${usage.promptTokenCount}, output: ${usage.cadidatesTokenCount}")
}
return text;
}

