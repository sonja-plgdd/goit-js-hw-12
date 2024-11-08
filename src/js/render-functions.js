
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');

export function createMarkup(obj) {
    const imageItem = obj.hits.map(image =>
    `<li class="gallery-item">
    <div class="img-wrapper">
  <a class="gallery-link" href=${image.largeImageURL}>
  <img class='gallery-image' src=${image.webformatURL} data-source=${image.largeImageURL} alt='${image.tags}'/>
  </a></div>
  <ul class="card">
  <li>
  <h3>Likes</h3>
  <p>${image.likes}</p></li>
  <li>
  <h3>Views</h3>
  <p>${image.views}</p>
  </li>
  <li>
  <h3>Comments</h3>
  <p>${image.comments}</p></li>
  <li><h3>Downloads</h3>
  <p>${image.downloads}</p></li>
  </ul>
  </li>`).join('');
    gallery.insertAdjacentHTML('beforeend', imageItem);
    new SimpleLightbox('.gallery a')
}


