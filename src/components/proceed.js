import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // ✅ Import useHistory
import './Proceed.css';

const Proceed = () => {
  const [cartItems, setCartItems] = useState([]);
  const history = useHistory(); // ✅ Initialize history

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  const updateQuantity = (index, quantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = quantity;
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleProceed = () => {
    history.push('/checkout'); // ✅ Navigate to Checkout page
  };

  return (
    <div className="proceed-page">
      <h1>Shopping Cart</h1>
      <a href="/cart" className="deselect">Deselect all items</a>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <input type="checkbox" checked readOnly />
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price.toLocaleString()}</p>
                <div className="quantity-control">
                  <button
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button type="button" onClick={() => removeItem(index)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <p>
          Subtotal ({cartItems.length} items): <strong>₹{getTotalPrice()}</strong>
        </p>
        <button className="proceed-btn" onClick={handleProceed}>
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default Proceed;
