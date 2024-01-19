import React, { useState, useContext  }from 'react'
import './Menu.css'
import BurgerOne from '../Image/Burgers/One.png'
import BurgerTwo from '../Image/Burgers/Two.png'
import BurgerThree from '../Image/Burgers/Three.png'
import BurgerFour from '../Image/Burgers/Four.png'
import BurgerFive from '../Image/Burgers/Five.png'
import BurgerSix from '../Image/Burgers/Six.png'
import Pepsi from '../Image/DrinksDeserts/Pepsi.png'
import LemonIce from '../Image/DrinksDeserts/LemonIce.png'
import IceTea from '../Image/DrinksDeserts/IceTea.png'
import DesertOne from '../Image/DrinksDeserts/DesertOne.png'
import DesertTwo from '../Image/DrinksDeserts/DesertTwo.png'
import DesertThree from '../Image/DrinksDeserts/DesertThree.png'
import { useCart } from './CartProvider'
import Navbar from './Navbar'
import { Link } from "react-router-dom"

function Menu() { 

  const { cartItems, handleClick, increaseQuantity, decreaseQuantity, 
    removeItem, calculateTotal, calculateTotalQuantity } = useCart();
  

  return (
    <div>

    <Navbar/>
      <div className='menuConteiner'>        
          <div id="section1" className='textType'>Burgers</div>
            <div className='menu'>                    
              <div className="grid-item">
                <img className="imgMenu"src={BurgerOne} alt="menuImage"/>
                <div className='name'>Japan Burguer</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                  <div className='informations'>
                    <div className='price'>from $17.50</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'Japan', price: 17.5, qty: 1, img:BurgerOne})}>Choose</button>
                  </div>
              </div>
              
              <div className="grid-item">
                <img className="imgMenu"src={BurgerTwo} alt='menuImage'/>
                <div className='name'>Australia Burguer</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                  <div className='informations'>
                    <div className='price'>from $13.75</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'Australia', price: 13.75, qty: 1, img:BurgerTwo})}>Choose</button>
                  </div>
              </div>
              <div className="grid-item">
                <img className="imgMenu"src={BurgerThree} alt='menuImage'/>
                <div className='name'>United States Burger</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                  <div className='informations'>
                    <div className='price'>from $29.25</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'United States', price: 29.25, qty: 1, img:BurgerThree})}>Choose</button>
                  </div>
              </div>
              <div className="grid-item">
                <img className="imgMenu"src={BurgerFour} alt='menuImage'/>
                <div className='name'>Brazil Burger</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                  <div className='informations'>
                    <div className='price'>from $35.50</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'Brazil', price: 35.50, qty: 1, img:BurgerFour})}>Choose</button>
                  </div>
              </div>
              <div className="grid-item">
                <img className="imgMenu"src={BurgerFive} alt='menuImage'/>
                <div className='name'>French Burguer</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                
                  <div className='informations'>
                    <div className='price'>from $20.00</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'French', price: 20.00, qty: 1, img:BurgerFive})}>Choose</button>
                  </div>
              </div>
              <div className="grid-item">
                <img className="imgMenu"src={BurgerSix} alt='menuImage'/>
                <div className='name'>German Burger</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                
                  <div className='informations'>
                    <div className='price'>from $15.00</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'German', price: 15.00, qty: 1, img:BurgerSix})}>Choose</button>
                  </div>
              </div>
            </div>
            <div id="section2" className='textType'>Drinks</div>
            <div className='menu'>  
              
              <div className="grid-item">
                <img className="imgMenu"src={Pepsi} alt='menuImage'/>
                <div className='name'>Pepsi</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                
                  <div className='informations'>
                    <div className='price'>from $2.00</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'Pepsi', price: 2.00, qty: 1, img:Pepsi})}>Choose</button>
                  </div>
              </div>
              <div className="grid-item">
                <img className="imgMenu"src={IceTea} alt='menuImage'/>
                <div className='name'>Ice Tea</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                
                  <div className='informations'>
                    <div className='price'>from $1.89</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'Ice Tea', price: 1.89, qty: 1, img:IceTea})}>Choose</button>
                  </div>
              </div>
              <div className="grid-item">
                <img className="imgMenu"src={LemonIce} alt='menuImage'/>
                <div className='name'>Lemon Ice</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                
                  <div className='informations'>
                    <div className='price'>from $2.43</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'LemonIce', price: 2.43, qty: 1, img:LemonIce})}>Choose</button>
                  </div>
              </div>
          </div>

            <div id="section3" className='textType'>Desert</div>
            <div className='menu'> 
              <div className="grid-item">
                <img className="imgMenu"src={DesertOne} alt='menuImage'/>
                <div className='name'>Tart</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                
                  <div className='informations'>
                    <div className='price'>from $8.00</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'Tart', price: 8.00, qty: 1, img:DesertOne})}>Choose</button>
                  </div>
              </div>
              <div className="grid-item">
                <img className="imgMenu"src={DesertTwo} alt='menuImage'/>
                <div className='name'>Pudding</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>
                <div className='description'></div>
                  <div className='informations'>
                    <div className='price'>from $7.00</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'Pudding', price: 7.00, qty: 1, img:DesertTwo})}>Choose</button>
                  </div>
              </div>
              <div className="grid-item">
                <img className="imgMenu"src={DesertThree} alt='menuImage'/>
                <div className='name'>Strawberry Chocolate</div>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   In viverra nisi at volutpat congue. Ut in hendrerit dui,               
                </div>

                
                  <div className='informations'>
                    <div className='price'>from $5.00</div>
                    <button className='btnChoose' onClick={() => handleClick({
                      name: 'Strawberry Chocolate', price: 5.00, qty: 1, img:DesertThree})}>Choose
                    </button>
                  </div>
                
          </div>
            
           
                  
        </div>

        <div className='paymentContainer'>
        <div id="section4" className='textCart'>Your shopping cart:&nbsp;           
              {calculateTotalQuantity(cartItems)} item(s)   
         
        </div>
        <div className='tabName'>
          <span className='item'>Items</span>
          <span className='unitPrice'>Unit Price</span>
          <span className='qty'>Quantity</span>
          <span className='subTotal'>Subtotal</span>
        </div>

        <div className="itemsInf">

          <div className="nameImg">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItemImg">
                <div><img src={item.img} className="cartImage" alt="cartImage" /></div>
                <div className="itemName">{item.name}</div>
              </div>
            ))}
          </div>

          <div className="itemsPrice">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItem">{`${item.price.toFixed(2)}`}</div>
              ))}
          </div>

          <div className="itemsQty">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <div className='btnAddMin'>
                  <button className='btnMin' onClick={() => decreaseQuantity(item.name)}>-</button>
                  {item.qty}
                  <button className='btnAdd' onClick={() => increaseQuantity(item.name)}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="itemsSubtotal">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <div className='btnAddMin'>
                <div>{(item.qty * item.price).toFixed(2) }</div>
                <button className="btnDelete"onClick={() => removeItem(item.name)}>X</button>
                </div>
                </div>
            ))}
          </div>
        </div>

        <div className='total'>
          Total: ${calculateTotal(cartItems)}
        </div>

        <div className='paymentBtn'>
          <button className='payBtn'><Link className='payBtn' to="/food/payment">Payment</Link></button>
        </div>
      
        </div>
    
    </div>

  </div>
   
  )
}

export default Menu

