import {Link} from 'react-router-dom'

const CategoryCard = ({category}) => {
    const handleClickCategory = ()=>{
        
    }

    return (
        <Link to='category-products' state={{category}} className="relative overflow-hidden bg-white shadow-md rounded-lg w-25">
            <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
        </Link>
    );
};

export default CategoryCard;