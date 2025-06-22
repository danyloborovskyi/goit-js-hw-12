import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "59a698565b9967c36e8cded95efb0471";
const END_POINT = "/trending/movie/week";

const container = document.querySelector(".container-movie")
const loadMore = document.querySelector(".test-btn")

let page = 1;

async function serviceMovie(page = 1) {
    const { data } = await axios(`${BASE_URL}${END_POINT}`, {
        params: {
            api_key: API_KEY,
            page: page
        }
    })

    return data;
}

loadMore.addEventListener("click", handleClick);

serviceMovie(page)
    .then(data => {
        container.insertAdjacentHTML("beforeend", createMarkup(data.results))

        if (data.page < data.total_pages) {
            loadMore.classList.replace("load-more-hidden", "load-more");
        }
    })
    .catch(error => {
        alert(error.message)
    })

    function createMarkup(arr) {
        return arr.map(({ poster_path, release_date, vote_average, title }) => `
            <li class="movie-card">
                <img src="https://image.tmdb.org/t/p/w300${poster_path} alt="${title}">
                <h2>${title}</h2>
                <p>Release date: ${release_date}</p>
                <p>Vote Average: ${vote_average}</p>
            </li>`)
    }

async function handleClick() {
    page += 1;
    loadMore.disabled = true;

    try {
        const data = await serviceMovie(page)
        console.log(data);
        container.insertAdjacentHTML("beforeend", createMarkup(data.results))
        loadMore.disabled = false;

        if (data.page >= data.total_pages) {
            loadMore.classList.replace("load-more", "load-more-hidden")
        }

        const card = document.querySelector(".movie-card");
        const cardHeight = card.getBoundingClientRect().height;
        console.log(cardHeight);
        

        window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        })

    } catch (error) {
        alert(error.message)
    }
}