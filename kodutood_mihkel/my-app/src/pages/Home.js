import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import CategoryList from '../components/CategoryList';
import { useEffect, useState } from 'react';

function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);
    const [loadedCategories, setLoadedCategories] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            setIsLoading(false)
            setLoadedItems(data)
        })
    },[])

    useEffect(() => {
        fetch('http://localhost:8080/categories').then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            setIsLoading(false)
            setLoadedCategories(data)
        })
    },[])

    

    if(isLoading) {
        return(<div>Laeb...</div>)
    }
    return(
        <div className="list">
            <Link to="additem">
                <button>Lisa uus ese</button>
            </Link>
            <Link to='addcategory'>
                <button>Lisa uus kategooria</button>    
            </Link>
            <br/>
            <label>DATA</label><br/>
            <ItemList items={loadedItems}/>
            <label>...</label> <br/>
            <CategoryList categories={loadedCategories}/> 
            
        </div>
    )
}

export default Home;