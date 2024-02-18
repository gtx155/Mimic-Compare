import { useState } from 'react';
import { Link,  } from "wouter";
import "../components/Header.css"

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className='mobile-header'>
      <Link href='/'>
      <div className='logo'>
        <img src="/icon.webp" alt="icon" />
        <p className='site-title'>Mimic Compare</p>
      </div>
      </Link>
      <button className='menu-button' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </button>
      <nav className={`menu ${isOpen ? 'open' : 'desktop'}`}>
        <ul>
          <li>
            <Link href='/About'>About</Link>
          </li>
          <li>
            <Link href='/FAQ'>FAQ</Link>
          </li>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}