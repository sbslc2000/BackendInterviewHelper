import styled from "styled-components";

const Wrapper = styled.span`
    display: inline-block;
    padding: 4px;
    border-radius: 5px;
    background-color: ${props => props.backgroundColor};
    font-size: 0.8em;
    color: white;
    font-weight: bold;
    margin: 0 5px;
    
    //text no line break
    white-space: nowrap;
`;
const LevelTab = (props) => {

    let backgroundColor;
    switch (props.level) {
        case 1:
            backgroundColor = '#68de7c';
            break;
        case 2:
            backgroundColor = '#f0c33c';
            break;
        case 3:
            backgroundColor = '#ff8085';
            break;
    }

    return (
        <Wrapper backgroundColor={backgroundColor}>
            Level {props.level}
        </Wrapper>
    );

}

export default LevelTab;