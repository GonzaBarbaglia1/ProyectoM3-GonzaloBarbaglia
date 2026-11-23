import { getFirstCharacterByName } from "../services/rmApi.js";
import { toCharacterProfile } from "../transform/character.js";
import { renderCharacterCard } from "../ui/characterCard.js";

const state = {
    status: "idle",
    profile: null,
    errorMessage: null,
    currentName: "Rick",
};

function setState(updates){
  Object.assign(state, updates);
  renderHome;
}


export function renderHome() {
   const app = document.querySelector('#app');
    app.innerHTML = `
    <section class="view view--home">
        <h1>Chatea con tu personaje favorito</h1>
        <p>Una experiencia de chat única con la AI.</p>

        <form class = "characterForm" id ="characterForm">
          <input
            class="characterForm__input"
            id="characterInput"
            type="text"
            value="${state.currentName}"
            placeholder="Nombre del personaje."
            aria-label="Nombre del personaje."
            ${state.status == "loading" ? "disabled" : ""}
          />
          <button class="characterForm__button" type="submit" ${state.status == "loading" ? "disabled" : ""}>
          Cambiar personaje
          </button>
        </form>
    <div id="characterContainer">${renderContainer()}</div>
      <p style="text-aling:center; margin-top: 2rem;">
       <a class="btn btn--primary" href"/chat"> Empezar a chatear </a> 
       </p>
    </section>
    `;

    setupHome();
}

export function renderContainer() {
    if (state.status === "loading") {
        return '<p class="homeStatus homeStatus--loading">Cargando personaje...</p>';
    }

    if (state.status === "error") {
        return `<p class="homeStatus homeStatus--error">${state.errorMessage}</p>`;
    }

    return "";
}

function setupHome(){
    const $form = document.querySelector("#characterForm")
    const $input = document.querySelector("#characterInput");

    $form.addeventListenner("submit",(event) => {
        event.preventDefault();
        const name = $input.value.trim();

        if(!name) {
            setState({
             status: "error",
             errorMessage: "Escribe un nombre para realizar tu busqueda correctamente"
            });
        return;
        }
    setState({ currentName: name });
    loadCharacter(name);
    });
}

async function loadCharacter(name) {
setState ({ status: "loading", errorMessage: null});

try { 
const raw = getFirstCharacterByName(name);

const profile = toCharacterProfile(raw);

setState ({ status: "success", profile});
const $container = document.querySelector ("#characterContainer");
renderCharacterCard($container, profile);
} catch (err) {
    setState ({
        status: "error",
        errorMessage: getUserMessage(err),        
    });
}
}