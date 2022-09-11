
import './App.css';
import Carts from './components/Cart/Carts';
import Navbar from './components/Layout/Navbar';
import Products from './components/Product/Products';
import {useDispatch,useSelector} from "react-redux"
import {useEffect} from 'react'


function App() {
  
  const showCart = useSelector((state)=>{
    return state.ui.cartVisible
  })

  const cart = useSelector((state)=>{
    return state.cart
  })

  useEffect(()=>{
    const sendCartData = async ()=>{
      const response = await fetch('https://food-cart-app-3e126-default-rtdb.firebaseio.com/cart.json',{
        method : 'PUT',
        body : JSON.stringify(cart)
      })     
    }
    sendCartData().catch((err)=>{
      console.log(err)
    })
  },[cart])


  return (
    <div className="App">
      <Navbar />
        {showCart && <Carts />}
      <Products />
    </div>
  );
}

export default App;
