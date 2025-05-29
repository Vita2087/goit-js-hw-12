import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" class="gallery-img" />
      </a>
      <div class="ul-info">
        <p class="ul-info-li">Likes:<span class="ul-info-li-p"> ${likes}</span></p>
        <p class="ul-info-li">Views:<span class="ul-info-li-p"> ${views}</span></p>
        <p class="ul-info-li">Comments:<span class="ul-info-li-p"> ${comments}</span></p>
        <p class="ul-info-li">Downloads:<span class="ul-info-li-p"> ${downloads}</span></p>
      </div>
    </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}
