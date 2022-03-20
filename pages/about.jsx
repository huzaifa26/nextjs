import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
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
  //states
  const [, setValues] = useState({});
  const router = useRouter();
  useEffect(() => {
    initialValues = aboutt;
    setValues((prev) => ({ ...prev, ...initialValues }));
  }, [aboutt]);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(about({ data: values, router }));
  };
  return (
    <AboutTutorScreen
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};

export default AboutTutor;
