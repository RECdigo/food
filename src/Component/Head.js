import React, { useState } from 'react'
import './Head.css'
import Logo from '../Image/logo.png'
import LoginImg from '../Image/login.jpg'
import Cart from '../Image/VerticalNav/Cart.png'
import { useCart } from './CartProvider' 
import { Link } from "react-router-dom";

function Head() {

  const { cartItems, handleClick, increaseQuantity, decreaseQuantity, 
    removeItem, calculateTotal, calculateTotalQuantity } = useCart();

    const [list, setList] = useState(false)
    
    const toggleList = () => {

      setList(!list)

    }


  return (
    <div className='header'>
      <div className='logo'><Link to="/food"><img className="logoImg" src={Logo} alt="logoImage"/></Link></div>
     
      <div className='center'>
        <li className="centerOpt">Menu</li>
        <li className="centerOpt">Sale</li>
        <li className="centerOpt">Contacts</li>
        <li className="centerOpt">About us</li>
      </div>
      <div className='corner'>
        <div className='logintxt'>
          <img className="loginImg" src={LoginImg} alt="login" />
          <div>Cabinet</div>          
        </div>
        <a href="#section4">
        <div className='cartCorner' >         
          <img className='headCart'src={Cart} />
          <div className="cartCont">{calculateTotalQuantity(cartItems)}</div>          
        </div>
        </a>      
      </div>  

      <div className='headerActive'>        
          <button className='listBtn' onClick={toggleList}>
            <div className='iconList'></div>
            <div className='iconList'></div>
            <div className='iconList'></div>
          </button>
            <div className='list' style={list ? 
                    { height: 'auto'}:{display:'none'}}>
              <div className="listDiv">
                <div  className="xBtn" onClick={toggleList} >X</div>
              </div>
              <li className="centerOpt">Menu</li>
              <li className="centerOpt">Sale</li>
              <li className="centerOpt">Contacts</li>
              <li className="centerOpt">About us</li>
              <li className="centerOpt">Cabinet</li>
              <li className="centerOpt">Cart</li>        
            </div>
      </div>
      

    </div>
    
  )
}

export default Head
