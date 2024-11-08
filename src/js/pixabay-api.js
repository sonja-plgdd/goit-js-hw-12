import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
axios.defaults.baseURL = baseURL;

let page = 1;
let totalPages = 1;


export async function fetchData(inputValue) {
    try {
    const response = await
    axios.get(baseURL, {
    params: {
    key: '46844024-31822d2c5a5dcad2dc3c03c6f',
    q: inputValue, 
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page
        }
    })
        return response.data;        
    } catch (error) {
        throw new Error(error);
    }
}
