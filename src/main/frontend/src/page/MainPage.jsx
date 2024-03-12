import PageWrapper from "../component/ui/PageWrapper";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {NavigateButtonList} from "../component/ui/item/NavigateButtonList";
import {NavigateButton} from "../component/ui/item/NavigateButton";
import {Colors} from "../component/ui/color/Colors";

/**
 * 초기화면을 구성하는 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
const MainPage = () => {

    //navigator
    const navigate = useNavigate();

    //when item clicked, go to the quiz page
    const onItemClick = (level) => {
        navigate(`/quiz?level=${level}`);
    }

    return (
        <PageWrapper>
            <h1>백엔드 면접 대비 헬퍼</h1>
            <NavigateButtonList>
                <NavigateButton
                    backgroundColor={Colors.GREEN}
                    onClick={() => navigate('/levels')}
                >
                    난이도 별로 풀기
                </NavigateButton>
                <NavigateButton
                    backgroundColor={Colors.YELLOW}
                    onClick={() => navigate('/categories')}
                >
                    주제 별로 풀기
                </NavigateButton>
                <NavigateButton
                    backgroundColor={Colors.BLUE}
                    onClick={() => onItemClick(Math.floor(Math.random() * 3) + 1)}
                >
                    랜덤으로 풀기
                </NavigateButton>
                <NavigateButton>인성면접</NavigateButton>
                <NavigateButton
                    backgroundColor={Colors.GRAY}
                    onClick={() => navigate('/quizs')}
                >
                    모든 문제 보기
                </NavigateButton>
            </NavigateButtonList>
        </PageWrapper>
    );
}

export default MainPage;