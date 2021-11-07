import Category from "./Category";


//            <select ref={props.categoryRef}>

function CategoryList(props){
    return(
        <div>
            {props.categories.map(category => (
                <Category 
                key = {category.id}
                name = {category.name}
                type = {category.type}
                />    
            ))}
    </div>
    )
    
}

export default CategoryList