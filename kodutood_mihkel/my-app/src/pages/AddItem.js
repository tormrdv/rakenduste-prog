import AddItemForm from "../components/AddItemForm"

function Additem() {
    function itemSubmit(item) {
        //backend paring - API ots, method millega teen
        //fetchime item ja muudame tyybi jsoniks et POSTida
        // (GET PARINGULE POLE VAJA)
        //body annan kaasa
        //headersis ytlen mis tyypi see body on
        fetch('http://localhost:8080/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type':'Application/json'}
        })
        alert("ESE LISATUD")
    }


    // onAddItem kutsutakse v'lja AdditemForm sees props.onAddItem()
    // paremal pool vordusmarki panen kaima ulemise funktsiooni
    return (
        //kutsume valja additemformsist onadditemiga itemsubmiti
        <div>
            <h1>Lisa uus ese</h1>
            <AddItemForm onAddItem={itemSubmit}/>
        </div>
    )
}

export default Additem