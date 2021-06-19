import axios from 'axios';

async function getAxiosFetch(url, key, create, place) {
    axios.defaults.headers.Authorization = key;
    let response = await axios.get(url);
    let data = response.data.photos;
    const images = create(data);
    place.before(...images);

    // axios.get(url).then(res => {
    //    const images = create(res.data.photos);
    //     place.before(...images);
    // }
    // )
}

export default getAxiosFetch;
