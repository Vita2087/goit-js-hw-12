import axios from 'axios';

const API_KEY = '50519901-1dec8c4abba0943f2b3355c3a'; 
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: PER_PAGE, 
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
