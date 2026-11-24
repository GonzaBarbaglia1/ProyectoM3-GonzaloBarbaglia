import { getCharacterReply } from "../services/aiClient.js";
import { wait } from "../services/debounce.js";
import { getUserMessage } from "../ui/messages.js";

const state = {
messages: [{role: "character", text: "Hola, soy tu personaje favorito, ¿sobre que quieres hablar hoy?."}],
status: "idle", // ´loading´ || ´error´
error: null,
retryCountdown: null,
lastUserMessage: null,
}

function setState(updates) {
    Object.assign(state, updates);
    renderChat();
}

export function renderChat() {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <div class="chatApp">
     <header class="chatHeader">
        <h1 class="chatHeader__title">Chat</h1>
        <p class="chatHeader__subtitle">Con tu personaje favorito</p>
        </header>

     <main class="chatMessages" id="chatMessages" aria-live="polite">
     ${renderMessages(state.messages)}
     ${renderStatus(state.status, state.error)}
     </main>

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

    setupChat();
    scrollToBottom();
}   

function renderMessages(messages = state.messages) {
    return messages
    .map(
        (msg) => `
        <div class="message message--${msg.role}">${escapeHtml(msg.text)}</div>`,
    )
    .join('');
}

function renderStatus(status = state.status, error = state.error) {
    if (state.status === "loading" && state.retryCountdown != null){
        return `
        <div class ="message message--character message--typing">
        Esperando para reintentar (${state.retryCountdown} segundos) ...
        </div>"`;
    }
    if (status === 'loading') {
        return `<div class="message message--character message--typing">Escribiendo...</div>`;
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

function setupChat() {
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
        
     setState ({
        messages: nextMessages,
        status: "loading",
        error: null,
        lastUserMessage: isRetry ? state.lastUserMessage : text
     });

        try {
            const reply = await getCharacterReply(nextMessages);
            setState ({
                messages: [...state.messages, {role: "character", text: reply}],
                status: "idle",
                error: null,
                lastUserMessage: null,
            });
        } catch (error) {
            if (error.status === 429){
                const seconds = err.retryAfterSeconds ?? 5;
                for(let s = seconds; s > 0; s--){
                    setState ({ status: "loading", retryCountdown: s});
                    await wait (1000)    
                }
                try {
                    setState ({ status: "loading", retryCountdown: null });
                    const reply = await getCharacterReply(nextMessages);
                    setState({
                        messages:[...state.messages, {role: "character", text:reply }],
                        status: "idle",
                        error: null,
                        lastUserMessage: null,
                    });
                    return;
                } catch (errRetry) {
                    setState({ 
                        status: "error",
                        error: getUserMessage(errRetry),
                    });
                return;
                }
            }
            setState({
                status: "error",
                error: getUserMessage(err),
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
