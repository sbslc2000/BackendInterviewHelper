import PageWrapper from "../../component/ui/PageWrapper";
import {NavigateButtonList} from "../../component/ui/item/NavigateButtonList";
import {NavigateButton} from "../../component/ui/item/NavigateButton";
import {useEffect, useState} from "react";
import {getCategories} from "../../api/quiz";
import LoadingComponent from "../quiz/LoadingComponent";
import {useNavigate} from "react-router-dom";
import BackButton from "../../component/ui/BackButton";
import {CategoryColors} from "../../component/ui/color/Colors";

const CategorySelectPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then(data => {
            setIsLoading(false);
            setCategories(data);
            console.log(data);
        });
    }, []);

    if (isLoading) return <LoadingComponent/>;

    return (
        <PageWrapper>
            <h1>카테고리 선택</h1>
            <NavigateButtonList>
                {categories.map((category, index) =>
                    <NavigateButton key={index}
                                    onClick={() => navigate(`/quiz?category=${category}`)}
                                    backgroundColor={CategoryColors[category]}>
                        {category}
                    </NavigateButton>
                )}
            </NavigateButtonList>
            <BackButton/>
        </PageWrapper>
    );
}

export default CategorySelectPage;