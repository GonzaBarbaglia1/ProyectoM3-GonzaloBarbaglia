import { getCharacterReply } from "../services/aiClient.js";
import { wait } from "../services/debounce.js";
import { getUserMessage } from "../ui/messages.js";
import { characters } from "../services/characters.js";

const chatStates = {};

function getSelectedCharacter() {
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get("character");

    return characters.find(character => character.id === characterId)
        ?? characters[0];
}

function getChatState(character) {
    if (!chatStates[character.id]) {
        chatStates[character.id] = {
            messages: [{
                role: "character",
                text: character.greeting
            }],
            status: "idle",
            error: null,
            retryCountdown: null,
            lastUserMessage: null,
        };
    }

    return chatStates[character.id];
};

function setState(character, updates) {
    const state = getChatState(character);
    Object.assign(state, updates);

    if (
        window.location.pathname === "/chat" &&
        getSelectedCharacter().id === character.id
    ) {
        renderChat();
    }
}
export function renderChat() {
    const character = getSelectedCharacter();
    const state = getChatState(character);
    const app = document.querySelector('#app');
    app.innerHTML = `
    <div class="chatApp">
     <header class="chatHeader">

    <img
        class="chatHeader__avatar"
       	src="${character.image}"
        	alt="${character.name}"
    />

    <div class="chatHeader__info">

        <h1 class="chatHeader__title">
           	${character.name}
        </h1>

        <p class="chatHeader__subtitle">
          	${character.category}
        </p>

        <span class="chatHeader__status">
            Disponible para conversar
        </span>

    </div>

</header>

     <section
    class="chatMessages"
    id="chatMessages"
    aria-label="Conversación"
    aria-live="polite"
>
    ${renderMessages(state.messages)}
    ${renderStatus(state, character)}
</section>

    <form class="chatComposer" id="chatComposer" aria-label="Formulario de chat">
        <input 
        class="chatComposer__input" 
        id="chatInput"
        type="text" 
        placeholder="Escribe un mensaje..." 
        aria-label="Escribe un mensaje" 
        ${state.status === 'loading' ? 'disabled' : ''}/>
        <button  class="chatComposer__send" type="submit" ${state.status === 'loading' ? 'disabled' : ''}>Enviar</button>
      </form>
    </div>
    `;

    setupChat(character, state);
    scrollToBottom();
}   

function renderMessages(messages) {
    return messages
    .map(
        (msg) => `
        <div class="message message--${msg.role}">${escapeHtml(msg.text)}</div>`,
    )
    .join('');
}

function renderStatus(state, character) {
    const { status, error } = state;
    if (state.status === "loading" && state.retryCountdown != null){
        return `
        <div class ="message message--character message--typing">
        Esperando para reintentar (${state.retryCountdown} segundos) ...
        </div>`;
    }
    if (status === "loading") {
    return `
        <div class="message message--character message--typing">
            ${character.name} está escribiendo...
        </div>
    `;
}
    if (status === 'error') {
        return `<div class="message message--error">Error: ${escapeHtml(error)}
        <button id="retryBtn" type="button">
                    Reintentar
                </button></div>`;
    }

    return '';
}

function escapeHtml(str = '') {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
}

function setupChat(character, state) {
    const chatForm = document.querySelector('#chatComposer');
    const chatInput = document.querySelector('#chatInput');
    const chatRetry = document.querySelector('#retryBtn');

    chatForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const text = chatInput.value.trim();
        if (!text) return;

      await sendMessage(text);
      document.querySelector("#chatInput")?.focus();
    });

    chatRetry?.addEventListener("click", () => {
        if (state.lastUserMessage) {
            sendMessage(state.lastUserMessage, true);
        }
    });

    async function sendMessage(text, isRetry = false) {
        const nextMessages = isRetry ? state.messages : [...state.messages, {role: "user", text }];
        
     setState(character, {
        messages: nextMessages,
        status: "loading",
        error: null,
        lastUserMessage: isRetry ? state.lastUserMessage : text
     });

        try {
            const reply = await getCharacterReply(nextMessages, character.systemPrompt);

         setState(character, {
                messages: [...state.messages, {role: "character", text: reply}],
                status: "idle",
                error: null,
                lastUserMessage: null,
            });
        } catch (error) {
            if (error.status === 429){
                const seconds = error.retryAfterSeconds ?? 5;
                for(let s = seconds; s > 0; s--){
                    setState(character, { status: "loading", retryCountdown: s});
                    await wait (1000)    
                }
                try {
                    setState(character, { status: "loading", retryCountdown: null });
                    const reply = await getCharacterReply(nextMessages, character.systemPrompt);
                    setState(character, {
                        messages:[...state.messages, {role: "character", text:reply }],
                        status: "idle",
                        error: null,
                        lastUserMessage: null,
                    });
                    return;
                } catch (errRetry) {
                    setState(character, { 
                        status: "error",
                        error: getUserMessage(errRetry),
                    });
                return;
                }
            }
           setState(character, {
                status: "error",
                error: getUserMessage(error),
            });
        }
    }
}
    function scrollToBottom() {
    const container = document.querySelector("#chatMessages");

    if (container) {
        container.scrollTop = container.scrollHeight;
    }
}
