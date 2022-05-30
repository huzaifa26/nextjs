import { TYPES } from "../types";

export const makeQuiz = (data) => async (dispatch) => {
    dispatch({
      type: TYPES.SET_QUIZ,
      payload: data,
    });
  };

export const getAllQuizez = (data) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_ALLQUIZEZ,
    payload: data,
  });
};

export const getQuizQuestion = (data) => async (dispatch) => {
  dispatch({
    type:TYPES.SET_SINGLEQUESTION,
    payload:data
  })
}

export const deleteFromIndex = (data) => async (dispatch) => {
  dispatch({
    type:TYPES.SET_SINGLEQUESTION_DELETE,
    payload:data
  })
}

export const EmptyGetQuizQuestion = (data) => async (dispatch) => {
  dispatch({
    type:TYPES.SET_SINGLEQUESTION_EMPTY,
    payload:data
  })
}

export const updateAllQuizez = (data) => async (dispatch) => {
  dispatch({
    type:TYPES.UPDATE_ALLQUIZEZ,
    payload:data
  })
}

export const setAllQuizNewState = (data) => async (dispatch) => {
  dispatch({
    type:TYPES.SET_ALLQUIZEZ_NEW_STATE,
    payload:data
  })
}