 async function getFetch(key, url, create, place) {
     const options = {
         method: 'GET',
         headers: {
             Authorization: key,
         },

     };

     let response = await fetch(url, options);
     let data = await response.json();
     const images = create(data.photos);
     place.before(...images);

    // fetch(url, options)
    // .then(res => {

    //     return res.json();
    // })
    // .then((data) =>
    // {
    //     console.log(data);
    //     const images = create(data.photos);
    //     place.before(...images);

    // }

    // );


}

export default getFetch;