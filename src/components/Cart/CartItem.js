import React from 'react'
import {CardBody,Card,Button} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux'
import {cartActions} from '../../store/Cart-slice'

function CartItem(props) {



    const dispatch = useDispatch()
    const {title,id,quantity,image} = props.items
    console.log(props)

  
    const addItemInCart = () =>{
        dispatch(cartActions.addItem({
            id,
            title,
            quantity,
            image
        }))
    }
    const removeItemInCart = ()=>{
        dispatch(cartActions.removeItem(id))
    }

  return (
        <Card 
        style={{width:'100%' ,
         backgroundColor:'#15152e',
         color:'white',
         textAlign : 'center'
            }}> 


            <CardBody>  
            <span><img src={image} style={{width:'auto', height:'120px'}}/></span>
            <h4>Title:{title}</h4> 
            <h5>Meal Code:{id}</h5> 
            <h6>Quantity:{quantity}</h6>
            <button onClick={addItemInCart}>+</button>
            <button onClick={removeItemInCart}>-</button>
            </CardBody>
        </Card>

  )
}

export default CartItem
