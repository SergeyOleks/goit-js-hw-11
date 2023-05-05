import './css/styles.css';
import { fetchFindResult } from './fetchFindResult';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const paginationBtn = document.querySelector('.load-more');
let currentPage = 1;
let name;

// form.style = 'background-color:blue;padding:0 auto;'

form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    gallery.innerHTML='';
    name = evt.currentTarget.elements[0].value;
    if (!name){  
        return;
    }
    currentPage=1;
    fetchFindResult(name, currentPage, gallery, paginationBtn);
    paginationBtn.hidden = false;
}); 

paginationBtn.addEventListener('click', onPagination);
 
function onPagination(){
    currentPage+=1;
    fetchFindResult(name, currentPage, gallery, paginationBtn);
}
