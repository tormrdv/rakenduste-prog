import AddCategoryForm from "../components/AddCategoryForm"
//import '../components/Forms.css'
function AddItem(){

    function CategorySubmit(categoryName, categoryType) {
        fetch('http://localhost:8080/category', {
            method: 'POST',
            body: JSON.stringify(categoryName, categoryType),
            headers: {'Content-Type':'Application/json'}
        })
        alert("KATEGOORIA LISATUD")

    }

    return (
        //Addcategoryform
        <div className="forms">
            <h2>Lisa kategooria</h2>
            <AddCategoryForm onAddItem={CategorySubmit}/>
        </div>
    )
}

export default AddItem