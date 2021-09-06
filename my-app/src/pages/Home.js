import Item from '../components/Item';


function Home(){
    return(
        <div>
            Tere
            <Item name="phone" price="20" category="mobile"/>
            <Item name="computer" price="200" category="laptop"/>
        </div>
    )
}

export default Home;