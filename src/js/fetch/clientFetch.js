import { createClient } from 'pexels';

 function pexelsFetch(key, search, perPage, create, place) {

    const client = createClient(key);
     client.photos.search({ query: search, per_page: perPage }).then(photos => {
        console.log(photos.photos);
        const images = create(photos.photos);
        place.before(...images);

    });


}

export default pexelsFetch;



