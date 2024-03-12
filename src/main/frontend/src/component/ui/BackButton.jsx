import styled from "styled-components";

const Wrapper = styled.button`
    
    margin-top: 20px;
    color: white;
    background-color: #3c434a;
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 40px;

    &:hover {
        cursor: pointer;
        background-color: #3c434acc;
    }
`;
const BackButton = () => {

    const onClick = () => {
        window.location.href = '/';
    }

    return (
        <Wrapper onClick={onClick}>
            처음으로
        </Wrapper>
    );
}

export default BackButton;