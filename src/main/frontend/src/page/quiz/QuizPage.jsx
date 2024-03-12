import {useEffect, useState} from "react";
import {getQuiz, getRandomQuizByCategory, getRandomQuizByLevel} from "../../api/quiz";
import PageWrapper from "../../component/ui/PageWrapper";
import styled from "styled-components";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import AnalysisResult from "./AnalysisResult";
import VoiceRecording from "./VoiceRecording";
import BackButton from "../../component/ui/BackButton";

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

/**
 * url로부터 category를 가져오는 함수입니다.
 */
const getCategory = () => {
    const category = new URLSearchParams(window.location.search).get('category');
    console.log(category);
    return category;

}

/**
 * url로부터 level을 가져오는 함수입니다.
 */
const getLevel = () => {
    const level = new URLSearchParams(window.location.search).get('level');
    console.log(level);
    return level;
}

const getQuizId = () => {
    const quizId = new URLSearchParams(window.location.search).get('quizId');
    console.log(quizId);
    return quizId;

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

        //category 먼저 조사
        const category = getCategory();
        if (category !== null) {
            const quiz = await getRandomQuizByCategory(category);
            setQuiz(quiz);
            return;
        }

        //이후 레벨 조사
        const level = getLevel();
        if (level !== null) {
            const quiz = await getRandomQuizByLevel(getLevel());
            setQuiz(quiz);
            return;

        }

        //quizId 조사
        const quizId = getQuizId();
        if(quizId !== null) {
            const quiz = await getQuiz(quizId);
            setQuiz(quiz);
            return;
        }

        //go main page
        window.location.href = '/';
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

    //브라우저가 음성인식을 지원하지 않는 경우 처리
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <PageWrapper>
            <h1 style={{width: 600}}>Q.{quiz.id} {quiz.question}</h1>
            <AnswerButton
                listening={listening}
                onClick={toggleAnswerButton}>
                {listening ? "중단하기" : "답변하기 (마이크 권한 필요)"}
            </AnswerButton>
            {listening ? <VoiceRecording/> : null}
            <AnswerTextArea
                onChange={onAnswerChange}
                value={answer}
            />
            <SubmitButton onClick={onSubmit}>제출하기</SubmitButton>
            {submitted &&
                <AnalysisResult
                    quizId={quiz.id}
                    answer={answer}
                />
            }
            <BackButton/>
        </PageWrapper>
    );
}

export default QuizPage;