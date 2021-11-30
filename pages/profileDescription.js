import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDescriptionScreen from "../screens/profileDescriptionScreen";
import { profileDescription } from "../redux/actions/auth";
let initialValues = {
  headline: "",
  description: "",
};

const ProfileDescription = () => {
  const profile = useSelector((state) => state.profile);
  console.log("profile", profile);
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
