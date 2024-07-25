

'use client'

import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '../Store/user-login';
import Profile from '../Profile/page';

const Login = () => {
  const login = useStore((state) => state.login);
  

  
  const [credentials, setCredentials] = useState<{ username?: string, password?: string }>({});
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    const token = localStorage.getItem('jsonwebtoken');
  
    if (!token) {
      setShow(true);
      
    }else{
      return(
     <Profile/>
      )
    }
  }
    
    

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  



  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8001/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const result = await response.json();

      if (response.ok) {
        const token = result.access;
        localStorage.setItem('jsonwebtoken', token);
        login(credentials.username || '');  
        router.push('/');  
        handleClose();  
      } else {
        setError(result.detail || 'An error occurred during login');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <>
      <Button style={{ color: "black" }} variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="olx">OLX Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="username"
            className="input-modal"
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            className="input-modal"
            onChange={handleChange}
            placeholder="Password"
          />
          {error && <p className="text-danger">{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            style={{ backgroundColor: "green" }}
            onClick={handleLogin}
          >
            Submit
          </Button>
          <Link href='/Signup' passHref>
            <h6>Signup</h6>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
