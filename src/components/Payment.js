import React from "react";
import "./Payment.css";

const PaymentDone = () => {
  const billDetails = {
    fullName: "John Doe",
    paymentMethod: "Credit Card",
    billingEmail: "john.doe@example.com",
    phoneNumber: "+1 123 456 7890",
    address: "123 Main Street, Springfield, USA",
  };

  return (
    <div className="payment-done-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
        alt="Payment Successful"
        className="success-image"
      />
      <h2>Payment Successful!</h2>

      <div className="bill-details-box">
        <h3>Bill Details</h3>
        <div className="bill-item"><strong>Full Name:</strong> {billDetails.fullName}</div>
        <div className="bill-item"><strong>Payment Method:</strong> {billDetails.paymentMethod}</div>
        <div className="bill-item"><strong>Billing Email:</strong> {billDetails.billingEmail}</div>
        <div className="bill-item"><strong>Phone Number:</strong> {billDetails.phoneNumber}</div>
        <div className="bill-item"><strong>Address:</strong> {billDetails.address}</div>
      </div>
    </div>
  );
};

export default PaymentDone;
