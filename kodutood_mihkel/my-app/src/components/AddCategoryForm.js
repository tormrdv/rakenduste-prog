import './AddCategoryForm.css' 
import { useRef } from "react";
import React, { Component } from 'react'

function AddCategoryForm (props) {
    const nameRef = useRef()
    const categoryRef = useRef()

    function formSubmitHandler(e) {
        e.preventDefault()
        //console.log(nameRef.current.value)

        const nameValue = nameRef.current.value
        const categoryValue = categoryRef.current.value

        const category = {
            name: nameValue,
            category: categoryValue
        }
        props.onAddItem(category)
    }

    
    return(
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br/>
            <input type='text' placeholder='nimi' required ref={nameRef}/><br/>
            <label>Kategooria tyyp</label> <br/>
            <select ref={categoryRef}>
                <option key='1' value='BASIC'>BASIC</option>
                <option key='2' value='PREMIUM'>PREMIUM</option>
                <option key='3' value='DELUXE'>DELUXE</option>
            </select>
            <br/>
            <button>Lisa kategooria</button>
        </form>
    )
}

export default AddCategoryForm;