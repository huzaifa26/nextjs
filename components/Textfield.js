import {useField, ErrorMessage} from "formik";
import { Input } from 'antd';
import styled from 'styled-components'

const InputField = styled.div`
 width: 100%`
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
`


const Textfiled = ({label,...props}) =>{
    const [field, meta] = useField(props)
    // console.log('field', field, 'meta', meta)
    return(
        <InputField>
            <InputStyle  placeholder={field.placeholder} {...field} {...props} />
            <ErrorMessage name={field.name} />
        </InputField>
    )
}

export default Textfiled
