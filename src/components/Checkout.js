import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // ✅ Import for v5 routing
import './Checkout.css';

const Checkout = () => {
  const history = useHistory(); // ✅ Initialize useHistory
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    postalCode: '',
  });
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('savedCard');

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
      setIsReturningUser(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePlaceOrder = () => {
    if (!isReturningUser) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }

    // ✅ Redirect to payment success page
    history.push('/payment');
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  return (
    <div className="checkout-page">
      {/* Address Section */}
      <div className="section address-section">
        <h2>Delivery Address</h2>
        {isReturningUser && userData.name && userData.address ? (
          <div className="saved-address">
            <p><strong>{userData.name}</strong></p>
            <p>
              {userData.address}
              {userData.postalCode ? `, ${userData.postalCode}` : ''}
            </p>
          </div>
        ) : (
          <div className="address-form">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Full Name"
                value={userData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
                value={userData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Enter Postal Code"
                value={userData.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        )}
      </div>

      {/* Payment Section */}
      <div className="section payment-section">
        <h2>Payment Method</h2>
        <div className="balance-section">
          <input type="text" placeholder="Enter Code" className="code-input" />
          <button className="apply-btn">Apply</button>
        </div>

        {/* Saved Card */}
        <div className="payment-option">
          <input
            type="radio"
            id="savedCard"
            name="payment"
            value="savedCard"
            checked={selectedPayment === 'savedCard'}
            onChange={handlePaymentChange}
          />
          <label htmlFor="savedCard" className="saved-card">
            <span className="visa">Visa</span> ending in 1541 - Other
          </label>
        </div>

        <h3>Another payment method</h3>
        <div className="payment-options">
          {[
            { id: 'card', label: 'Credit or Debit Card' },
            { id: 'netBanking', label: 'Net Banking' },
            { id: 'upi', label: 'Other UPI Apps' },
            { id: 'emi', label: 'EMI' },
            { id: 'cod', label: 'Cash on Delivery/Pay on Delivery' },
          ].map((option) => (
            <div className="payment-option" key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="payment"
                value={option.id}
                checked={selectedPayment === option.id}
                onChange={handlePaymentChange}
              />
              <label htmlFor={option.id}>{option.label}</label>
              {option.id === 'netBanking' && selectedPayment === 'netBanking' && (
                <select className="net-banking-dropdown">
                  <option>Choose an Option</option>
                  <option>SBI</option>
                  <option>HDFC</option>
                </select>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Place Order Button */}
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Your Order
      </button>
    </div>
  );
};

export default Checkout;
