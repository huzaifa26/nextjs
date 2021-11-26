
import React from "react";
import { SignupScreen } from "../screens";



const signupForm = () => {
  const formInitialSchema = {
    userName: "",
    passowrd: "",
  };
  //Submitted
  const handleSubmit = (value) => {
    console.log(value);
    console.log("submit");
  };
  return (
    <SignupScreen  formInitialSchema={formInitialSchema} handleSubmit={handleSubmit}/>
  );
};

export default signupForm;
