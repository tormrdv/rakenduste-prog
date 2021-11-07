import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/"> 
                <img className="logo" src="Gambler.png" alt="home"/> 
            </Link> 

            <div className="links">
                <Link to="/cart"> 
                    <img className="cart" src="shopping-cart-empty-side-view.svg" alt="cart"/> 
                </Link> 
                <Link to="additem">
                    <img className="additem" src="plus-circle-outline.svg" alt="add item"/>
                </Link>
                <Link to="addcategory">
                    <img className="addcategory" src="shape-outline.svg" alt="add category"/>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;