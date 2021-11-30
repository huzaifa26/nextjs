import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { about } from "../redux/actions/auth";
import AboutTutorScreen from "../screens/aboutScreen";

let initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  languagesSpoken: "",
  level: "",
  subjectTaught: "",
  hourlyRate: "",
  phonenumber: "",
  over18: false,
};

const AboutTutor = () => {
  const aboutt = useSelector((state) => state.about);
  console.log("about", aboutt);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(about(values));
  };
  return (
    <AboutTutorScreen
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};

export default AboutTutor;
