import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { createMarkup } from './createMarkup';
import { createListCountries } from './createListCountries';
import debounce from 'lodash.debounce';

// const debounce = index.debounce();
const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
const input = document.querySelector('#search-box');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt){     
    const name = evt.target.value.trim();

    if (!name || name===""){  
        return;
    }

    countryList.innerHTML = '';
    countryInfo.innerHTML = '';    

    const fCountry = fetchCountries(name).then(data=>{
            if (data.length>10){
                Notify.success('Too many matches found. Please enter a more specific name.');
                return
            } else if (data.length > 1){
                countryList.insertAdjacentHTML('beforeend', createListCountries(data));
            }    
            else if (data.length===1){
                countryInfo.insertAdjacentHTML('beforeend', createMarkup(data));                
                return
            }                

        }).catch(_=>Notify.failure('Oops, there is no country with that name')); 
}





      


