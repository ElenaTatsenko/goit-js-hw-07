import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

//galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>
            `
            })
        .join('');
}

//function onGalleryContainerClick(e) {
 // e.prevent.Default();

  //if (e.target.classList.contains('gallery__image')) {
  //  const imageInstance = basicLightbox.create(
  //    `<img src = "${e.target.dataset.source}" with="800" height="600">`,
  //    {

  //      onShow: () => window.addEventListener('keydown', onPressEsc),
   //     onClose: () => window.addEventListener('keydown', onPressEsc),
  //    }
 //   );
  //  imageInstance.show();
 // }
  //  function onPressEsc(e) {
   //   if (e.code === 'Escape') {
   ///     imageInstance.close();
   //   }
     
   //}

    //const source = e.target.dataset.source
    //console.log(source);
 // }
//}
console.log(galleryItems);