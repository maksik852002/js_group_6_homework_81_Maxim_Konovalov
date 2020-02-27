import axios from "../axiosApi";

export const GET_SHORTEN_LINK_REQUEST = "GET_SHORTEN_LINK_REQUEST";
export const GET_SHORTEN_LINK_SUCCESS = "GET_SHORTEN_LINK_SUCCESS";
export const GET_SHORTEN_LINK_FAILURE = "GET_SHORTEN_LINK_FAILURE";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const getShortenLinkRequest = () => ({ type: GET_SHORTEN_LINK_REQUEST });
export const getShortenLinkSuccess = data => ({ type: GET_SHORTEN_LINK_SUCCESS, data });
export const getShortenLinkFailure = error => ({ type: GET_SHORTEN_LINK_FAILURE, error });
export const inputChange = e => ({ type: INPUT_CHANGE, e });
export const closeModal = () => ({ type: CLOSE_MODAL });

export const getShortenLink = data => {
  return async dispatch => {
    try {
      dispatch(getShortenLinkRequest());
      const response = await axios.post("/links", data);
      dispatch(getShortenLinkSuccess(response.data));
    } catch (e) {
      dispatch(getShortenLinkFailure(e));
    }
  };
};
