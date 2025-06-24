import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader")
const loadMore = document.querySelector(".load-more");
const list = document.querySelector(".gallery")

let lightbox = null;

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
        <li class="photo-card">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" width="300" alt="${tags}">
                <ul>
                    <li>
                        <h2>Likes</h2>
                        <p>${likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${views}</p>
                    </li>
                    <li>
                        <h2>Comments</h2>
                        <p>${comments}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
    `).join("")

    list.insertAdjacentHTML("beforeend", markup);
    refreshLightbox();
}

export function clearGallery(galleryElement) {
  galleryElement.innerHTML = '';
}

function refreshLightbox() {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden")
}

export function showLoadMoreButton() {
    loadMore.classList.remove("load-more-hidden")
}

export function hideLoadMoreButton() {
    loadMore.classList.add("load-more-hidden")
}