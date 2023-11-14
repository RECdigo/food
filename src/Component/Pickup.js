import React, { useState } from 'react';

function Pickup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pickupTime: '',
    promoCode: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    for (const key in data) {
      if (!data[key] && key !== 'promoCode') {
        errors[key] = 'Field is required';
      }
    }
    return errors;
  };

  return (
    <>
      <div className="descriptionTitle">Pickup Order</div>
      <form onSubmit={handleSubmit}>
        <label className="pickupForm" htmlFor="name">
          Name:
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="phone">Telephone Number:</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label htmlFor="address">Restaurant Address:</label>
        <br />
        <textarea
          id="address"
          name="address"
          rows="2"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        {errors.address && <p className="error">{errors.address}</p>}

        <label htmlFor="pickupTime">Pick-up Time:</label>
        <br />
        <input
          type="datetime-local"
          id="pickupTime"
          name="pickupTime"
          value={formData.pickupTime}
          onChange={handleChange}
          required
        />
        <br />
        {errors.pickupTime && <p className="error">{errors.pickupTime}</p>}

        <label htmlFor="promoCode">Promo Code:</label>
        <br />
        <input
          type="text"
          id="promoCode"
          name="promoCode"
          value={formData.promoCode}
          onChange={handleChange}
        />
        <br />
       

      </form>
    </>
  );
}

export default Pickup;
