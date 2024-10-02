import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header';
import Cart from './Components/Cart/cart';

function App() {

  const[cartItems, setCartItem]= useState([
    { id: 1, name: "Samsung Galaxy S8", price: 399.99, count: 1 ,imgPath:"https://www.course-api.com/images/cart/phone-1.png"},
    { id: 2, name: "Google Pixel", price: 499.99, count: 1,imgPath:"https://www.course-api.com/images/cart/phone-2.png" },
    { id: 3, name: "Xioami Redmi Note 2", price: 699.99, count: 1,imgPath:"https://www.course-api.com/images/cart/phone-3.png" },
    { id: 4, name: "Samsung Galaxy S7", price: 599.99, count: 1,imgPath:"https://www.course-api.com/images/cart/phone-4.png" },
  ])
  return (
    <>
      <Header cartItems={cartItems}/>
      <Cart cartItems={cartItems} setCartItem={setCartItem}/>
    </>
  )
}

export default App
