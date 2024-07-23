'use client'

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import './page.css'

const useForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    conform: ''
  });
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    if (formData.password !== formData.conform) {
      setError('Passwords do not match');
      return false;
    }
    setError('');
    return true;
  };

  const submit = async (event: FormEvent<HTMLFormElement>, router: ReturnType<typeof useRouter>) => {
    event.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch('http://127.0.0.1:8001/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          password2: formData.conform,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Some error occurred');
        return;
      }

      const data = await response.json();
      if (data.token) {
        router.push('/LoginPopup');
      } else {
        setError('Registration successfull');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    }
  };

  return { formData, handleChange, error, submit };
};

const Register = () => {
  const { formData, handleChange, error, submit } = useForm();
  const router = useRouter();

  return (
    <div>
     
      <form className='register' onSubmit={(e) => submit(e, router)}>
        <img className='image' src='https://cdn2.downdetector.com/static/uploads/logo/OLX-v1b-small-RGB.png'/>
        <p style={{textAlign:"center"}}><strong>Register</strong></p>
        <div>
          <label htmlFor="username"></label>
          <input
          className='input'
          placeholder='username'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
          className='input'
          placeholder='email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            className='input'
            placeholder='password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="conform"></label>
          <input
          className='input'
          placeholder='conform password'
            type="password"
            id="conform"
            name="conform"
            value={formData.conform}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <Button  className='btn'  type="submit">Register</Button> 
       {/* <Link href='/LoginPopup'> <p style={{float:"left",color:"green",textDecoration:"none"}}>login</p></Link> */}
      </form>
    </div>
  );
};

export default Register;
