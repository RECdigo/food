import React, { useState } from "react";
import './CardInf.css'

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCVC] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCVCChange = (e) => {
    setCVC(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add validation logic here before submitting the form
    if (cardNumber && expirationDate && cvc) {
      console.log("Card Number:", cardNumber);
      console.log("Expiration Date:", expirationDate);
      console.log("CVC:", cvc);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label><br/>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="16"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="expirationDate">Expiration Date</label><br/>
        <input
          type="text"
          id="expirationDate"
          value={expirationDate}
          onChange={handleExpirationDateChange}
          placeholder="MM/YY"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cvc">CVC</label><br/>   
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={handleCVCChange}
          maxLength="3"
          placeholder="123"
          required
        />
      </div>

     
    </form>
  );
};

export default CreditCardForm;
