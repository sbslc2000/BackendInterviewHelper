import styled from "styled-components";
import CategoryTab from "./CategoryTab";
import LevelTab from "./LevelTab";

const QuizItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    &:hover {
        cursor: pointer;
        background-color: #f0f0f0;
    }
`;

const Question = styled.div`
    padding: 10px;
    width: 100%;
    text-align: left;
    
   
`;

const QuizItem = (props) => {

    const onClick = () => {
        window.location.href = `/quiz?quizId=${props.id}`;
    }

    return (
        <QuizItemWrapper>
            <CategoryTab category = {props.category} />
            <LevelTab level = {props.level} />
            <Question onClick={onClick}>
                {props.question}
            </Question>

        </QuizItemWrapper>
);
}

export default QuizItem;