const key = 'IZfSKakXTNzHgGicAKoPLUnAi1QoIKXe';

// get city info

const getCity = async city => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryPar = `?apikey=${key}&q=${city}`;

    const response = await fetch( base + queryPar);
    const data = await response.json();
    // console.log(data[0]);
    return data[0];
};


// Get Weather 
const getWeather = async locationId => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const queryPar = `${locationId}?apikey=${key}`;

    const response = await fetch( base + queryPar);
    const dataWeath = await response.json();

    return dataWeath[0]
    // console.log(data);

};


getCity('Madrid')
    .then (dataWeath => {
        return getWeather(dataWeath.Key);
    }).then(dataWeath => {
        console.log(dataWeath);
    })
    .catch ( error => console.log(error));


