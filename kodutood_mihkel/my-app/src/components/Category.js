function Category(props) {
    return(
        <div>
            <div className="catName">{props.name}</div>
            <div className="catType">{props.type}</div>
        </div>
    )
}

export default Category;