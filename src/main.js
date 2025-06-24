import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector(".form")
const input = document.querySelector('[name="search-text"]')
const list = document.querySelector(".gallery")
const loadMore = document.querySelector(".load-more");

let page;
const perPage = 15; 

form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const query = input.value.trim();
    page = 1;

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
    try {
        const data = await getImagesByQuery(query, page);
        console.log(data);
        const totalPages = Math.ceil(data.totalHits / perPage)


        if (data.hits.length > 0) {
            createGallery(data.hits);
            if (page < totalPages) {
                showLoadMoreButton();
        } else {
            iziToast.warning({
                title: 'Caution',
                message: "We're sorry, but you've reached the end of search results.",
        });
        hideLoadMoreButton();
        }
        } else if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }
    }
    
    catch(error) {
        iziToast.error({
                message: 'Oops, something went wrong',
            });
    } finally {
        hideLoader();
    }
}

loadMore.addEventListener("click", handleclick)

async function handleclick() {
    page += 1;
    loadMore.disabled = true;
    
    try {
        const data = await getImagesByQuery(input.value.trim(), page);
        loadMore.disabled = false;
        createGallery(data.hits);

        const card = document.querySelector(".photo-card");
        const cardHeight = card.getBoundingClientRect().height;

            window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        })
        const totalPages = Math.ceil(data.totalHits / perPage)
        
        if (page >= totalPages) {
                hideLoadMoreButton();
                iziToast.warning({
                title: 'Caution',
                message: "We're sorry, but you've reached the end of search results.",
        });
            }
    } catch (error) {
        iziToast.error({
                message: 'Oops, something went wrong',
            });
    }
}