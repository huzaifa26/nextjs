import React from "react";
import { useDispatch } from "react-redux";
import ProfileDescriptionScreen from "../screens/profileDescriptionScreen";
import { profileDescription } from "../redux/actions/auth";
let initialValues = {
  headline: "",
  description: "",
};

const ProfileDescription = () => {
  const dispatch = useDispatch();
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
