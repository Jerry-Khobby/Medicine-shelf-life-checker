import React from 'react';
import { FaBell } from 'react-icons/fa';




const InventorySection = () => {
  const inventoryData = [
    {
      medicineName: 'Paracetamol',
      expirationDate: '2024-12-31',
      quantity: '500mg',
      supplier: 'Supplier A',
      received: '2024-01-01',
    },
    {
      medicineName: 'Ibuprofen',
      expirationDate: '2025-05-15',
      quantity: '200mg',
      supplier: 'Supplier B',
      received: '2024-02-20',
    },
    {
      medicineName: 'Ibuprofen',
      expirationDate: '2025-05-15',
      quantity: '200mg',
      supplier: 'Supplier B',
      received: '2024-02-20',
    },
    {
      medicineName: 'Ibuprofen',
      expirationDate: '2025-05-15',
      quantity: '200mg',
      supplier: 'Supplier B',
      received: '2024-02-20',
    },
    {
      medicineName: 'Ibuprofen',
      expirationDate: '2025-05-15',
      quantity: '200mg',
      supplier: 'Supplier B',
      received: '2024-02-20',
    },
    {
      medicineName: 'Ibuprofen',
      expirationDate: '2025-05-15',
      quantity: '200mg',
      supplier: 'Supplier B',
      received: '2024-02-20',
    },
    {
      medicineName: 'Ibuprofen',
      expirationDate: '2025-05-15',
      quantity: '200mg',
      supplier: 'Supplier B',
      received: '2024-02-20',
    },
    {
      medicineName: 'Paracetamol',
      expirationDate: '2024-12-31',
      quantity: '500mg',
      supplier: 'Supplier A',
      received: '2024-01-01',
    },
    {
      medicineName: 'Paracetamol',
      expirationDate: '2024-12-31',
      quantity: '500mg',
      supplier: 'Supplier A',
      received: '2024-01-01',
    },
    {
      medicineName: 'Paracetamol',
      expirationDate: '2024-12-31',
      quantity: '500mg',
      supplier: 'Supplier A',
      received: '2024-01-01',
    },
    // Add more items as needed
  ];
  return (
    <div className="w-full">
      <div className="flex font-bold bg-gray-100 py-2">
        <div className="flex-1 px-4 text-md font-mono font-medium">Medicine Name</div>
        <div className="flex-1 px-4 text-md font-mono font-medium">Expiration Date</div>
        <div className="flex-1 px-4 text-md font-mono font-medium">Quantity in Stock</div>
        <div className="flex-1 px-4 text-md font-mono font-medium hidden sm:flex">Supplier</div>
        <div className="flex-1 px-4 text-md font-mono font-medium hidden md:flex">Received</div>
      </div>
      {inventoryData.map((item, index) => (
        <div className="flex py-2" key={index}>
          <div className="flex-1 px-4 text-md font-sans font-small">{item.medicineName}</div>
          <div className="flex-1 px-4 text-md font-sans font-small">{item.expirationDate}</div>
          <div className="flex-1 px-4 text-md font-sans font-small">{item.quantity}</div>
          <div className="flex-1 px-4 text-md font-sans font-small hidden sm:flex">{item.supplier}</div>
          <div className="flex-1 px-4 text-md font-sans font-small cursor-pointer  hidden md:flex"><FaBell/></div>
        </div>
      ))}
    </div>
  );
}

export default InventorySection;
