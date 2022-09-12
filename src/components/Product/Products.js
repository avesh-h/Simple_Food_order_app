import React,{useState} from 'react'
import ProductItem from './ProductItem'
import {useEffect} from 'react'
import SearchBar from './SearchBar'
import {useSelector} from 'react-redux'
import '../Product/Products.css'

// const DUMMY_PRODUCTS = [
//     {
//         id: '22',
//         title : 'Chicken Soup'
//     },
//     {
//         id: '21',
//         title : 'Chicken Biryani'
//     },
//     {
//         id: '20',
//         title : 'Chicken Korma'
//     }
// ]

function Products() {

const [products,setProducts] = useState([])  

const getProducts = async (itemName)=>{
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`)
  const data = await response.json();
  // console.log(data.meals)
  setProducts(data.meals)
}  
 


// const [item,setItem] = useState(DUMMY_PRODUCTS)


  return (
    <div className='products-component'>
       <h2>Order Your Fravoite Meal Now</h2> 
       <SearchBar onSearch={getProducts}/>
       <div className='products'>
       {products.map((item)=>{
        return(
            <ProductItem 
            key = {item.idMeal}
            id = {item.idMeal}
            title = {item.strMeal}
            image = {item.strMealThumb}
            /> 
        )
       })}
       </div>
      {/* <ProductItem /> */}
    </div>
  )
}

export default Products
