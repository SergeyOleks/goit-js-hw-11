
function createMarkup(arr){
    
    return arr.map(({flags:{png}, name:{common}, capital, population, languages})=>{
 
        return `<div class="flagCountry">
                    <img src="${png}" alt="flag" width=25 height=15>
                    <h2 class="country">${common}</h2>
                </div>
                <ul class="js-list">
                    <li>Capital: ${capital[0]}</li>
                    <li>Population: ${population}</li>
                    <li>Languages: ${Object.values(languages)[0]}</li>
                </ul>
                `
    }
    ).join('')    
} 

export {createMarkup};