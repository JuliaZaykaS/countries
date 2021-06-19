 function getFetch(key, url, create, place) {
    const options = {
        method: 'GET',
        headers: {
            Authorization:  key,
        },

    }

    fetch(url, options)
    .then(res => {

        return res.json();
    })
    .then((data) =>
    {
        console.log(data);
        const images = create(data.photos);
        place.before(...images);

    }

    );


}

export default getFetch;