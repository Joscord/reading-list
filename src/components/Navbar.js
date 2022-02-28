import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';


export default function Navbar() {
  const { logout } = useLogout();
  const history = useHistory();
  // Destructuramos el usuario
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    history.push('/login');

  }
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        {user && <li><Link to="/">Home</Link></li>}
        {!user && (
        <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </>
        )}
        {user && <li onClick={handleClick}>Logout</li>}
      </ul>
    </nav>
  )
}
