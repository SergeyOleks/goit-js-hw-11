import './css/styles.css';
import { fetchFindResult } from './js/fetchFindResult';
import { createMarkup } from './js/createMarkup';    
import { slightbox } from './js/slightbox';
import { checkSearchResult } from './js/checkSearchResult';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const paginationBtn = document.querySelector('.load-more');
let currentPage = 1;
let name;

form.addEventListener('submit',async (evt)=>{
    evt.preventDefault();
    gallery.innerHTML='';
    name = evt.currentTarget.elements[0].value;
    if (!name){  
        return;
    }
    currentPage=1;
    const resp = await fetchFindResult(name, currentPage);

    checkSearchResult(resp,currentPage=1, paginationBtn);

    const {data} = resp; 
    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    slightbox.refresh();

    paginationBtn.hidden = false;
}); 

paginationBtn.addEventListener('click', onPagination);
 
async function onPagination(){
    currentPage+=1;
    const resp = await fetchFindResult(name, currentPage);
    checkSearchResult(resp,currentPage. paginationBtn);
    const {data} = resp;
    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    slightbox.refresh();
}
