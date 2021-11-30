import React from "react";
import { LoginScreen } from "../screens";
import Axios from "axios";
import { useRouter } from 'next/router'

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const formInitialSchema = {
    userName: "",
    passowrd: "",
  };
  //Submitted
  const handleSubmit = (value) => {

    const url = 'https://aeaf-39-46-16-1.ngrok.io/api/auth/tutor/login'
    console.log('email',value.email);
    console.log('password',value.password);
    const data={"email":value.email, 'password': value.password};
    try{
      debugger
      Axios.post(url, data)
      console.log("login successfully")
      router.push('/commingsoon')
    }catch (e) {
      console.log(e)
    }
  };
  return (
    <LoginScreen
      formInitialSchema={formInitialSchema}
      handleSubmit={handleSubmit}
    />
  );
};

export default login;
