'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import './page.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

interface Parameter {
  params: { categoryId: string, postid: string }
}

interface FormDataState {
  Brand: string;
  Discription: string;
  Addtitle: string;
  Year: string;
  Price: string;
  Phone: string;
  Location: string;
  State: string;
  District: string;
  Image: File | null;
}

export default function AddProduct({params}: Parameter) {
  const [formData, setFormData] = useState<FormDataState>({
    Brand: '',
    Discription: '',
    Addtitle: '',
    Year: '',
    Price: '',
    Phone: '',
    Location: '',
    State: '',
    District: '',
    Image: null,
  });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === 'file' ? (files ? files[0] : null) : value,
  //   }));
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
  
    if (type === 'file' && files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],  
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const accessToken = localStorage.getItem('jsonwebtoken');
    if (!accessToken) {
      console.log('Access Token is missing');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('Brand', formData.Brand);
    formDataToSend.append('Discription', formData.Discription);
    formDataToSend.append('Addtitle', formData.Addtitle);
    formDataToSend.append('Year', formData.Year);
    formDataToSend.append('Price', formData.Price);
    formDataToSend.append('Phone', formData.Phone);
    formDataToSend.append('Location', formData.Location);
    formDataToSend.append('State', formData.State);
    formDataToSend.append('District', formData.District);
    if (formData.Image) {
      formDataToSend.append('Image', formData.Image);
    }

    try {
      const response = await fetch('http://127.0.0.1:8001/api/upload/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Product added successfully');
        setFormData({
          Brand: '',
          Discription: '',
          Addtitle: '',
          Year: '',
          Price: '',
          Phone: '',
          Location: '',
          State: '',
          District: '',
          Image: null,
        });
      } else {
        const result = await response.json();
        alert(`Failed to add product: ${result.detail || 'Unknown error occurred'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product');
    }
  };

  return (  
    <div>
      <h3>POST YOUR AD</h3>
      <div className='sel2'>
        <h5>SELECTED CATEGORY</h5><br />
        <div>
          <Link href='' style={{ color: 'black', textDecoration: 'none' }}>{params.categoryId}/ </Link>
          <Link href='' style={{ color: 'black', textDecoration: 'none' }}>{params.postid}/ </Link>
          <Link href='/Category' style={{ color: 'black', textDecoration: 'none' }}><strong>Change</strong></Link>
        </div>
      </div>
      <div className='post'>
        <form onSubmit={handleSubmit}>
          <label>
            Brand:
            <input
              className='brand'
              type="text"
              placeholder='Brand'
              name="Brand"
              value={formData.Brand}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              className='brand'
              placeholder='Description'
              type="text"
              name="Discription"
              value={formData.Discription}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Add Title:
            <input
              className='brand'
              placeholder=' Add Title'
              type="text"
              name="Addtitle"
              value={formData.Addtitle}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Year:
            <input
              className='brand'
              placeholder='Year'
              type="text"
              name="Year"
              value={formData.Year}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              className='brand'
              placeholder='Price'
              type="text"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              className='brand'
              placeholder='Phone'
              type="text"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Location:
            <input
              className='brand'
              placeholder='Location'
              type="text"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            State:
            <input
              className='brand'
              placeholder='State'
              type="text"
              name="State"
              value={formData.State}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            District:
            <input
              className='brand'
              placeholder='District'
              type="text"
              name="District"
              value={formData.District}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Image:
            <input
              className='brand'
              placeholder='Image'
              type="file"
              name="Image"
              onChange={handleChange}
            />
          </label>
          <Button className='btn' type="submit">Add Product</Button>
        </form>
      </div>
    </div>
  );
}

