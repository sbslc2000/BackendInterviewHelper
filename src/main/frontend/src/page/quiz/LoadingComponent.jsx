import styled from "styled-components";
import {useEffect, useState} from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
`;

const LoadingComponent = () => {
    const [dot, setDot] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDot(prevDot => {
                switch (prevDot) {
                    case '':
                        return '.';
                    case '.':
                        return '..';
                    case '..':
                        return '...';
                    default:
                        return '';
                }
            });
        }, 500); // 0.5초 간격으로 마침표 변경

        // 컴포넌트가 언마운트될 때 인터벌 제거
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Wrapper>
            <h1>분석 중입니다{dot}</h1>
        </Wrapper>
    );
};

export default LoadingComponent;