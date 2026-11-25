export function renderAbout() {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <section class="view view--about">
        <h1>Acerca de esta aplicación</h1>

         <p>
          Character Chat AI es una aplicación web que permite
          interactuar con personajes ficticios mediante
          inteligencia artificial.
        </p>

        <p>Creada por el dev. Gonzalo Barbaglia, perteneciente a la "CH80" del equipo de Henry.</p>

        <p>El objetivo de esta aplicación es brindar una experiencia de chat interactiva y divertida.</p>

        <h2>Sobre los personajes</h2>

        <p>
        La aplicación está pensada para conversar con Pepe,
        Moni, Coqui y Paola Argento, personajes de la serie
        argentina Casados con hijos, recreando sus personalidades,
        humor y forma de expresarse mediante inteligencia artificial.
        </p>

        <p>
            Las conversaciones son interpretaciones ficticias
            generadas por IA. Esta aplicación es un proyecto
            educativo no oficial.
        </p>    

        <p>¡Disfruta chateando con la AI!</p>   

        <h2>Tecnologías utilizadas</h2>

        <ul class="aboutTech">
            <li>HTML</li>
            <li>CSS</li>
        </ul>

        <a class="btn btn--primary" href="/">Volver al inicio</a>

    </section>
    `;
}