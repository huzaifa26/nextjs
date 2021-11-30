import Api from "./Api";

const url = "https://aeaf-39-46-16-1.ngrok.io/";

export const userRegister = async (data) => {
  const response = await Api(url).post("api/auth/tutor/register", data);
  return response;
};
export const userAbout = async (data) => {
  const response = await Api(url).post("api/auth/tutor/about", data);
  return response;
};
export const userProfileDescription = async (data) => {
  const response = await Api(url).post("api/auth/tutor/profile", data);
  return response;
};
