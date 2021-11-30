import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Textfield from "../components/Textfield";
import CustomButton from "../components/Button";
import { profileDescriptionValidationSchema } from "../utlis/auth";
import { useRouter } from "next/dist/client/router";

const ProfileDescriptionScreen = ({ initialValues, handleSubmit }) => {
  const router = useRouter();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={profileDescriptionValidationSchema}
      enableReinitialize
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
          <button onClick={() => router.push("/about")}>Back</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDescriptionScreen;
