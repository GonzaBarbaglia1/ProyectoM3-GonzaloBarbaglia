export function renderChat() {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <div class="chatApp">
     <header class="chatHeader">
        <h1 class="chatHeader__tytle--primary">Chat</h1>
        <p class="chatHeader__subtytle">Con Dominic Toretto</p>
        </header>

     <main class="chatMessages" aria-label="Mensajes">
        <div class="message message--character">Hola, aunque la familia es lo primero, hoy te voy a ayudar, te leo.</div>
        <div class="message message--user">Hola Dominic, vengo a charlar con vos sobre los motores 2.0t.</div>
        <div class="message message--character">Perfecto, los motores son mi especialidad, te voy a ayudar.</div>
      </main>

      <form class="chatComposer">
        <input 
        class="chatComposer__input" 
        type="text" 
        placeholder="Escribe un mensaje..." 
        aria-label="Escribe un mensaje" />
        <button  class="chatComposer__send" type="submit">Enviar</button>
      </form>
    </div>
    `;
}   