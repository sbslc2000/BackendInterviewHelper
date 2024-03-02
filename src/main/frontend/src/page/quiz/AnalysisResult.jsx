import styled from "styled-components";
import {useEffect, useState} from "react";
import {submitAnswer} from "../../api/quiz";
import LoadingComponent from "./LoadingComponent";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
`;

const Review = styled.div`
    background-color: #eee;
    padding: 20px 60px;
    border-radius: 10px;
    width: 600px;
`;

const TailQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const TailQuestionList = styled.ul`
`;

const TailQuestion = styled.li`
    margin: 10px;
`;


const AnalysisResult = ({quizId, answer}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [analysisResult, setAnalysisResult] = useState({});
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await submitAnswer(quizId, answer);
                setAnalysisResult(response);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                if (retryCount < 5) {
                    setRetryCount(retryCount + 1);
                } else {
                    // 5번 재시도 후 실패 처리
                    setIsLoading(false);
                    // 여기서 추가적인 실패 처리 로직을 구현할 수 있습니다.
                }
            }
        };

        fetchData();
    }, [retryCount]); // retryCount가 변경될 때마다 fetchData 함수가 다시 실행됩니다.

    if (isLoading) {
        return (
            <Wrapper>
                <LoadingComponent />
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h1>분석 결과</h1>
            <div>
                <h2>평가</h2>
                <Review>
                    {analysisResult.review}
                </Review>
            </div>
            <div>
                <h2>설명</h2>
                <Review>
                    {analysisResult.exampleAnswer}
                </Review>
            </div>
            <TailQuestionWrapper>
                <h2>꼬리 질문</h2>
                <TailQuestionList>
                    {analysisResult.tailQuestions.map((question, index) => {
                        return (
                            <TailQuestion key={index}>{`질문 ${index + 1} : ${question}`}</TailQuestion>
                        );
                    })}
                </TailQuestionList>
            </TailQuestionWrapper>
        </Wrapper>
    );
}

export default AnalysisResult;