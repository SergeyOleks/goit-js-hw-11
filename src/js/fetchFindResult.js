    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '35504205-dd2dec5e4a5642491c73dfb42';
    import { Notify } from 'notiflix/build/notiflix-notify-aio';
    const PER_PAGE = 40;
    const ORIENTATION = 'horizontal';
    const SAFE_SEARCH = true;
    import axios from 'axios';;

async function fetchFindResult(findName, currentPage){
  
    const URL = `${BASE_URL}?key=${API_KEY}&q=${findName}&page=${currentPage}&per_page=${PER_PAGE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}`;

    try {
        return await axios.get(URL);            

    }catch (err){
        Notify.failure(err);
    }    
}

export {fetchFindResult}