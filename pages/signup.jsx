
import React from "react";
import { SignupScreen } from "../screens";



const signupForm = () => {
  const formInitialSchema = {
    userName: "",
    passowrd: "",
  };
  //Submitted
  const handleSubmit = (value) => {
    debugger
    console.log('value',value);
    console.log("submit");
  };
  return (
    <SignupScreen  formInitialSchema={formInitialSchema} handleSubmit={handleSubmit}/>
  );
};

export default signupForm;
