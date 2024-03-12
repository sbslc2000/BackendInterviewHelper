import styled from "styled-components";

const Wrapper = styled.button`

    background-color: ${props => props.listening ? "#ff8085" : "#72aee6"};
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 40px;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.listening ? "#ff8085cc" : "#72aee6cc"};
    }
`;
const AnswerButton = (props) => {

    const text = props.

    return (
        <Wrapper>
            {text}
        </Wrapper>
    );
}

export default AnswerButton;