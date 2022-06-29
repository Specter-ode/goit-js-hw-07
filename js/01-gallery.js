import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const blockMarkUp = createImagesGallery(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", blockMarkUp);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImagesGallery (items) {
    return items
    .map ( ({ preview, original, description }) =>
      `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
          </a>
      </div>`)
      .join('');
};
  
function onGalleryContainerClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}">`,
        {
            onShow: function () {
                const newActiveBlock = event.target;
                newActiveBlock.classList.add("is-open");
            },

            onClose: function () {
                event.preventDefault();
                const currentActiveImage = document.querySelector(".gallery__image.is-open");
                currentActiveImage?.classList.remove("is-open");
            }
        }
    )

    window.addEventListener("keydown", function (event) {
        if (event.code === "Escape") {
            instance.close();
        }
    })
    
    instance.show()
    }



