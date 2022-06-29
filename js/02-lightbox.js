import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const blockMarkUp = createImagesGallery(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", blockMarkUp);

function createImagesGallery (items) {
    return items
    .map ( ({ preview, original, description }) =>
          `<a class="gallery__item" href="${original}">
              <img class="gallery__image"
              src="${preview}"
              alt="${description}"
              />
          </a>`)
      .join('');
};

const lightbox = new SimpleLightbox('.gallery a', { 
    "captionsData": "alt",
    "captionDelay": 250,
    "captionPosition": "bottom"
  });






















// lightbox.addEventListener('click', e => {
//     if (e.target !== e.currentTarget)
//     return
//     lightbox.classList.remove("active")
// })