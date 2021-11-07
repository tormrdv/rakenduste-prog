
import { Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';
import AddCategory from './pages/AddCategory';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/additem'>
        <AddItem />
      </Route>
      <Route path='/addcategory'>
        <AddCategory />
      </Route>
    </div>
  );
}

export default App;
