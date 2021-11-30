import { userAbout, userRegister } from "../../pages/api/auth";
import * as t from "../types";

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
  console.log("data", data);
  try {
    const response = await userAbout(data);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
  //   dispatch({
  //     type: t.SET_TITLE,
  //     payload: title,
  //   });
};
export const profileDescription = (data) => async (dispatch) => {
  console.log("data", data);
  try {
    const response = await userAbout(data);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
  //   dispatch({
  //     type: t.SET_TITLE,
  //     payload: title,
  //   });
};
