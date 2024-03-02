import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import NotFound from "./page/NotFound";
import QuizPage from "./page/QuizPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/quiz" element={<QuizPage/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;