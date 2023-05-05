    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '35504205-dd2dec5e4a5642491c73dfb42';
    const PER_PAGE = 40;
    const ORIENTATION = 'horizontal';
    const SAFE_SEARCH = true;

    import { createMarkup } from './createMarkup';
    import { Notify } from 'notiflix/build/notiflix-notify-aio';
    import { slightbox } from './slightbox';
    import axios from 'axios';;

async function fetchFindResult(findName, currentPage, gallery, paginationBtn){
  
    const URL = `${BASE_URL}?key=${API_KEY}&q=${findName}&page=${currentPage}&per_page=${PER_PAGE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}`;

    try {
        const resp = await axios.get(URL);

        const {data} = resp;   

        if (!resp){
            throw new Error(Notify.failure(resp.status))
        }
                     
        currentPage===1?Notify.success(`Hooray! We found ${data.totalHits} images.`):"" ;

        if (data.hits.length===0){
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            paginationBtn.hidden = true;
            return;
        }
        
        if (currentPage*PER_PAGE === data.totalHits || data.totalHits < PER_PAGE){
            paginationBtn.hidden = true;
            Notify.success("We're sorry, but you've reached the end of search results.");
        }
        
        gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
        slightbox.refresh();

    }catch (err){
        Notify.failure(err)
    }         
}

export {fetchFindResult}