import './Category.css';

const Category = ({category, changeLocation}) => {
    return (
        <li onClick={changeLocation} className="Category-Item">{category}</li>
    )
}

export default Category;