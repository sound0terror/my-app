import Category from "./Category/Category";

const Categories = ({categories, changeLocation}) => {
    return (
        <ul className="Category">
            <Category changeLocation={() => {changeLocation('')}} category="All"/>
            {categories.map(category => <Category key={category.id} changeLocation={() => {changeLocation(category.id)}} category={category.name}/>)}
        </ul>
    )
}

export default Categories;