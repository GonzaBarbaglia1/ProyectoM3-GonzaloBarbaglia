import { buildPayload, getTrimmedHistory, normalizeAIResponse } from "../transform/chatPayload.js";
import { PEPEARGENTO_SYSTEM_PROMPT } from "./prompts.js";
import {send as sendToMock} from "./mockGeminiApi.js";

export async function getCharacterReply(uiMessages){
    const trimmed = getTrimmedHistory(uiMessages);

    const payload = buildPayload({
        systemPrompt: PEPEARGENTO_SYSTEM_PROMPT,
        uiMessages: trimmed,
    });
    const rawResponse = await sendToMock(payload);

    const text = normalizeAIResponse(rawResponse);

    const usage = rawResponse?.usageMetadata;

  if (usage){
   console.log(`[Tokens] input: ${usage.promptTokenCount}, output: ${usage.candidatesTokenCount}`);
}
return text;
}

