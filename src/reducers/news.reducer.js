import * as newsActions from "../actions/news.actions";

const initialState = {
  loading: false,
  newsFeeds: "",
  status: null,
  error: null
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case newsActions.NEWS_FEED_REQUESTING:
      return { ...state, loading: true };
    case newsActions.NEWS_FEED_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.status,
        newsFeeds: action.data
      };

    case newsActions.NEWS_FEED_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.status,
        error: action.error
      };
    default:
      return state;
  }
};

export default newsReducer;
