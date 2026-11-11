export function renderAbout() {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <section class="view view--about">
        <h1>Acerca de esta aplicación</h1>
        <p>Esta aplicación es un proyecto de chat con inteligencia artificial.</p>
        <p>Creada por el dev. Gonzalo Barbaglia, perteneciente a la "CH80" del equipo de Henry.</p>
        <p>El objetivo de esta aplicación es brindar una experiencia de chat interactiva y divertida.</p>
        <p>¡Disfruta chateando con la AI!</p>   
        <p>Stack: HTML, CSS, JavaScript, Gemini AI, Vercel, Vite, Node.js</p>
        <a class="btn btn--primary" href="/home">Volver al inicio</a>
    </section>
    `;
}