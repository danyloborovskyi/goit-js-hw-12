import axios from 'axios';

const API_KEY = "50839747-8e280c8a680bf22042cf2c364"

export function getImagesByQuery(query) {
    const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
}
     return axios.get("https://pixabay.com/api/", {params}).then(res => res.data)
}


