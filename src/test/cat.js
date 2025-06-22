import axios from 'axios';

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "live_kwCEhQvZHHKxJuhlomUZxtC6dmPKxTsj6NVDH0tzN6gYxKsR5Sz5HAI5wiZuBrks";

const form = document.querySelector("#search-form");
const breedInput = document.querySelector("#breed-input");
const breedsList = document.querySelector("#breeds-list");
const loader = document.querySelector("#loader")
const list = document.querySelector(".list")

fetchBreeds()

form.addEventListener("submit", handleSubmit)

function fetchBreeds() {
    axios("https://api.thecatapi.com/v1/breeds")
    .then(res => {
        console.log(res);
        breedsList.insertAdjacentHTML("beforeend", populateDataList(res.data))
    })
    .catch(error => {
        console.log(error);
    })
}

function populateDataList(arr) {
    return arr.map(({ id, name,}) => `<option value="${name}" data-id="${id}"></option>`).join("");
}

function handleSubmit(event) {
    event.preventDefault();
    
    const myBreed = breedInput.value;
    const selectedBreed = [...breedsList.children]
        .find((item) => item.value.toLowerCase() === myBreed.toLowerCase().trim());

    console.log(selectedBreed);

    if (!selectedBreed) {
        alert("Оберіть з існуючих порід");
        return;
    }

    const breedId = selectedBreed.dataset.id;

    loader.classList.remove("hidden")

    axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(res => {
            if(res.data.length > 0) {
                const imgUrl = res.data[0].url;
                list.innerHTML = `
                <li class="card">
                    <img class="card-image" src="${imgUrl}" alt="${myBreed}" width="300"/>
                    <h2>${myBreed}</h2>
                </li>`
            } else {
                list.innerHTML = '<p class="error-text">Зображення відсутнє</p>'
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            loader.classList.add("hidden")
            breedInput.value = "";
        })
} 


