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

const API_KEY = '40999949-91c7d6cea5390f79fde95dcf3';

function showLoader() {
  loaderContainer.style.display = 'block';
  loader.style.display = 'block';
}
function hideLoader() {
  loaderContainer.style.display = 'none';
  loader.style.display = 'none';
}

let requestParams = {
  key: '40999949-91c7d6cea5390f79fde95dcf3',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};


function searchImages(query) {
  requestParams.q = query;
  const searchParams = new URLSearchParams(requestParams);

  showLoader();

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      hideLoader();

      if (!response.ok) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return response.json();
    })

    .then(({ hits }) => {
      const gallery = document.querySelector('.gallery');

      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
        close: true,
      });

      gallery.innerHTML = '';

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

      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      });
    });
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();
  searchImages(searchQuery);
});

// NEW AXIOS CODE

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>'
});


function updateGallery(images) {
  const galleryMarkup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
<li class="gallery-item">
     <a href="${largeImageURL}">
     <img src="${webformatURL}" alt="${tags}">
      <div class="image-info">
          <p>Likes:${likes}</p>
          <p>Views: ${views}</p>
          <p>Comments: ${comments}</p>
  <p>Downloads: ${downloads}</p>
      </div>
     </a>
    </li>`).join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup); 
  lightbox.refresh();
}


if (currentPage === Math.ceil(totalHits / per_page)) {
  loadMoreBtn.removeEventListener('click', loadImagesFromSearch);
   iziToast.info({
    title: "Info",
    message: "We're sorry, but you've reached the end of search results",
    position: "topRight",
  });
}

// сменить классы