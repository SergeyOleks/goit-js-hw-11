// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.

function createMarkup(data){   
    
    return data.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads})=>{ 
       
        return `                 
                    <div class="photo-card">
                    <a href="${largeImageURL}">  
                        <img src=${webformatURL} alt=${tags} loading="lazy" />
                        <div class="info">
                              <p class="info-item">
                                 <b>Likes ${likes}</b>
                              </p>
                              <p class="info-item">
                                  <b>Views ${views}</b>
                              </p>
                              <p class="info-item">
                                  <b>Comments ${comments}</b>
                              </p>
                              <p class="info-item">
                                  <b>Downloads ${downloads}</b>
                              </p>
                        </div>
                        </a>
                    </div>                        
                
                `}
    ).join('')    
} 

export {createMarkup};