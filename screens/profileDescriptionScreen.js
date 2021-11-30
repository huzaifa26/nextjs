import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Textfield from "../components/Textfield";
import CustomButton from "../components/Button";
import { profileDescriptionValidationSchema } from "../utlis/auth";

const ProfileDescriptionScreen = ({ initialValues, handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={profileDescriptionValidationSchema}
    >
      {() => (
        <Form>
          <Textfield label="Your Headline" name="headline" />
          <Field name="description" as="textarea" />
          <ErrorMessage
            component="div"
            name="description"
            style={{ color: "red" }}
          />
          <CustomButton title="Next" />
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDescriptionScreen;
