import {useEffect, useState} from "react";
import {getQuiz} from "../api/quiz";
import PageWrapper from "../component/ui/PageWrapper";
import styled from "styled-components";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import AnalysisResult from "./quiz/AnalysisResult";

const AnswerTextArea = styled.textarea`
    width: 600px;
    height: 200px;
    margin: 20px 0;
    resize: none;
`;

const AnswerButton = styled.button`

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

const SubmitButton = styled.button`
    background-color: #68de7c;
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 40px;
    
    &:hover {
        cursor: pointer;
        background-color: #68de7ccc;
    }
`;


const BackButton = styled.button`
    
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

/**
 * url로부터 level을 가져오는 함수입니다.
 * level이 없을 경우 메인 페이지로 이동합니다.
 */
const getLevel = () => {
    const level = new URLSearchParams(window.location.search).get('level');
    if (level === null) {
        window.location.href = '/';
    }
    console.log(level);

    return level;
}

const QuizPage = () => {

    const [quiz, setQuiz] = useState({});
    const [answer, setAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const init = async () => {
        //set quiz
        const quiz = await getQuiz(getLevel());
        setQuiz(quiz);
    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        setAnswer(transcript);
    }, [transcript]);

    const onAnswerChange = (e) => {
        setAnswer(e.target.value);
    }

    const toggleAnswerButton = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            SpeechRecognition.startListening({
                continuous: true,
                language: 'ko-KR'
            })
        }
    }

    const onSubmit = async () => {
        setSubmitted(true);
    }

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <PageWrapper>
            <h1 style={{width:600}}>Q.{quiz.id} {quiz.question}</h1>
            <AnswerButton
                listening={listening}
                onClick={toggleAnswerButton}
            >
                {listening ? "중단하기" : "답변하기"}
            </AnswerButton>
            <AnswerTextArea
                onChange={onAnswerChange}
                value={answer}
            ></AnswerTextArea>
            <SubmitButton onClick={onSubmit}>제출하기</SubmitButton>
            {submitted &&
                <AnalysisResult
                    quizId={quiz.id}
                    answer={answer}
                />
            }
            <BackButton onClick={() => window.location.href = '/'}>
                처음으로
            </BackButton>
        </PageWrapper>
    );
}

export default QuizPage;