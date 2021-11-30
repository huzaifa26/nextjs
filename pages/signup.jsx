import React from "react";
import { SignupScreen } from "../screens";
import Axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/auth";

const signupForm = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const formInitialSchema = {
    userName: "",
    passowrd: "",
  };

  //Submitted
  const handleSubmit = (value) => {
    const data = { email: value.email, password: value.password };
    dispatch(signUp(data));
  };
  return (
    <SignupScreen
      formInitialSchema={formInitialSchema}
      handleSubmit={handleSubmit}
    />
  );
};

export default signupForm;
