export function renderCharacterCard(container, profile) {
    container.innerHTML = `
        article class="characterCard">
        class="characterCard__image"
        <img src="${profile.image}"
        alt="${profile.name}"
         
    <div class = "characterCard__body">
        <h2 class="characterCard__name">${profile.name}</h2>
        <p class="characterCard__status">Status: ${profile.status}</p>
        <p class="characterCard__species">Species: ${profile.species}</p>
        <p class= charaterCard___detail">
        <p strong>Origin:</strong> ${profile.origin}</p>
        <p class="characterCard__detail">
        <p strong>Location:</strong> ${profile.location}</p>
    </div>
    </article>
         `;
}