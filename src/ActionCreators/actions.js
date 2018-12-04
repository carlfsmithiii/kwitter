import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const ADD_KWEET = "ADD_KWEET";
export const ADD_USER = "ADD_USER";
export const DELETE_KWEET = "DELETE_KWEET";
export const DELETE_USER = "DELETE_USER";
export const ADD_LIKE = "ADD_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const LOGIN_USER = "LOGIN_USER";

export const addKweet = kweet => {
  return {
    type: ADD_KWEET,
    payload: kweet
  };
};

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

export const deleteKweet = kweet => {
  return {
    type: DELETE_KWEET,
    payload: kweet
  };
};

export const deleteUser = user => {
  return {
    type: DELETE_USER,
    payload: user
  };
};

export const addLike = (kweet, user) => {
  return {
    type: ADD_LIKE,
    payload: { kweet, user }
  };
};

export const deleteLike = kweet => {
  return {
    type: DELETE_LIKE,
    payload: kweet
  };
};

export function logInUser({ username, password }) {
  return function(dispatch) {
    axios
      .post(API_DOMAIN + "/auth/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.success) {
            dispatch({
                type: LOGIN_USER,
                payload: {
                    id: response.data.id,
                    token: response.data.token
                }
            });
        } else {
          console.log("Access Denied");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}
