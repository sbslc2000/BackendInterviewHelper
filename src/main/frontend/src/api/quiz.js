import axios from 'axios';

const HOST = 'https://backend-interview.shop';

//get quiz in synchronizing way
export const getRandomQuizByLevel = async (level) => {
    const response = await axios.get(`${HOST}/api/quiz?level=${level}`);
    return response.data;
}

export const getRandomQuizByCategory = async (category) => {
    const response = await axios.get(`${HOST}/api/quiz?category=${category}`);
    return response.data;
}

export const getQuiz = async (id) => {
    const response = await axios.get(`${HOST}/api/quiz/${id}`);
    return response.data;
}

export const submitAnswer = async (id, answer) => {
    const response = await axios.post(`${HOST}/api/analysis`, {
        quizId: id,
        answer: answer
    });

    return response.data;
};

export const getQuizList = async () => {
    const response = await axios.get(`${HOST}/api/quiz/all`);
    return response.data;
}

export const getCategories = async () => {
    const response = await axios.get(`${HOST}/api/categories`);
    return response.data;
}