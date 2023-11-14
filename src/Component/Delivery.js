import React, { useState } from 'react';

function Delivery() {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        items: '',
        deliveryDate: '',
        deliveryTime: '',
        specialInstructions: '',
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
      }
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }

  return (
    
    <div>
      <div className='descriptionTitle'>Delivery</div>      
        <form onSubmit={handleSubmit}>
            <label>Name:</label><br />
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required /><br />

            <label>Delivery Address:</label><br />
            <textarea name="address" value={formData.address} onChange={handleInputChange} required /><br />

            <label>Special Instructions:</label><br />
            <textarea name="specialInstructions" value={formData.specialInstructions} onChange={handleInputChange} /><br />


            <label>Phone Number:</label><br />
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required /><br /><br/>                       
            
        </form>
    </div>
    
  )
}

export default Delivery
