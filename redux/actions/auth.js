import { userAbout, userLogin, userRegister } from "../../pages/api/auth";
import { TYPES } from "../types";

export const login = (data) => async (dispatch) => {
  console.log("data", data);
  try {
    const response = await userLogin(data);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
  dispatch({
    type: TYPES.SET_LOGIN,
    payload: data.data,
  });
  data.router.push("/TeacherQuiz");
};

export const signUp = (data) => async (dispatch) => {
  console.log("data", data);
  try {
    const response = await userRegister(data);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
  //   dispatch({
  //     type: t.SET_TITLE,
  //     payload: title,
  //   });
};
export const about = (data) => async (dispatch) => {
  try {
    const response = await userAbout(data);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
  dispatch({
    type: TYPES.SET_ABOUT,
    payload: data.data,
  });
  data.router.push("/profileDescription");
};
export const profileDescription = (data) => async (dispatch) => {
  try {
    const response = await userAbout(data);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
  dispatch({
    type: TYPES.SET_PROFILE,
    payload: data,
  });
};