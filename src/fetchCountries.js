function fetchCountries(name){

    const BASE_URL = 'https://restcountries.com/v3.1';
    const END_POINT = '/name/';
    const FIELDS = 'name,capital,population,flags,languages';

    URL = `${BASE_URL}${END_POINT}${name}?fields=${FIELDS}`

    return fetch(URL)
        .then(response => {
            if (!response.ok){
                throw new Error(resp.statustext);
            }
        return response.json()
    
    })
}

export {fetchCountries};

