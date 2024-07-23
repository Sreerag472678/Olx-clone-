

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '../Store/user-login';
import Link from 'next/link';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const logout = useStore((state) => state.logout);

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
      <h1 style={{ textAlign: 'center' }}>Profile</h1>
      {user ? (
        <div>
          <p style={{ textAlign: 'center' }}><strong>Username:</strong> {user.username}</p>
          <p style={{ textAlign: 'center' }}><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>No user data available</p>
      )}
      <button style={{ display: 'block', margin: '0 auto' }} onClick={handleLogout}>Logout</button>
      <Link href='/' style={{textAlign:'center'}}>Home</Link>
    </div>
  );
};

export default Profile;
