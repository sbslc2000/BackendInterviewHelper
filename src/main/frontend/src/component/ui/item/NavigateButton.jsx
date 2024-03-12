import styled from "styled-components";

export const NavigateButton = styled.li`
    //ui
    width: 600px;
    height: 40px;
    line-height: 40px;
    margin: 10px;
    background-color: ${props => props.backgroundColor};
    border-radius: 15px;

    &:hover {
        cursor: pointer;
        //색상을 조금 밝게 만들어줍니다.
        background-color: ${props => props.backgroundColor && props.backgroundColor + 'bb'};
    }
`;


