import styled from "styled-components";
import {useEffect, useState} from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
`;

const LoadingComponent = (props) => {
    const [dot, setDot] = useState('');

    const text = props.text || '로딩 중';

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
            <h1>{text}{dot}</h1>
        </Wrapper>
    );
};

export default LoadingComponent;