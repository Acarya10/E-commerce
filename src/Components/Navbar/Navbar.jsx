import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaCartShopping,FaCircleUser } from "react-icons/fa6";
import { React, useState } from "react";
import { useMediaQuery } from '@react-hook/media-query';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <nav className="nav-bar">
      <div className="left-nav-section">
 
        <Link to="https://github.com/Acarya10/E-commerce">
        <img src="./src/images/ShoeLogo.jpeg" className="flipkart-logo" alt="Shoe Logo" />
        </Link>
        <h1 className="name" >Shoes Store 👟</h1>
      </div>

      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`bar1 ${isMenuOpen ? "rotate-down" : ""}`}></div>
        <div className={`bar2 ${isMenuOpen ? "hidden" : ""}`}></div>
        <div className={`bar3 ${isMenuOpen ? "rotate-up" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li className="li">
          <Link to="/Home" className="nav-links-rm">
            Home
          </Link>
        </li>
        <li className="li">
          <Link to="/Product" className="nav-links-rm">
            Product
          </Link>
        </li>
        <li className="li">
          <Link to="/Cart" className="nav-links-rm"> <FaCartShopping className="icon-cart" />
            Cart
          </Link>
        </li>
        <li className="li" >
          <Link to="/Profile" className="nav-links-rm"> 
          {isSmallScreen&&(
            <>Profile</>
          )}
          {!isSmallScreen&&(
            <FaCircleUser style={{height:'20px',width:'20px'}}/>
          )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
