"use client";
import React,{useState} from 'react'
import { TextField, Button, Grid, Container, Typography } from '@mui/material';


const AddMedicineForms = () => {
  const [formData, setFormData] = useState({
    name: '',
    group: '',
    description: '',
    manufacturingDate: null,
    expirationDate: null,
    quantityInStock: '',
    shelfNumber: '',
    supplier: '',
    barcodeEAN_13: '',
    barcodeUPC_A: '',
    imageUrl: ''
  });

  //handle change 
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleDateChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  // const handle Submit 
  const handleSubmit=()=>{
    e.preventDefault();
    console.log(formData);
  }

  // const handleDate
  return ( 
    <div className='min-h-screen mt-20'>
        <Container className="px-5 lg:px-8 pb-2" maxWidth="sm">
        <h3 className='font-normal font-mono text-xl '>Medicine Addition Forms</h3>
        <form onSubmit={handleSubmit}>
          <Grid>
            
          </Grid>

        </form>
      </Container>

    </div>
   );
}
 
export default AddMedicineForms;