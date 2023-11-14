import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }) {
    
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (value) => {
    
    const itemExistsInCart = cartItems.some((cartItem) => cartItem.name === value.name);

    if (itemExistsInCart) {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.name === value.name) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...value, qty: 1 }]);
    }  
  };

  const increaseQuantity = (name) => {
    const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.name === name) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCart);
  };

  const decreaseQuantity = (name) => {
    const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.name === name) {
          return { ...cartItem, qty: Math.max(cartItem.qty - 1, 1) }; 
        }
        return cartItem;
      });
      setCartItems(updatedCart);
  };

  const removeItem = (name) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.name !== name);
    setCartItems(updatedCart);
  };

  const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.qty * item.price;
    });
    return total.toFixed(2); 
  };

  const calculateTotalTax = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.qty * item.price;
    });
    return (total*0.2).toFixed(2); 
  };

  const calculateTotalTaxTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.qty * item.price;
    });
    return (total+(total*0.2)).toFixed(2); 
  };

  function calculateTotalQuantity(cartItems) {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.qty;
    });
    return totalQuantity;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleClick,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        calculateTotal,
        calculateTotalQuantity,
        calculateTotalTax,
        calculateTotalTaxTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
