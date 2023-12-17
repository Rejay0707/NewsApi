// // actions.js
// import axios from 'axios';

//  // Adjust the import statement based on your actual exports


// export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
// export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
// export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

// export const fetchNewsRequest = () => ({
//   type: FETCH_NEWS_REQUEST,
// });

// export const fetchNewsSuccess = (data) => ({
//   type: FETCH_NEWS_SUCCESS,
//   payload: data,
// });

// export const fetchNewsFailure = (error) => ({
//   type: FETCH_NEWS_FAILURE,
//   payload: error,
// });

// export const fetchData = () => {
//   return async (dispatch) => {
//     dispatch(fetchNewsRequest());
//     try {
//       const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=86937599d76b417a862a6bb92e9c74f1');
//       dispatch(fetchNewsSuccess(response.data.articles.slice(0, 12)));
//     } catch (error) {
//       dispatch(fetchNewsFailure(error.message));
//     }
//   };
// };
