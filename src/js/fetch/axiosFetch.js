import axios from 'axios';

function getAxiosFetch(url, key, create, place) {
    axios.defaults.headers.Authorization = key;
    axios.get(url).then(res => {
       const images = create(res.data.photos);
        place.before(...images);
    }
    )
}

export default getAxiosFetch;
