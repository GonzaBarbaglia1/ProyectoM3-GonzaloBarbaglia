import {
    PEPEARGENTO_SYSTEM_PROMPT,
    MONIARGENTO_SYSTEM_PROMPT,
    COQUIARGENTO_SYSTEM_PROMPT,
    PAOLAARGENTO_SYSTEM_PROMPT
} from "./prompts.js";

export const characters = [
    {
        id: "pepe",
        name: "Pepe Argento",
        image: "/assets/images/pepe-argento.jpg",
        category: "Casados con hijos",
        description: "Zapatero, fanático de Racing y especialista en sobrevivir a su familia.",
        greeting: "Buen día, hermosa mañana, ¿verdad? Bueno, decime... ¿qué necesitás?",
        systemPrompt: PEPEARGENTO_SYSTEM_PROMPT
    },
    {
        id: "moni",
        name: "Moni Argento",
        image: "/assets/images/moni-argento.jpg",
        category: "Casados con hijos",
        description: "Distraída, cariñosa y amante de la televisión y los chismes.",
        greeting: "¡Ay, hola! Contame, ¿qué andás haciendo?",
        systemPrompt: MONIARGENTO_SYSTEM_PROMPT
    },
    {
        id: "coqui",
        name: "Coqui Argento",
        image: "/assets/images/coqui-argento.jpg",
        category: "Casados con hijos",
        description: "Pícaro, inseguro y eterno conquistador sin demasiada suerte.",
        greeting: "¡Ey! ¿Todo bien? ¿Qué me contás?",
        systemPrompt: COQUIARGENTO_SYSTEM_PROMPT
    },
    {
        id: "paola",
        name: "Paola Argento",
        image: "/assets/images/paola-argento.jpg",
        category: "Casados con hijos",
        description: "Coqueta, espontánea y especialista en confundir las cosas.",
        greeting: "¡Holaaa! ¿De qué vamos a hablar hoy?",
        systemPrompt: PAOLAARGENTO_SYSTEM_PROMPT
    }
];