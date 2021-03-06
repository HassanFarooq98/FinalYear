import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='/'>
          <i className='fas fa-code'></i> WAST Academy
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles'>Developers</a>
        </li>
        <li>
          <a href='register'>Register</a>
        </li>
        <li>
          <a href='login'>Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
