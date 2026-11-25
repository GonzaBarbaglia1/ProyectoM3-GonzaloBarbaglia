import { characters } from "../services/characters.js";
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

            ${characters.map(character => `
                <article class="characterCard">

                    <img
                        class="characterCard__image"
                        src="${character.image}"
                        alt="${character.name}"
                    />

                    <div class="characterCard__content">

                        <span class="characterCard__category">
                            ${character.category}
                        </span>

                        <h3>${character.name}</h3>

                        <p>${character.description}</p>

                        <a class="btn btn--primary"
                        href="/chat?character=${character.id}">
                            Empezar a chatear
                        </a>

                    </div>

                </article>
            `).join("")}

                </div>

            </section>

        </section>
    `;
}
