import PageWrapper from "../../component/ui/PageWrapper";
import styled from "styled-components";
import QuizItem from "./QuizItem";
import {useEffect, useState} from "react";
import {getQuizList} from "../../api/quiz";
import LoadingComponent from "../quiz/LoadingComponent";
import BackButton from "../../component/ui/BackButton";


const QuizList = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 700px;
`;


const QuizListPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [quizList, setQuizList] = useState([]);
    useEffect(() => {
        getQuizList().then(data => {
            setIsLoading(false);
            setQuizList(data);
        });
    }, []);

    if (isLoading) return (<LoadingComponent />);

    return (
        <PageWrapper>
            <h1>면접 질문 목록</h1>
            <p>총 개수 : {`${quizList.length}개`}</p>
            <QuizList>
                {quizList.map(quiz => (
                    <QuizItem
                        key={quiz.id}
                        id={quiz.id}
                        level={quiz.level}
                        question={quiz.question}
                        category={quiz.category}
                    />
                ))}
            </QuizList>

            <BackButton />
        </PageWrapper>
    )
}

export default QuizListPage;