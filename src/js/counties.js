fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
    console.log(response);
    response = response.json();
    console.log(response);
    return response;

}).then((data) => {
    console.log(data);
    let countries = JSON.stringify(data);
    // console.log(countries);

})