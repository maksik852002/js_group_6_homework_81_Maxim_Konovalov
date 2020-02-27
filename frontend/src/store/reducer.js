import {
  GET_SHORTEN_LINK_REQUEST,
  GET_SHORTEN_LINK_SUCCESS,
  GET_SHORTEN_LINK_FAILURE,
  INPUT_CHANGE,
  CLOSE_MODAL
} from "./actions";

const initialState = {
  originalUrl: "",
  shortUrl: "",
  error: "",
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return { ...state, error: "" };
    case INPUT_CHANGE:
      return { ...state, originalUrl: action.e.target.value };
    case GET_SHORTEN_LINK_REQUEST:
      return { ...state, loading: !state.loading };
    case GET_SHORTEN_LINK_SUCCESS:
      return {
        ...state,
        shortUrl: action.data.shortUrl,
        loading: !state.loading
      };
    case GET_SHORTEN_LINK_FAILURE:
      return { ...state, error: action.error, loading: !state.loading };
    default:
      return state;
  }
};

export default reducer;
