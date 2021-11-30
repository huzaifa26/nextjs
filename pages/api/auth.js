import Api from "./Api";

const url = "https://aeaf-39-46-16-1.ngrok.io/";

export const userRegister = async (data) => {
  const response = await Api(url).post("api/auth/tutor/register", data);
  return response;
};
