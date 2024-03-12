import PageWrapper from "../component/ui/PageWrapper";
import BackButton from "../component/ui/BackButton";

/**
 * 잘못된 경로로 접근했을 때 보여줄 페이지를 구성하는 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
const NotFound = () => {
    return (
        <PageWrapper>
            <h1>404</h1>
            <p>Page not found</p>
            <BackButton />
        </PageWrapper>
    );
}

export default NotFound;