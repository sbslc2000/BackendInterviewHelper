//styled-components
import styled from 'styled-components';

/**
 * PageWrapper는 페이지 전체를 감싸는 컴포넌트입니다.
 * 페이지 내 요소를 중앙 정렬하기 위해 사용합니다.
 * @type {IStyledComponent<"web", Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BaseObject>> & BaseObject & BaseObject & {}}
 */
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 40px 20px;
    
    overflow: scroll;
    
    //내부 요소의 크기가 flex에 의해 줄어들지 않고 고정되도록 함
    & > * {
        flex-shrink: 0;
    }
`;

export default PageWrapper;