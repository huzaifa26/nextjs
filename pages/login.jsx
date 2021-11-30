import React from "react";
import { LoginScreen } from "../screens";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const dispatch = useDispatch();
  const formInitialSchema = {
    userName: "",
    passowrd: "",
  };
  //Submitted
  const handleSubmit = (value) => {
    const data = { email: value.email, password: value.password };
    dispatch(login({ ...data, router }));
  };
  return (
    <LoginScreen
      formInitialSchema={formInitialSchema}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
