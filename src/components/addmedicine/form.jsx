"use client";
import React, { useState } from 'react';

const AddMedicineForms = () => {
  const [formData, setFormData] = useState({
    name: '',
    group: '',
    description: '',
    manufacturingDate: '',
    expirationDate: '',
    quantityInStock: '',
    shelfNumber: '',
    supplier: '',
    barcodeEAN_13: '',
    barcodeUPC_A: '',
    imageUrl: ''
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/addmedicine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Medicine added successfully!');
        setResponseType('success');
        setFormData({name: '',group: '',description: '',manufacturingDate: '',expirationDate: '',quantityInStock: '',shelfNumber: '',supplier: '',barcodeEAN_13: '',barcodeUPC_A: '',imageUrl: ''});
      } else {
        setResponseMessage(result.error || 'Failed to add medicine');
        setResponseType('error');
      }
    } catch (error) {
      setResponseMessage('There was an error in submitting the form.');
      setResponseType('error');
    }
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-mono mb-6">Medicine Addition Form</h3>
        {responseMessage && (
          <div className={`p-4 mb-4 text-sm rounded ${responseType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {responseMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name of Medicine"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="group"
              value={formData.group}
              onChange={handleChange}
              placeholder="Group of Medicine"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description and Usage"
              rows="4"
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
<label htmlFor="manufacturingDate" className="text-gray-500">Manufacturing date of drug</label>
<input
  type="date"
  id="manufacturingDate"
  name="manufacturingDate"
  value={formData.manufacturingDate}
  onChange={handleChange}
  required
  className="w-full p-2 border border-gray-300 rounded"
/>

<label htmlFor="expirationDate" className="text-gray-500">Expiring date of drug</label>
<input
  type="date"
  id="expirationDate"
  name="expirationDate"
  value={formData.expirationDate}
  onChange={handleChange}
  required
  className="w-full p-2 border border-gray-300 rounded"
/>
            <input
              type="number"
              name="quantityInStock"
              value={formData.quantityInStock}
              onChange={handleChange}
              placeholder="Quantity in Stock"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="shelfNumber"
              value={formData.shelfNumber}
              onChange={handleChange}
              placeholder="Shelf Number"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              placeholder="Supplier"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="barcodeEAN_13"
              value={formData.barcodeEAN_13}
              onChange={handleChange}
              placeholder="Barcode EAN-13"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="barcodeUPC_A"
              value={formData.barcodeUPC_A}
              onChange={handleChange}
              placeholder="Barcode UPC-A"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedicineForms;
