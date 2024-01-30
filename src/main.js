// библиотеки
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from "axios";

// api-key 40999949-91c7d6cea5390f79fde95dcf3

const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.input');
const loaderContainer = document.querySelector('.loader-container');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

const API_KEY = '40999949-91c7d6cea5390f79fde95dcf3';

let currentPage = 1;
const perPage = 40;
let searchQuery = '';

function showLoader() {
  loaderContainer.style.display = 'block';
  loader.style.display = 'block';
}
function hideLoader() {
  loaderContainer.style.display = 'none';
  loader.style.display = 'none';
}

async function searchImages(query, currentPage) {
  query = searchQuery;

  const requestParams = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: perPage,
  };
  const searchParams = new URLSearchParams(requestParams);

  showLoader();

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?${searchParams}`
      );

    hideLoader();

    const { hits, totalHits } = response.data;
    const lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      captionsData: 'alt',
      close: true,
    });

    lightbox.refresh();

    if (currentPage === 1) {
      gallery.innerHTML = '';
    }
// function searchImages(query) {
//   requestParams.q = query;


//   fetch(`https://pixabay.com/api/?${searchParams}`)
//     .then(response => {

//       if (!response.ok) {
//         throw new Error(
//           'Sorry, there are no images matching your search query. Please try again!'
//         );
//       }
//       return response.json();
//     })

//     .then(({ hits }) => {       

//       const lightbox = new SimpleLightbox('.gallery a', {
//         captionDelay: 250,
//         captionsData: 'alt',
//         close: true,
//       });
// ТУТ ПЕРЕПИСАТЬ ИЛИ УДАЛИТЬ

      gallery.innerHTML = hits.reduce(
        (html, image) =>
          html +
          `<a class="gallery-link" href="${image.largeImageURL}">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${image.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${image.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${image.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${image.downloads}</p>
              </li>
            </ul>
        </a>`,
        ''
      );

//       lightbox.refresh();
//     })
//     .catch(error => {
//       iziToast.error({
//         title: 'Error',
//         message: error.message,
//         position: 'topRight',
//       });
//     });
// }



// searchForm.addEventListener('submit', event => {
//   event.preventDefault();

//   const searchQuery = searchInput.value.trim();
//   currentPage = 1;
//   loadMoreButton.style.display = 'none';
//   searchImages(searchQuery, currentPage);
//   searchForm.reset();
// });
  } catch (error) {
    hideLoader();

    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  }
}

// LOAD MORE

loadMoreButton.addEventListener('click', () => {
  currentPage += 1;
  searchImages(searchQuery, currentPage);
});
// там query, тут searchQuery