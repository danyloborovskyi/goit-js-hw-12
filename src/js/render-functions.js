import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader")

let lightbox = null;

export function createGallery(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
        <li>
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
}

export function clearGallery(galleryElement) {
  galleryElement.innerHTML = '';
}

export function refreshLightbox() {
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