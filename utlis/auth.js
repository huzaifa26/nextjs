import * as yup from "yup";

export const aboutValidationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  country: yup.string().required("Country is required"),
  languagesSpoken: yup.string().required("Language is required"),
  level: yup.string().required("Level is required"),
  subjectTaught: yup.string().required("Subject is required"),
  hourlyRate: yup.number().required("Hourly Rate is required"),
  phonenumber: yup.number().required("Level is required"),
  //   over18: yup.bool().required("Select this checkbox"),
});

export const profileDescriptionValidationSchema = yup.object({
  headline: yup.string().required("Headline is required"),
  description: yup.string().required("Description is required"),
});
