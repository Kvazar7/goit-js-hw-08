import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galeryWrap = document.querySelector('.gallery');
const creatingAnImageGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li>
            <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
            </a>
            </li>`})
        .join('');

galeryWrap.insertAdjacentHTML('afterbegin', creatingAnImageGallery);

new SimpleLightbox('.gallery a',{
    captionsData: "alt",
    captionDelay: 250,    
});

console.log(galleryItems);
