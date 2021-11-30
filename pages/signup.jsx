import React from "react";
import { SignupScreen } from "../screens";
import Axios from "axios";
import { useRouter } from 'next/router'

const signupForm = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const formInitialSchema = {
    userName: "",
    passowrd: "",
  };
  //Submitted
  const handleSubmit = (value) => {
    debugger
    const url = 'https://aeaf-39-46-16-1.ngrok.io/api/auth/tutor/register'
    console.log('email',value.email);
    console.log('password',value.password);
    const data={"email":value.email, 'password': value.password}
    try{
      Axios.post(url,data );
      router.push('/login')
    }catch (e) {
      console.log(e)
    }

  };
  return (
    <SignupScreen  formInitialSchema={formInitialSchema} handleSubmit={handleSubmit}/>
  );
};

export default signupForm;
