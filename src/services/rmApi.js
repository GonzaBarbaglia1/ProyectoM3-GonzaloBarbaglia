import { fetchJson } from "./fetchJson";    

function buildCharacterSearchUrl({name, page = 1}) {
    const baseUrl = `https://rickandmortyapi.com/api/character`;
    const params = new URLSearchParams  ({
        name: name.trim(),
        page: String(page),  
    });
    return `${baseUrl}?${params.toString()}`;
}
 export async function getFistCharacterByName(name) {
    const url = buildCharacterSearchUrl({ name })
    const data = await fetchJson(url)
    const first = data.results?.[0]

    if (!first) {
        const err = new Error(`No se encontró ningún personaje con el nombre "${name}"`);
        err.code = "NO_RESULTS";
        throw err;
};

    return first;
}