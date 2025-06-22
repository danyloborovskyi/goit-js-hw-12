import axios from "axios"

const list = document.querySelector(".gallery")
const form = document.querySelector(".form")
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

form.addEventListener("submit", onSearch)

async function fetchPokemon(pokemonName) {
    const result = await axios(`${BASE_URL}${pokemonName}`);
    return result.data;
}

async function onSearch(event) {
    event.preventDefault();

    const searchQuery = event.currentTarget.elements.query.value;
    console.log(searchQuery);

    try {
        const data = await fetchPokemon(searchQuery);
        list.innerHTML = renderPokemonCard(data)

    } catch (error) {
        alert(error.message)
    }
}

function renderPokemonCard({name, weight, height, abilities, sprites}) {
    const abilitiesList = abilities.map(({ ability }) => `<p>${ability.name}</p>`).join("")

    return `<li class="item">
                <div class="wrapper-1">
                    <img src="${sprites.front_default}">
                </div>
                <div class="wrapper-2">
                    <h2 class="title">Name: ${name}</h2>
                    <p>Weight: ${weight}</p>
                    <p>Height: ${height}</p>
                </div>
                <div>
                    ${abilitiesList}
                </div>
            </li>`
}