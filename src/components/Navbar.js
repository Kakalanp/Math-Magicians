import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pages = [
    {
      path: '',
      name: 'Home',
    },
    {
      path: 'Calculator',
      name: 'Calculator',
    },
    {
      path: 'Quote',
      name: 'Quote',
    },
  ];

  return (
    <nav className={styles.navigation}>
      <h1>Math Magicians</h1>
      <ul>
        {pages.map((link) => (
          <li key={link.id}>
            <Link to={link.path} exact>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
