import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');
const inputEl = formEl.querySelector('input');
const loadMoreBtn = document.querySelector('.load-more');
const galleryEl = document.querySelector('.gallery');

hideLoader();
hideLoadMoreButton();

let currentPage = 1;
let currentQuery = '';

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const query = inputEl.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();
  await waitNextFrame();
  // await new Promise(resolve => {
  //   requestAnimationFrame(() => {
  //     setTimeout(resolve, 0);
  //   });
  // });

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    if (data.totalHits > currentPage * 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
    inputEl.value = '';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  showLoader();
  hideLoadMoreButton();
  await waitNextFrame();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        message: 'No more images available.',
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(data.hits);

    const cardHeight = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect().height;
    
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const totalLoaded = currentPage * 15;
    if (totalLoaded >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Failed to load more images. Please try again.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});

async function waitNextFrame() {
  return new Promise(resolve => {
    requestAnimationFrame(() => setTimeout(resolve, 0));
  });
}

