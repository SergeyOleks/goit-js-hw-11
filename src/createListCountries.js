function createListCountries(arr){
    return arr.map(({flags:{png}, name:{common}})=>{ 
        return `<li class = "country-list__item">  
                    <img src="${png}" alt="flag" width=25 height=15>
                    <h2 class="country-list__name">${common}</h2>
                </li>
                `
    }
    ).join('')  
}

export {createListCountries}