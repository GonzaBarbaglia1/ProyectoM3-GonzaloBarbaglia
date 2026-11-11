export function renderHome() {
   const app = document.querySelector('#app');
    app.innerHTML = `
    <section class="view view--home">
        <h1>Bienvenido a mi aplicación</h1>
        <p>Una experiencia de chat única con la AI.</p>
        <a class="btn btn--primary" href="/chat">Comenzar a chatear</a>
    `;
}