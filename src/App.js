
import './App.css';
import Carts from './components/Cart/Carts';
import Navbar from './components/Layout/Navbar';
import Products from './components/Product/Products';
import {useDispatch,useSelector} from "react-redux"


function App() {
  
  const showCart = useSelector((state)=>{
    return state.ui.cartVisible
  })


  return (
    <div className="App">
      <Navbar />
        {showCart && <Carts />}
      <Products />
    </div>
  );
}

export default App;
