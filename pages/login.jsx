import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import React from "react";

const login = () => {
    const formInitialSchema = {
        userName: "",
        passowrd: "",
      };
    
      //Validate Schema
      let validateSchema = yup.object().shape({
        userName: yup.string().email().required("UserName is required"),
        password: yup
          .string()
          .min(8, "min 8 charaters are required")
          .required("Password is required"),
      });
    
      //Submitted
      const handleSubmit = (value) => {
        console.log(value);
        console.log("submit");
      };
    return (
        <div>
            <Formik
        initialValues={formInitialSchema}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validateSchema}
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
    )
}

export default login
