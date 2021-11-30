import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex: 1`
const Heading = styled.h1`
color: #00a154`

const CommingSoonScreen = () =>{
    return(
        <Container>
            <Heading>Comming soon</Heading>
        </Container>
    )
}
export default CommingSoonScreen
