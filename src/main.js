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

// LOAD MORE

// axios({
//   method: 'get',
//   url: '<https://jsonplaceholder.typicode.com/users>'
// });


function updateGallery(images) {
  const galleryMarkup = images
    .map(
      (image) => `
        <a href="${image.largeUrl}" data-lightbox="gallery" data-title="Likes: ${image.likes}, Views: ${image.views}, Comments: ${image.comments}, Downloads: ${image.downloads}">
          <img src="${image.url}" alt="${image.alt}" />
        </a>
      `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

  lightbox.refresh();

  toggleLoadMoreButton();
}

function toggleLoadMoreButton() {
  if (totalHits > galleryContainer.children.length) {
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";

if (galleryContainer.children.length > 0 && currentPage > 1 && totalHits === galleryContainer.children.length) {
  iziToast.info({
    title: "Info",
    message: "We're sorry, but you've reached the end of search results.",
    position: "topRight",
  });
}
  }
}

function createGalleryCard(image) {
  const card = document.createElement("div");
  card.classList.add("gallery-card");

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;

  card.appendChild(img);
  return card;
}
// сменить классы