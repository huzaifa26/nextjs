import * as yup from "yup";

export const signUpValidateSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("UserName is required"),
  password: yup
    .string()
    .min(8, "min 8 charaters are required")
    .required("Password is required"),
});

export const loginValidateSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("UserName is required"),
  password: yup
    .string()
    .min(8, "min 8 charaters are required")
    .required("Password is required"),
});
