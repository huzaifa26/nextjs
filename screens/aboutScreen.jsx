import React from "react";
import { Field, Form, Formik } from "formik";
import { aboutValidationSchema } from "../utlis/auth";
import CustomButton from "../components/Button";
import Textfield from "../components/Textfield";

const AboutTutorScreen = ({ initialValues, handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={aboutValidationSchema}
      enableReinitialize
    >
      {() => (
        <Form>
          <Textfield label="First Name" name="firstName" />
          <Textfield label="Last Name" name="lastName" />
          <Textfield label="Email" name="email" />
          <Textfield label="Country of Origin" name="country" />
          <Textfield label="Languages Spoken" name="languagesSpoken" />
          <Textfield label="Level" name="level" />
          <Textfield label="Subject Taught" name="subjectTaught" />
          <Textfield label="Hourly Rate" name="hourlyRate" type="number" />
          <Textfield
            label="Phone Number (optional)"
            name="phonenumber"
            type="number"
          />
          <Field name="over18" type="checkbox" />
          <span>I confirm I'm over 18.</span>
          <CustomButton title="Next" />
        </Form>
      )}
    </Formik>
  );
};

export default AboutTutorScreen;
