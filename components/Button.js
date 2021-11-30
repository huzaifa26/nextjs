import { Button as AntButton } from 'antd';
import styled from 'styled-components'

const BtnStyle = styled.button`
  width: 100%;
  background-color: var(--org);
  color: white;
  border-radius: 5px;
  height: 40px;
margin-top: 20px;
border-color: var(--org);
border-width: 0.5px`

const CustomButton = (props) => {
    return(
        <BtnStyle type="submit" >
            {props.title}
        </BtnStyle>
    )
}

export default CustomButton
