import { getImagesByQuery } from './js/pixabay-api.js';
import {createGallery,clearGallery,showLoader,hideLoader,} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const formEl = document.querySelector('.form');
const inputEl = formEl.querySelector('input');

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

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
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

