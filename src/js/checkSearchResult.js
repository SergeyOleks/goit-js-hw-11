import { Notify } from 'notiflix/build/notiflix-notify-aio';
const PER_PAGE = 40;

function checkSearchResult(resp, currentPage, paginationBtn){

    if (!resp){
        throw new Error(Notify.failure(resp.status))
    }
    
    const {data} = resp;       

    if (data.hits.length===0){
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        paginationBtn.hidden = true;
        return;
    }else{
        currentPage===1?Notify.success(`Hooray! We found ${data.totalHits} images.`):"" ;
    }
    
    if (currentPage*PER_PAGE === data.totalHits || data.totalHits < PER_PAGE){
        paginationBtn.hidden = true;
        Notify.success("We're sorry, but you've reached the end of search results.");
    }
}

export {checkSearchResult} 