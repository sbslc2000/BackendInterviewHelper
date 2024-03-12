import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import NotFound from "./page/NotFound";
import QuizPage from "./page/quiz/QuizPage";
import QuizListPage from "./page/quizlist/QuizListPage";
import LevelSelectPage from "./page/levels/LevelSelectPage";
import CategorySelectPage from "./page/category/CategorySelectPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/quiz" element={<QuizPage/>} />
                <Route path="/quizs" element={<QuizListPage/>} />
                <Route path="/levels" element={<LevelSelectPage />} />
                <Route path="/categories" element={<CategorySelectPage />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;