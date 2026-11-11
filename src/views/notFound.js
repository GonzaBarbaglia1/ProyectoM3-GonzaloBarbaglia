export function renderNotFound() {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <section class="view view--not-found">
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <a class="btn btn--primary" href="/home">Volver al inicio</a>
    </section>
    `;
}