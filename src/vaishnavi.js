import React, { useEffect, useState } from 'react';
import './App.css';
import vaishnaviImage from "./vaishnavi.jpeg";
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  // Toggle the menu
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Handle scroll and load events
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false); // Close the menu on scroll
      if (window.scrollY > 0) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Call it on the initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scrolling
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <header className={`user ${isMenuOpen ? 'toggle' : ''}`}>
        <div className="user">
          <img src={vaishnaviImage} alt="Vaishnavi Konjeti" /> {/* Replace with image URL */}
          <h3 className="name">Vaishnavi Konjeti</h3>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>

      <section className="home" id="home">
        
        <h1>Vaishnavi Konjeti</h1>
      </section>

      {/* Rest of your code... */}

      {showTopButton && (
        <a href="#home" className="top" onClick={(e) => handleLinkClick(e, '#home')}>
          <img src="images/scroll-top-img.png" alt="" /> {/* Replace with image URL */}
        </a>
      )}
    </div>
  );
}

export default App;