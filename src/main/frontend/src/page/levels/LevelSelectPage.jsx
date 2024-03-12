import PageWrapper from "../../component/ui/PageWrapper";
import {NavigateButtonList} from "../../component/ui/item/NavigateButtonList";
import {NavigateButton} from "../../component/ui/item/NavigateButton";
import {Colors} from "../../component/ui/color/Colors";
import BackButton from "../../component/ui/BackButton";
import {useNavigate} from "react-router-dom";

const LevelSelectPage = () => {

    const navigate = useNavigate();

    const goQuizPage = (level) => {
        navigate(`/quiz?level=${level}`);
    }

    return (
        <PageWrapper>
            <h1>난이도 선택</h1>
            <NavigateButtonList>
                <NavigateButton backgroundColor={Colors.GREEN}
                    onClick={() => goQuizPage(1)}>
                    Level 1
                </NavigateButton>
                <NavigateButton backgroundColor={Colors.YELLOW}
                    onClick={() => goQuizPage(2)}>
                    Level 2
                </NavigateButton>
                <NavigateButton backgroundColor={Colors.RED}
                    onClick={() => goQuizPage(3)}>
                    Level 3
                </NavigateButton>
            </NavigateButtonList>
            <BackButton />
        </PageWrapper>
    )
}

export default LevelSelectPage;