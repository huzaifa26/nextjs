import * as t from "../types";

export const setTitle = (title) => dispatch => {
  dispatch({
    type: t.SET_TITLE,
    payload: title
  });
}