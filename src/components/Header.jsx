import { useState } from 'react';
import { Link, Route, Switch } from "wouter";
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
        <h1>Mimic Compare</h1>
        <ul>
        <Link href='/About'>
          <li>
            About
          </li>
        </Link>
        <Link href='/Rules'>
          <li>
            How to play?
          </li>
        </Link>
        <Link href='/'>
          <li>
            Home
          </li>
        </Link>
        </ul>
      </nav>
    </header>
  );
}