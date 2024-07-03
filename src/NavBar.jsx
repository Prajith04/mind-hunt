import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import './NavBar.css';  // Import the CSS file

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MindHunt</div>
        
        <div className="navbar-links">
          <a href="/" className="navbar-link">Home</a>
          <a href="/about" className="navbar-link">About</a>
          <a href="/career" className="navbar-link">Career</a>
          <a href="/contact" className="navbar-link">Contact</a>
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggle"
        >
          <Menu size={25} />
        </button>
      </div>
      
      {isOpen && (
        <div className="navbar-mobile-menu">
          <a href="/" className="navbar-mobile-link">Home</a>
          <a href="/about" className="navbar-mobile-link">About</a>
          <a href="#" className="navbar-mobile-link">Services</a>
          <a href="/contact" className="navbar-mobile-link">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
