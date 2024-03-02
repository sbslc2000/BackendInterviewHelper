import PageWrapper from "../component/ui/PageWrapper";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

/**
 * 초기화면을 구성하는 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
const ItemList = styled.ol`
    
    //flex
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    //ui
    border: 1px solid gray;
    padding: 20px;
`;

const Item = styled.li`
    //ui
    width: 600px;
    height: 40px;
    line-height: 40px;
    margin: 10px;
    background-color: ${props => props.backgroundColor};
    border-radius: 15px;
    
    &:hover {
        cursor: pointer;
        //색상을 조금 밝게 만들어줍니다.
        background-color: ${props => props.backgroundColor && props.backgroundColor + 'bb'};
    }
`;

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
            <ItemList>
                <Item
                    backgroundColor="#68de7c"
                    onClick={() => onItemClick(1)}
                >
                    Level 1
                </Item>
                <Item
                    backgroundColor="#f0c33c"
                    onClick={() => onItemClick(2)}
                >
                    Level 2
                </Item>
                <Item backgroundColor="#ff8085"
                        onClick={() => onItemClick(3)}
                >
                    Level 3
                </Item>
                <Item
                    backgroundColor="#72aee6"
                    onClick={() => onItemClick(Math.floor(Math.random() * 3) + 1)}
                >Random</Item>
                <Item>인성면접</Item>
            </ItemList>
        </PageWrapper>
    );
}

export default MainPage;