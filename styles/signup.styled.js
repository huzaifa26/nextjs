import styled from "styled-components";
import {Button as AntButton} from "antd";
import {ErrorMessage, Field} from "formik";

export const SignupHead = styled.div`
 background-color: rgba(255, 108, 11, 0.05)`;

export const SignupHeader = styled.h1`
 font-size: 2.5rem;
 color: var(--td);
 font-weight: 700;
 padding: 2.5rem 0;
 text-align: center;
  @media screen and (max-width: 850px) {
    font-size: 2rem;
  }`;

export const SignupBox = styled.div`
 margin: 5rem auto;
 border: 1px solid var(--dark);
 /* width: 55%; */
 max-width: 875px;
 padding: 5rem 3.5rem;
 display: flex;
 border-radius: 1rem;
 background-color: var(--white);
  @media screen and (max-width: 1000px) {
      margin: 5rem;
      padding: 2.5rem;
  }
  @media screen and (max-width: 850px) {
    margin: 2.5rem;
    padding: 0;
    border: 0;
    background-color: var(--bgc);
  }`;
export const SignupImg = styled.img`
 border: 1px;
 width: 40%; 
 max-width: 875px;
 border-radius: 1rem;
  @media screen and (max-width: 1000px) {
    max-width: 30rem;
    width: 30rem;
    max-height: 30rem;
    height: 30rem;
    margin: 0 2.5rem 0 0;
  }
  @media screen and (max-width: 850px) {
    display: none;
  }`;
export const SignupBoxContant = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
  align-items: flex-start;
margin-left: 10px`;
export const SignupHeading = styled.h1`
 font-size: 2.5rem;
 color: var(--td);
 font-weight: 500;
 display: flex;
 align-items: center;
justify-content: center;
width: 100%;
  @media screen and (max-width: 850px) {
    font-size: 1.75rem;
  }`;
export const SignupHeadingSpan = styled.h1`
  font-family: "Merriweather", "Roboto", -apple-system, BlinkMacSystemFont,
  Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
  Helvetica Neue, sans-serif !important; color: var(--org); font-size: 3.2rem`;
export const SignupFormContainer = styled.h1`
 width: 100%;
flex: 1;
  padding-top:  5rem `;
export const SignupTitle = styled.h1`
 font-size: 3.25rem;
 color: var(--td);
 font-weight: 700;
width: 100%;
  @media screen and (max-width: 850px) {
    font-size: 2.75rem;
    margin: 1.5rem 0 0 0;
  }`;
export const SignupInputBox = styled.h1`
 width: 100%;
margin-top: 20px;
@media screen and (max-width: 850px) {
  margin: 2.5rem 0;
}`;
export const InputBox = styled.div`
  margin: 0 0 1.5rem 0;
width: 100%`
export const BtnContainer = styled.div`
width: 100%;
text-align: center;
  padding: 1rem 2rem;
  font-size: 1.35rem;`
export const RemenberMeBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
margin-top: 15px`
export const CheckBoxContainer =styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;`
export const CheckBoxLabel =styled.div`
  font-size: 15px;
padding-left: 5px`
export const TutorSignin =styled.div`
  font-size: 15px;
padding-left: 5px`
export const MyButon = styled.button`
  width: 100%;
  background-color: var(--org);
  color: white;
  border-radius: 5px;
  height: 40px;
margin-top: 20px;
border-color: var(--org);
border-width: 0.5px`
export const AlreadyAccount = styled.h6`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--td);
  font-size: 1.5rem;
  font-weight: 400;`
export const AlreadyAccount_Ancher = styled.a`
  color: var(--org);
  margin: 0 0 0 1.5rem;
  font-weight: 600;`;
export const InputField = styled.div`
 width: 100%`
export const FormikInput= styled(Field)`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border-color: #b5b5b5;
  border-width: 0.5px;
`
export const FormikErrorMessageStyle= styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`