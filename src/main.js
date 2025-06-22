import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, refreshLightbox, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form")
const input = document.querySelector('[name="search-text"]')
const list = document.querySelector(".gallery")

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const query = input.value.trim();

    console.log(`[query]: "${query}"`);

    if (query === "") {
        iziToast.warning({
        title: "Warning",
        message: 'Please enter your query',
        position: 'topCenter',
        });
        return;
    }

    clearGallery(list);

    showLoader()

    getImagesByQuery(query).then(data => {
        if (data.hits.length > 0) {
            console.log(data);
            list.innerHTML = createGallery(data.hits)
            refreshLightbox();
        } else {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }
    })
    .catch(() => {
        iziToast.error({
                message: 'Oops, something went south',
            });
    })
    .finally(() => {
        hideLoader();
        // input.value = "";
    })
}

refreshLightbox();
