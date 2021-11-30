import { useField, ErrorMessage, Field } from "formik";
import { Input } from "antd";
import {
  InputField,
  FormikInput,
  FormikErrorMessageStyle,
} from "../styles/signup.styled";

const Textfield = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log('field', field, 'meta', meta)
  return (
    <>
      {label && <label>{label}</label>}
      <InputField>
        <FormikInput placeholder={field.placeholder} {...field} {...props} />
        <FormikErrorMessageStyle name={field.name} />
      </InputField>
    </>
  );
};

export default Textfield;
