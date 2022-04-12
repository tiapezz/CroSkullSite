import React, {useState} from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Logo from "./logo-white.png";
import menuIcon from "./menu-icon.svg";

const Navbar = () => {

    const [menuState, setMenuState] = useState(false)
    const toggleMenu = () => {
        setMenuState( ! menuState )
      }
    return(
<nav className="navbar navbar-expand-sm header">
      <Link to="/" className="crLogo">
        <img src={Logo} alt="CroSkull Logo" className="site-logo"/>
      </Link>
      <button
        className="navbar-toggler"
        onClick={
          () => toggleMenu()
        }
      >
        <span className="navbar-toggler-icon">
          <img 
            src={menuIcon}
            className="toggler-icon"
             />
        </span>
      </button>
      
      <div 
        id="navbarNav" 
        className={`navMenu navbar-collapse ${menuState ? 'show' : ''}`}
      >
        <ul
          style={{ fontSize: "0.8rem", letterSpacing: "0.2rem" }}
          className="navbar-nav ml-auto"
          onClick={ () => toggleMenu() }
        >
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/graveyard" className="nav-link">
              Graveyard
            </Link>
            {  }
          </li>
          <li className="nav-item">
            <a href="https://app.croskull.com" className="nav-link">
              Underworld
            </a>
          </li>
        </ul>
        <div
          className="social-list"
        >
          <a href="https://discord.gg/Z2EbH9fFM8" target="_blank">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://twitter.com/CroskullNFT" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://croskull-nft.gitbook.io/croskull/" target="_blank">
            <FontAwesomeIcon icon={faBook} />
          </a> 
          <a href="http://medium.com/@croskullnft" target="_blank">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </div>
    </nav>
    )
}
export default Navbar;