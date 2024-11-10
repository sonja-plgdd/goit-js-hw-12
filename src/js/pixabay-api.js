import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const myAPIKey = '46844024-31822d2c5a5dcad2dc3c03c6f';


export async function fetchData(inputValue, page) {
    try {
        const response = await axios.get(baseURL, {
            params: {
                key: myAPIKey,
                q: inputValue,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                per_page: 15,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}