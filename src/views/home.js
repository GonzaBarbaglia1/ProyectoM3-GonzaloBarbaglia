
export function renderHome() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <section class="view view--home">

            <div class="homeHero">
                <span class="homeHero__tag">
                    Inteligencia artificial
                </span>

                <h1>Conversá con tus personajes favoritos</h1>

                <p>
                    Descubrí una nueva forma de interactuar con
                    personajes ficticios a través de la inteligencia
                    artificial. Cada personaje tiene su propia
                    personalidad, humor y forma de hablar.
                </p>
            </div>

            <section class="characterGallery">

                <h2>Elegí tu personaje</h2>

                <div class="characterGallery__grid">

                    <article class="characterCard">

                        <img
                            class="characterCard__image"
                            src="/assets/images/pepe-argento.jpg"
                            alt="Pepe Argento"
                        />

                        <div class="characterCard__content">

                            <span class="characterCard__category">
                                Casados con hijos
                            </span>

                            <h3>Pepe Argento</h3>

                            <p>
                                Zapatero, padre de familia, fanático
                                de Racing y especialista en sobrevivir
                                a las ocurrencias de Moni.
                                Sarcasmo y humor argentino garantizados.
                            </p>

                            <a class="btn btn--primary" href="/chat">
                                Empezar a chatear
                            </a>

                        </div>

                    </article>

                </div>

            </section>

        </section>
    `;
}
