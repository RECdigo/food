import React,{ useEffect, useContext } from 'react'
import './Navbar.css'
import Burger from '../Image/VerticalNav/Burgers.png'
import Deserts from '../Image/VerticalNav/Deserts.png'
import Drinks from '../Image/VerticalNav/Drinks.png'
import Cart from '../Image/VerticalNav/Cart.png'
import { useCart } from './CartProvider'; 


function Navbar() {

    const { cartItems, handleClick, increaseQuantity, decreaseQuantity, 
        removeItem, calculateTotal, calculateTotalQuantity } = useCart();


  return (
    <div className='container'>
    <nav className='verticalNav'>       
        
        <div className='option'>
        <a href="#section1">
            <img className='verticalNavImg' src={Burger} alt="Burger" />
        </a>
        </div>
        <div className='option'>
        <a href="#section2">
            <img className='verticalNavImg' src={Drinks} alt="Drinks" />
        </a>
        </div>
        <div className='option'>
        <a href="#section3">
            <img className='verticalNavImg' src={Deserts} alt="Deserts" />
        </a>
        </div>
        <div className='option'>
        <a href="#section4">
        <div className='CartNav'>
            <img className='verticalNavImg' src={Cart} alt="Cart" />
            <div>{calculateTotalQuantity(cartItems)} </div>
        </div>
            
            
        </a>
        </div>        
    </nav>    
    </div>
  )
}

export default Navbar
