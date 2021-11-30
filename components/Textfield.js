import {useField, ErrorMessage, Field} from "formik";
import { Input } from 'antd';
import {InputField, FormikInput, FormikErrorMessageStyle} from '../styles/signup.styled'




const Textfiled = ({label,...props}) =>{
    const [field, meta] = useField(props)
    // console.log('field', field, 'meta', meta)
    return(
        <InputField>
            <FormikInput  placeholder={field.placeholder} {...field} {...props} />
            <FormikErrorMessageStyle name={field.name}/>
        </InputField>
    )
}

export default Textfiled
