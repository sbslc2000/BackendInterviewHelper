import axios from 'axios';

const HOST = 'http://localhost:8080';

//get quiz in synchronizing way
export const getQuiz = async (level) => {
    const response = await axios.get(`${HOST}/api/quiz?level=${level}`);
    return response.data;
}

export const submitAnswer = async (id, answer) => {
    const response = await axios.post(`${HOST}/api/analysis`, {
        quizId: id,
        answer: answer
    });

    return response.data;
};
