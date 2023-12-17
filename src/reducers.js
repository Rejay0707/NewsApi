// reducers.js
// import { combineReducers } from 'redux';
// import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from './Components/actions';

// const newsReducer = (state = { data: [], loading: false, error: null }, action) => {
//   switch (action.type) {
//     case FETCH_NEWS_REQUEST:
//       return { ...state, loading: true, error: null };
//     case FETCH_NEWS_SUCCESS:
//       return { ...state, loading: false, data: action.payload, error: null };
//     case FETCH_NEWS_FAILURE:
//       return { ...state, loading: false, data: [], error: action.payload };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   news: newsReducer,
// });

// export default rootReducer;
