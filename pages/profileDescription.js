import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDescriptionScreen from "../screens/profileDescriptionScreen";
import { profileDescription } from "../redux/actions/auth";

let initialValues = {
  headline: "",
  description: "",
};

const ProfileDescription = () => {
  //selector
  const profile = useSelector((state) => state.profile);
  //states
  const [, setValues] = useState({});
  console.log("profile", profile);
  const dispatch = useDispatch();

  useEffect(() => {
    initialValues = profile;
    setValues((prev) => ({ ...prev, ...initialValues }));
  }, []);

  const handleSubmit = (values) => {
    dispatch(profileDescription(values));
  };
  return (
    <ProfileDescriptionScreen
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProfileDescription;
