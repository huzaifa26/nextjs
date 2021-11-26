import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { loginValidateSchema } from "../utlis/validations";

const loginScreen = ({formInitialSchema,handleSubmit}) => {
  return (
    <div>
      <Formik
        initialValues={formInitialSchema}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={loginValidateSchema}
      >
        <Form>
          <div>
            <label>Name</label>
            <Field name="userName" type="text" placeholder="username" />
            <ErrorMessage
              component="div"
              name="userName"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>password</label>
            <Field name="password" type="password" placeholder="password" />
            <button type="submit">SignUp</button>
            <ErrorMessage
              component="div"
              name="password"
              style={{ color: "red" }}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default loginScreen;
