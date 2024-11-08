import { fetchData } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-btn');
let currentQuery = '';
const loader = document.querySelector('.loader');


function showLoading() {
    loader.classList.add('active');
};

function hideLoading() {
    loader.classList.remove('active');
}

function showLoadMore() {
    loadMore.classList.add('active');
}

function hideLoadMore() {
    loadMore.classList.remove('active');
}

let page = 1;
let totalPages = 1;

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const userInput = event.target.elements[0].value.trim();

    if (userInput !== '') {
        currentQuery = userInput;
        gallery.innerHTML = '';
        page = 1;
        showLoading();
        try {
            const data = await fetchData(currentQuery, page);

            if (data.hits.length === 0) {
                iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    backgroundColor: '#ef4040',
                    messageColor: '#fff',
                    position: 'topRight',
                    maxWidth: 432,
                });
                hideLoadMore();
            } else {
                createMarkup(data);
                totalPages = Math.ceil(data.totalHits / 15);
                if (page < totalPages) {
                    showLoadMore();
                } else {
                    hideLoadMore();
                }
            }

        } catch (error) {
            console.log(error);
        } finally {
            hideLoading();
        }
    }
}
loadMore.addEventListener('click', handleLoadMore);
async function handleLoadMore() {
    page += 1;
    showLoading();
    try {
        const data = await fetchData(currentQuery, page); 
        createMarkup(data);
        if (page >= totalPages) {
            hideLoadMore();
        }
    } catch (error) {
        console.log(error);
    } finally {
        hideLoading();
    }
}
