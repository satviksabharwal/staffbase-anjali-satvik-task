import React from 'react';
import { Link } from 'react-router-dom'; 
import "./navbar.css";

function Navbar() {
  return (
  <div className='navbar'>
    <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <h3>Logo</h3>
            </Link>
            <ul className="nav-list">
            <Link to="/" style={{textDecoration: 'none', color: 'white', marginRight: '20px', textAlign: 'center', fontWeight: 700, justifyContent: 'center'}}>
            <li>User List</li>
            </Link>
            <Link to="/createiou" style={{textDecoration: 'none', color: 'white', marginRight: '20px', textAlign: 'center', fontWeight: 700, justifyContent: 'center'}}>
            <li>IOU Creation</li>
            </Link>
            <Link to="/createuser" style={{textDecoration: 'none', color: 'white', marginRight: '20px', textAlign: 'center', fontWeight: 700, justifyContent: 'center'}}>
            <li>User Creation</li>
            </Link>
            <Link to="/user" style={{textDecoration: 'none', color: 'white', marginRight: '20px', textAlign: 'center', fontWeight: 700, justifyContent: 'center'}}>
            <li>Individual User</li>
            </Link>
            </ul>
  </div>
  );
}

export default Navbar;

