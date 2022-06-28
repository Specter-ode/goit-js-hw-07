import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox'
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryBlock = document.querySelector(".gallery__item");
const galleryImage = document.querySelector(".gallery__image")

// const lightBoxModal = document.querySelector(".modal")
// const buttonCloseOnModal = document.querySelector(".close-button")

const blockMarkUp = createImagesGallery(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin",blockMarkUp);
galleryContainer.addEventListener ('click', onGalleryContainerClick);

function createImagesGallery (items) {
    return items
    .map ( ({ preview, original, description }) =>
      `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image"
              src="${preview}"
              data-source="large-image.jpg"
              alt="${description}"
              />
          </a>
      </div>`)
      .join('');
  };

function onGalleryContainerClick (event) {
    event.preventDefault();
    console.log(event.target)
    if (!event.target.classList.contains("gallery__image")) {
    return;
    }
    galleryBlock.classList.add('is-open');


}

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)
// instance.show()



// function onClickHandlerClose(event) {
//     event.preventDefault(); 
//     lightBoxModal.classList.remove("is-open");
// }

// function closeModalByEscape(event) {
//     if (event.code === "Escape") {
//         onClickHandlerClose();
//       }
//   }









// const currentActiveBlock = document.querySelector(".gallery__item .is-open");
// if (currentActiveBlock) {
//     currentActiveBlock.classList.remove(".is-open");
// } 
// currentActiveBlock?.classList.remove(".is-open");
// const newActiveBlock = event.target;
// const parentColorCard = newActiveBlock.closest(".gallery__item")
// parentColorCard.classList.add('is-open');