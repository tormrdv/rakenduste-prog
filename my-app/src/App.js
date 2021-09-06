
import { Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/'>
        <Cart />
      </Route>
      <Route path='/'>
        <div></div>
      </Route>
    </div>
  );
}

export default App;
