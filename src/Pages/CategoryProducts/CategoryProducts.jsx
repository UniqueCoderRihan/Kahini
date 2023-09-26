import { useLocation } from "react-router-dom";

const CategoryProducts = () => {
    const location = useLocation();
    const categoryInfo = location.state?.category;
    console.log(categoryInfo);
    return (
        <div>
            <p>This is All about on this route  {categoryInfo.name}</p>
        </div>
    );
};

export default CategoryProducts;