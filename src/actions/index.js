import axios from "axios";
import { browserHistory } from "react-router";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGES } from "./types";

const API_URL = "https://test-node-server-wavecell.herokuapp.com";

export const signinUser = ({ email, password }) => dispatch => {
  axios
    .post(`${API_URL}/signin`, { email, password })
    .then(response => {
      // - update state indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // - save the jwt token
      localStorage.setItem("token", response.data.token);
      // - redirect to the route '/feature'
      browserHistory.push("/feature");
    })
    .catch(() => {
      // - show an error to the user
      dispatch(authError("Bad login info"));
    });
};

export const signupUser = ({ username, email, password }) => dispatch => {
  axios
    .post(`${API_URL}/signup`, { username, email, password })
    .then(response => {
      dispatch({ type: AUTH_USER });
      // - save the jwt token
      localStorage.setItem("token", response.data.token);
      // - redirect to the route '/feature'
      browserHistory.push("/feature");
    })
    .catch(error => {
      dispatch(authError(error.response.data.error));
    });
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export const signoutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: UNAUTH_USER });
};

export const fetchMessage = () => dispatch => {
  axios
    .get(`${API_URL}`, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(response => {
      dispatch({ type: FETCH_MESSAGES, payload: response.data.message });
    });
};
