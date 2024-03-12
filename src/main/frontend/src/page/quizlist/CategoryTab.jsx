import styled from "styled-components";
import {CategoryColors} from "../../component/ui/color/Colors";

const Wrapper = styled.span`
    display: inline-block;
    padding: 4px;
    border-radius: 5px;
    background-color: ${props => props.backgroundColor};
    font-size: 0.8em;
    color: white;
    font-weight: bold;
`;
const CategoryTab = (props) => {

    const backgroundColor = CategoryColors[props.category] || CategoryColors.COMMON;

    return (
        <Wrapper backgroundColor={backgroundColor}>
            {props.category}
        </Wrapper>
    );
}

export default CategoryTab;