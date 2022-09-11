import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {uiActions} from '../../store/ui-Slice'


function CartButton(props) {

    const totalItems = useSelector((state)=>{
       return state.cart.totalQuantity
    })

    const dispatch = useDispatch()
    const CartHandler = () =>{
        dispatch(uiActions.toggleCart())
    }
  return (
    <button onClick={CartHandler}>
      <span><i class="fa-solid fa-cart-plus"></i></span>
      <span>My Cart</span>
      <span>{totalItems}</span>
    </button>
  )
}

export default CartButton
