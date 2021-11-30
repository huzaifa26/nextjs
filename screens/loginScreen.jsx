import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  loginValidateSchema,
  signUpValidateSchema,
} from "../utlis/validations";
import Head from "next/head";
import {
  AlreadyAccount,
  AlreadyAccount_Ancher,
  BtnContainer,
  CheckBoxContainer,
  CheckBoxLabel,
  RemenberMeBox,
  SignupBox,
  SignupBoxContant,
  SignupFormContainer,
  SignupHead,
  SignupHeader,
  SignupHeading,
  SignupHeadingSpan,
  SignupImg,
  SignupInputBox,
  SignupTitle,
  TutorSignin,
} from "../styles/signup.styled";
import { Box } from "../styles/global.styled";
import CustomButton from "../components/Button";
import Link from "next/link";
import { en } from "../locales/en";
import { fr } from "../locales/fr";
import Textfield from "../components/Textfield";

const loginScreen = ({ formInitialSchema, handleSubmit }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [language, setLanguage] = useState("");

  const t = language === "en" ? en : fr;
  return (
    <div>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignupHead>
        <Box>
          <SignupHeader>{t.loginHeader}</SignupHeader>
        </Box>
      </SignupHead>
      <SignupBox>
        {/*<img src="/signupImg.svg" alt="" />*/}
        <SignupImg src="/loginImg.svg" alt="" />
        <SignupBoxContant>
          <SignupHeading>
            {t.signupHeading}
            <SignupHeadingSpan>{t.headingSpan}</SignupHeadingSpan>
          </SignupHeading>
          <SignupFormContainer>
            <SignupTitle>{t.loginTitle}</SignupTitle>
            <SignupInputBox>
              <Formik
                initialValues={formInitialSchema}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={loginValidateSchema}
              >
                <Form>
                  <Textfield
                    label={t.email}
                    name={"email"}
                    placeholder={"jane@acme.com"}
                  />
                  <Textfield
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
                    {t.haveAccount}{" "}
                    <Link href="/login">
                      <AlreadyAccount_Ancher>
                        {t.getStarted}
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

export default loginScreen;
