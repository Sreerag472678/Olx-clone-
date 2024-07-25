

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '../Store/user-login';
import { Dropdown, Button } from 'react-bootstrap';
import Link from 'next/link';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const logout = useStore((state) => state.logout);
  const username = useStore((state) => state.username);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('jsonwebtoken');
        if (!token) {
          router.push('/');  
          return;
        }

        const response = await fetch('http://localhost:8001/api/profile/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jsonwebtoken');
    logout();  
    router.push('/');  
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* <h1 style={{ textAlign: 'center' }}>Profile</h1> */}
      <Dropdown>
        <Dropdown.Toggle className="btn" id="dropdown-basic">
        {username ? `${username}` : 'Login'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item ><strong>Username:</strong> {user.username}</Dropdown.Item>
          <Dropdown.Item ><strong>Email:</strong> {user.email}</Dropdown.Item>
          <Dropdown.Item ><Button style={{ display: 'block', margin: '0 auto' }} onClick={handleLogout}>Logout</Button></Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Profile;
