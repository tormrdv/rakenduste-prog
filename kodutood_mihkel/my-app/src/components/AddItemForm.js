import './AddItemForm.css'
import { useRef } from 'react'

function AddItemForm(props) {
    //kasutame ref et puuda muutujad formsist
    const nameRef = useRef()
    const priceRef = useRef()
    const categoryRef = useRef()

    //formsubmit, votame e ja ei lase refresh teha
    function formSubmit(e) {
        e.preventDefault()
        console.log(nameRef.current.value)
        //muutujad current value jaoks
        const nameValue = nameRef.current.value
        const priceValue = priceRef.current.value
        const categoryValue = categoryRef.current.value

        const item = {
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        //saadame itemi
        props.onAddItem(item)
        
    }

    return(
        <form onSubmit={formSubmit}>
            <label>Eseme nimi</label><br />
            <input type="text" required ref={nameRef} /><br />
            <label>Eseme hind</label><br />
            <input type="text" required ref={priceRef} /><br />
            <label>Eseme kategooria</label><br />
            <input type="text" required ref={categoryRef} /><br />
            <button>Lisa ese</button>
        </form>
    )
}

export default AddItemForm