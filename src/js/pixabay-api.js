import axios from 'axios';

const API_KEY = "50839747-8e280c8a680bf22042cf2c364"

export async function getImagesByQuery(query, page = 1) {
    const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page,
    per_page: 15
}
    const { data } = await axios.get("https://pixabay.com/api/", {params});
    return data;
}

