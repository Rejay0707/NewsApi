
import axios from 'axios';

const API_KEY = '86937599d76b417a862a6bb92e9c74f1';

const fetchNewsData = async (searchTerm) => {
try {
    const url = searchTerm
    ? `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
    : `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

    const response = await axios.get(url);
    const responseData = response.data;

    if (responseData.articles.length === 0) {
    return { error: 'No results found.' };
    } else {
    return { error: null, data: responseData.articles.slice(0, 12) };
    }
} catch (error) {
    console.error('Error fetching news data:', error);
    return { error: 'An error occurred while fetching news data.' };
}
};

export default fetchNewsData;

