import React, { useState } from 'react'
import './Payment.css'
import CreditCardForm from "./CardInf"
import { useCart } from './CartProvider'
import Pickup from "./Pickup"
import Delivery from "./Delivery"
import { Link } from "react-router-dom";


function OrderForm() {

  const { cartItems, handleClick, increaseQuantity, decreaseQuantity, 
    removeItem, calculateTotal, calculateTotalQuantity, calculateTotalTax,
    calculateTotalTaxTotal, handleSubmit } = useCart();

  const [isCreditCard, setIsCreditCard] = useState(true);
  const [isRestaurant, setIsRestauran] = useState(false);
  const [isOption, setIsOption] = useState(true);


  const toggleCard = () => {
    isOption ? setIsCreditCard(true) :
    setIsCreditCard(!isCreditCard)
    setIsRestauran(false)
  };

  const toggleCardIn = () => {
    setIsCreditCard(false);
    setIsRestauran(!isRestaurant)
  };

  const toggleOption = () => {

    setIsOption(!isOption);
    
    isOption ? setIsCreditCard(false) : setIsCreditCard(true)
    
  };

  

  return (

    
    <div className='paymentForm'>
      
        <div className='PickorDel'>

          <div className='optionPayment'>

            <button className='PickOpt' onClick={toggleOption}
            style={isOption ? 
              {}:
              {background:"black", color:"white", fontSize:"15px", border: "1px solid orange"}}>Pickup</button>
              <button className='deliveryOpt' onClick={toggleOption}
              style={isOption ? 
                {background:"black", color:"white", fontSize:"15px", border: "1px solid orange"}:
                {}}>Delivery</button>
             
          </div>

          {isOption ? <Delivery/>: <Pickup/>}
          

          
        </div>
        <div className='orderList'>

            <div className='orderDetail'>

              <div className='descriptionTitle'>Order List</div>
                  <div className="orderCheck">
                  {cartItems.map((item, index) => (
                    <div key={index} className="orderItens">
                      <div><img src={item.img} className="cartImage" alt="cartImage" /></div>
                      <div className="itemName">{item.name}</div>
                      <div key={index} className="cartItem">{(item.qty * item.price).toFixed(2)}</div>
                    </div>
                    
                    
                  ))}
                  
                  </div>

              <div className='orderTotal'>
                <div className='orderSide'>
                  <div className='type'>{calculateTotalQuantity(cartItems)} items:</div>
                  <div className='totalType'>${calculateTotal(cartItems)}</div> 
                </div>
                <div className='orderSide'>
                  <div className='type'> Tax:</div> 
                  <div className='totalType'>${calculateTotalTax(cartItems)}</div>
                </div>  
                
              </div>
              <div className='orderSide'>
                  <div className='type'><strong>Order Price</strong></div> 
                  <div className='totalType'><strong>${calculateTotalTaxTotal(cartItems)}</strong></div>
                </div>  

          

            </div>  

        </div>
                      
          <div className='cardInf'>           

              <div className='descriptionTitle'>Payment Method</div>

              <div className="cardOnSite">
                
                <div className='checkCont' onClick={toggleCard}>
                  <div className="check" style={isCreditCard ? 
                    {width: "20px",height: "20px",display: "flex", 
                    justifyContent: "center", alignItems: "center", color: "white" }:{width: "20px",height: "20px"}}>
                      {isCreditCard ? "✔":"" }</div>
                  <span className="checkInf" style={isCreditCard ? 
                    {color: "orange"} : {color: "white"}}>Card on Site</span>                 
                
                </div><br/>
                
                {isCreditCard && <CreditCardForm /> }
                
              </div>
              {isOption ? null : (
                <div className="cardOnSite">
                  <div className='checkCont' onClick={toggleCardIn}>
                    <div
                      className="check"
                      style={
                        isRestaurant
                          ? { width: "20px", height: "20px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }
                          : { width: "20px", height: "20px" }
                      }
                    >
                      {isRestaurant ? "✔" : ""}
                    </div>
                    <span
                      className="checkInf"
                      style={isRestaurant ? { color: "orange" } : { color: "white" }
                      }
                    >
                      Pay in the restaurant
                    </span>
                  </div>
                </div>
              )  }              
              
                <div className='paymentBtn'>
                  <Link  to="/food"><button className='back'>BACK TO CARD</button></Link>
                  <button type="submit" className='confirm'><strong>ORDER FOR  ${calculateTotalTaxTotal(cartItems)}</strong></button>
                </div>
          </div>
        
    </div>
  );
                
}

export default OrderForm;
