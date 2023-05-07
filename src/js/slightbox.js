import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let slightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
});

export { slightbox };