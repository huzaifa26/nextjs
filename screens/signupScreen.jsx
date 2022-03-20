import React, { useState } from "react";
import Head from "next/head";
import {
  SignupHead,
  SignupHeader,
  SignupBox,
  SignupImg,
  SignupBoxContant,
  SignupHeading,
  SignupHeadingSpan,
  SignupTitle,
  SignupInputBox,
  SignupFormContainer,
  BtnContainer,
  RemenberMeBox,
  CheckBoxContainer,
  CheckBoxLabel,
  TutorSignin,
  MyButon,
  AlreadyAccount,
  AlreadyAccount_Ancher,
} from "../styles/signup.styled";
import { Box } from "../styles/global.styled";
import { en } from "../locales/en";
import { fr } from "../locales/fr";
import { signUpValidateSchema } from "../utlis/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Textfiled from "../components/Textfield";
import CustomButton from "../components/Button";
import styled from "styled-components";
import Link from "next/link";

const InputField = styled.div`
  width: 100%;
`;
const InputStyle = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
  //border-top-color: #d0cfcf;
  //border-bottom-color: #b5b5b5;
  //border-left-color: #b5b5b5;
  //border-right-color: #b5b5b5
  border-color: #b5b5b5;
  border-width: 0.5px;
`;

const signupScreen = ({ formInitialSchema, handleSubmit }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [language, setLanguage] = useState("");
  console.log("MR testing");
  const t = language === "en" ? en : fr;
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignupHead>
        <Box>
          <SignupHeader>{t.signupHeader}</SignupHeader>
        </Box>
      </SignupHead>
      <SignupBox>
        {/*<img src="/signupImg.svg" alt="" />*/}
        <SignupImg src="/signupImg.svg" alt="" />
        <SignupBoxContant>
          <SignupHeading>
            {t.signupHeading}
            <SignupHeadingSpan>{t.headingSpan}</SignupHeadingSpan>
          </SignupHeading>
          <SignupFormContainer>
            <SignupTitle>{t.signupTitle}</SignupTitle>
            <SignupInputBox>
              <Formik
                initialValues={formInitialSchema}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={signUpValidateSchema}
              >
                <Form>
                  <Textfiled
                    label={t.email}
                    name={"email"}
                    placeholder={"jane@acme.com"}
                  />
                  <Textfiled
                    label={t.password}
                    name={"password"}
                    placeholder={"password"}
                    type={"password"}
                  />
                  <RemenberMeBox>
                    <CheckBoxContainer>
                      <input type="checkbox" name="remember" id="remember" />
                      <CheckBoxLabel>{t.remembarTitle}</CheckBoxLabel>
                    </CheckBoxContainer>
                    <TutorSignin>{t.tutorSigninTitle}</TutorSignin>
                  </RemenberMeBox>
                  <BtnContainer>
                    <CustomButton title={t.signupTitle} />
                    {/*<MyButon type={'submit'}>{t.signupTitle}</MyButon>*/}
                    {/*<button type={'submit'}>Register</button>*/}
                  </BtnContainer>

                  <AlreadyAccount>
                    {t.alreadyAccountTitle}{" "}
                    <Link href="/login">
                      <AlreadyAccount_Ancher>
                        {t.loginTitle}
                      </AlreadyAccount_Ancher>
                    </Link>
                  </AlreadyAccount>
                </Form>
              </Formik>
            </SignupInputBox>
          </SignupFormContainer>
        </SignupBoxContant>
      </SignupBox>
    </div>
  );
};

export default signupScreen;
