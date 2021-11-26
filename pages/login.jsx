import React from "react";
import { LoginScreen } from "../screens";

const login = () => {
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
    <LoginScreen
      formInitialSchema={formInitialSchema}
      handleSubmit={handleSubmit}
    />
  );
};

export default login;
